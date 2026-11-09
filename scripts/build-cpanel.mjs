import { cp, mkdir, mkdtemp, rm, symlink } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tempRoot = await mkdtemp(path.join(tmpdir(), 'agt-cpanel-'));
const worktree = path.join(tempRoot, 'project');
const output = path.join(root, 'cpanel-deploy');

const excludedTopLevel = new Set([
  '.git',
  '.next',
  '.vercel',
  'cpanel-deploy',
  'hero video',
  'logo',
  'node_modules',
  'photos',
]);

function includeInBuild(source) {
  const relative = path.relative(root, source);
  if (!relative) return true;
  const [topLevel] = relative.split(path.sep);
  if (excludedTopLevel.has(topLevel)) return false;
  if (relative === '.env' || relative.startsWith('.env.')) return false;
  return true;
}

try {
  await cp(root, worktree, { recursive: true, filter: includeInBuild });
  await symlink(path.join(root, 'node_modules'), path.join(worktree, 'node_modules'), 'dir');

  // Server routes cannot be included in a static export. The source project is
  // left untouched; cPanel uses the PHP endpoint copied below instead.
  await rm(path.join(worktree, 'src', 'app', 'api'), { recursive: true, force: true });

  const nextBin = path.join(root, 'node_modules', 'next', 'dist', 'bin', 'next');
  const build = spawnSync(process.execPath, [nextBin, 'build'], {
    cwd: worktree,
    env: {
      ...process.env,
      CPANEL_STATIC_EXPORT: 'true',
      NEXT_PUBLIC_CONTACT_ENDPOINT: '/api/contact.php',
      NEXT_PUBLIC_WHATSAPP_API_ENABLED: 'false',
      NEXT_PUBLIC_WHATSAPP_NUMBER:
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '255683452012',
      NEXT_PUBLIC_WHATSAPP_DEFAULT_MSG:
        process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MSG ||
        "Hi African Genuine Tours & Safaris, I'd like to plan a trip.",
    },
    stdio: 'inherit',
  });

  if (build.status !== 0) {
    throw new Error(`cPanel export failed with status ${build.status ?? 'unknown'}`);
  }

  await rm(output, { recursive: true, force: true });
  await cp(path.join(worktree, 'out'), output, { recursive: true });
  await mkdir(path.join(output, 'api'), { recursive: true });
  await cp(path.join(root, 'deploy', 'cpanel', 'contact.php'), path.join(output, 'api', 'contact.php'));
  await cp(path.join(root, 'deploy', 'cpanel', '.htaccess'), path.join(output, '.htaccess'));

  console.log(`cPanel package ready: ${output}`);
} finally {
  await rm(tempRoot, { recursive: true, force: true });
}
