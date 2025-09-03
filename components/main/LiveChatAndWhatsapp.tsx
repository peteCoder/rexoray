export default function LiveChatAndWhatsapp() {
  const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;
  return (
    <div className="">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`} // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
  );
}
