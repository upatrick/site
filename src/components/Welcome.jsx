import React, { useEffect, useState } from "react";

function Welcome() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center p-5 lg:flex-row lg:justify-between lg:items-center lg:p-16"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 46%, #e5e5e5 100%)",
      }}
    >
      <div className="xl:mb-4 lg:w-1/2 mb-2 xl:w-2/3 xl:ml-48 xl:mt-20 1xl:mb-6">
        <h2
          className={`font-sans-serif text-2xl font-bold text-center lg:text-left mb-4 lg:text-4xl transform transition duration-2000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Transforme{" "}
          <span font-sans className="text-blue-600">
            cliques em clientes
          </span>{" "}
          com estratégias personalizadas de tráfego pago.
        </h2>
        <p
          className={`text-base font-normal text-center lg:text-left mb-4 lg:text-lg transition-opacity duration-2000 delay-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          Converta seu investimento em tráfego pago em lucro e reconhecimento. Comigo,
          Patrick Dutra, cada real investido trabalha duro para escalar seu negócio,
          garantindo que sua marca não só seja vista, mas também lembrada e preferida.
        </p>
        <div className="flex justify-center">
          <a
            href="https://wa.me/55YOURPHONE" // Substitua 'YOURPHONE' pelo seu número de telefone
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-blue-700 mt-2 text-white font-bold py-2 px-4 rounded-full transform transition duration-900 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Fale comigo no WhatsApp
          </a>
        </div>
      </div>
      <div
        className={`mr-0 lg:ml-7 transition-opacity duration-2000 delay-600 lg:mt-0 mt-8 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="/meWithoutBG.png"
          alt="Imagem do Profissional"
          className="w-96 lg:w-full object-cover -mb-5 lg:-mb-52 xl:w-2/4 1xl:w-3/4 2xl:w-3/4 2xl:-mb-16"
        />
      </div>
    </div>
  );
}

export default Welcome;
