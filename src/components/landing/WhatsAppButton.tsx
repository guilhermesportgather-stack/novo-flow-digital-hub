import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5541999999999"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 animate-pulse-glow"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

export default WhatsAppButton;
