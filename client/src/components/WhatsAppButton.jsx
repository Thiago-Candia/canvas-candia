import { WhatsAppIcon } from './Icons.jsx';
import { whatsappUrl } from '../lib/whatsapp.js';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.4)] transition hover:scale-110"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
