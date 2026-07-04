'use client';

import { useState, useEffect } from 'react';
import { WA_NUMBER, waUrl } from '@/config/whatsapp';

const STORAGE_KEY = 'ag-wa-tooltip-dismissed';

interface Props {
  message?: string;
}

export default function WhatsAppFab({ message }: Props) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (!WA_NUMBER) return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const id = setTimeout(() => setShowTooltip(true), 2500);
    return () => clearTimeout(id);
  }, []);

  function dismiss() {
    setShowTooltip(false);
    localStorage.setItem(STORAGE_KEY, '1');
  }

  if (!WA_NUMBER) return null;

  return (
    /*
     * bottom-20 on mobile keeps the FAB above the sticky booking bar (~72px).
     * lg:bottom-6 on desktop — the sticky bar is hidden at lg breakpoint.
     */
    <div className="fixed bottom-20 lg:bottom-6 right-4 z-40 flex flex-col items-end gap-2 print:hidden">
      {showTooltip && (
        <div
          role="tooltip"
          className="flex items-center gap-2 rounded-pill bg-ink-deep border border-line px-4 py-2 shadow-xl"
        >
          <span className="font-body text-[13px] text-cream whitespace-nowrap">
            Questions? Chat with us
          </span>
          <button
            onClick={dismiss}
            aria-label="Dismiss WhatsApp prompt"
            className="text-clay hover:text-cream transition-colors text-[18px] leading-none -mt-px"
          >
            ×
          </button>
        </div>
      )}

      <a
        href={waUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onClick={() => { if (showTooltip) dismiss(); }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full hover:-translate-y-1 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        style={{
          background: '#25D366',
          boxShadow: '0 0 0 3px #0c0a07, 0 0 0 5px rgba(200,165,92,0.35), 0 8px 24px rgba(0,0,0,0.5)',
        }}
      >
        {showTooltip && (
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full animate-ping opacity-25"
            style={{ background: '#25D366' }}
          />
        )}
        {/* WhatsApp logo */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
