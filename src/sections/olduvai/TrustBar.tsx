const ITEMS = [
  '★ 5.0 Tripadvisor',
  'ATTA Member',
  'Financially Protected Bookings',
  '100% Tanzanian-Owned',
  'KPAP-Certified Guides',
];

export default function TrustBar() {
  return (
    <div className="bg-ov-bg border-y border-[rgba(200,165,92,0.16)] py-5 px-14">
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {ITEMS.map((item) => (
          <li
            key={item}
            className="font-jost text-[10px] uppercase tracking-[.28em] text-ov-faint"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
