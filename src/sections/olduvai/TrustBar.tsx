const ITEMS = [
  '★ 5.0 Tripadvisor',
  'ATTA Member',
  'Financially Protected Bookings',
  '100% Tanzanian-Owned',
  'KPAP-Certified Guides',
];

export default function TrustBar() {
  return (
    <div className="bg-ovl-bg border-y border-[rgba(33,29,26,0.22)] py-5 px-6 md:px-14">
      <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:gap-x-10">
        {ITEMS.map((item) => (
          <li
            key={item}
            className="font-jost text-[10px] uppercase tracking-[.16em] md:tracking-[.28em] text-ovl-faint whitespace-nowrap"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
