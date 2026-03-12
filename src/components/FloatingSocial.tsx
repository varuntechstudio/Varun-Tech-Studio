import { MessageCircle, Instagram } from "lucide-react";

const FloatingSocial = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917793988153"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white transition-all hover:scale-110"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Instagram Button */}
      <a
        href="https://instagram.com/varuntechstudio"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white transition-all hover:scale-110"
        style={{
          background:
            "linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)",
        }}
        aria-label="Visit Instagram"
      >
        <Instagram size={24} />
      </a>
    </div>
  );
};

export default FloatingSocial;