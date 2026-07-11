import Link from 'next/link';

interface Props {
  crumbs: Array<{ label: string; href: string }>;
  current: string;
}

export default function TourBreadcrumb({ crumbs, current }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="shell py-4 border-b border-[rgba(33,29,26,0.22)]">
      <ol className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-label text-[#7a746c] flex-wrap">
        {crumbs.map((c) => (
          <li key={c.href} className="flex items-center gap-2">
            <Link href={c.href} className="hover:text-[#5c5750] transition-colors focus:outline-none focus-visible:underline">
              {c.label}
            </Link>
            <span aria-hidden="true">›</span>
          </li>
        ))}
        <li className="text-ovl-accent" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
}
