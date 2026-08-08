import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_URL = 'https://wa.me/917827710760';

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Stitchora on WhatsApp"
      title="Chat with us on WhatsApp"
      className="whatsapp-fab fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 ease-out hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-6 sm:right-6"
    >
      <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}

export default FloatingWhatsApp;