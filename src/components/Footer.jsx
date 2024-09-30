import React from "react";

function Footer() {
  return (
    <div
      className="p-0 m-0 w-full py-6 flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(360deg, #265097, #2575fc)",
      }}
    >
      <h2 className="text-xl font-bold text-white mb-2">
        Me acompanhe nas redes sociais
      </h2>
      <div className="flex-row flex space-x-3">
        <a
          href="https://www.instagram.com"
          className="text-white text-2xl underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/instagram.svg" alt="Icone Instagram" />
        </a>
        <a
          href="https://wa.me/55YOURPHONE"
          className="text-white text-2xl underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/whatsapp.svg" alt="Icone Whatsapp" />
        </a>
      </div>
      <p className="text-white mt-4">©Patrick Dutra. Todos os direitos reservados.</p>
    </div>
  );
}

export default Footer;
