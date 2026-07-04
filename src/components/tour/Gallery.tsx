import Image from 'next/image';
import type { GalleryTile } from '@/data/tours/types';

interface Props {
  tiles: GalleryTile[];
}

export default function Gallery({ tiles }: Props) {
  const [large, ...rest] = tiles;

  return (
    <section aria-label="Photo gallery" className="mt-10">
      <h2 className="section-title mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[200px] md:auto-rows-[220px]">
        {/* First tile — large (2×2) */}
        {large && (
          <div className="relative col-span-2 row-span-2 rounded-card overflow-hidden group">
            <Image
              src={large.src}
              alt={large.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
        )}

        {/* Remaining tiles */}
        {rest.map((tile, i) => (
          <div key={i} className="relative rounded-card overflow-hidden group">
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 22vw"
            />
            {tile.overlay && (
              <div className="absolute inset-0 flex items-center justify-center bg-ink/60 backdrop-blur-[2px]">
                <span className="font-display text-[22px] font-bold tracking-tighter text-cream">
                  {tile.overlay}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
