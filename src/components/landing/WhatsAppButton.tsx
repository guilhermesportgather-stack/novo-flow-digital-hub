import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://api.whatsapp.com/send?phone=5541988642463&text=Eu%20quero%20saber%20mais%20sobre%20o%20novo%20flow%20para%20meu%20neg%C3%B3cio."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 animate-pulse-glow"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

export default WhatsAppButton;
