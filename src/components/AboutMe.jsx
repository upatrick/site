import React, { useState, useEffect } from "react";

const AboutMe = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simula o carregamento do componente
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="flex flex-col items-center p-8"
      style={{
        background: "linear-gradient(360deg, #FFFFFF 46%, #e5e5e5 100%)",
      }}
    >
      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        Estou esperando você para começar a jornada!
      </h1>
      <p className="text-gray-700 text-center mb-6">
        Prazer, me Chamo Patrick Dutra, tenho 22 anos, sou formado em Gestão de Tecnologia
        da Informação e me dedico desde 2024 à Gestão de Tráfego.
      </p>
      <p className="text-gray-700 text-center mb-6">
        A empresa DevMídias é especialista em negócios locais em diversos nichos de
        atuação.
      </p>
      <p className="text-gray-700 text-center mb-6">
        Durante esse tempo de trabalho testamos e validamos estratégias que podem ser
        aplicadas no seu negócio e que têm um potencial absurdo de fazer o seu faturamento
        aumentar.
      </p>
      <a
        href="https://wa.me/55YOURPHONE" // Substitua 'YOURPHONE' pelo seu número de telefone
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-blue-700 mt-4 text-white font-bold py-3 px-6 rounded-full transform transition-all duration-500 ease-in-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Fale comigo no WhatsApp
      </a>
    </div>
  );
};

export default AboutMe;
