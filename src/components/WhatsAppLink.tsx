import { WA_NUMBER, waUrl } from '@/config/whatsapp';

interface Props {
  message?: string;
  className?: string;
  children: React.ReactNode;
}

export default function WhatsAppLink({ message, className, children }: Props) {
  if (!WA_NUMBER) return null;
  return (
    <a
      href={waUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
