import React, { useEffect, useState } from "react";

function Second() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simula a carga do componente
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Altere o tempo conforme necessário

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-5 mt-10 ">
      <div className="max-w-7xl w-full gap-6 flex flex-col lg:flex-row lg:justify-evenly lg:gap-6">
        {/* Card 1 */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md text-center lg:max-w-xs transform transition-all duration-700 ease-in-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="/icons/work.svg"
            alt="Imersão no seu negócio"
            className="mx-auto mb-4 h-16 w-16 object-contain"
          />
          <h2 className="text-xl font-bold text-blue-600">Imersão no seu negócio</h2>
          <p className="text-gray-700">
            Será criada uma estrutura exclusiva para o seu negócio, com uma abordagem
            personalizada para alcançar resultados ainda melhores.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md text-center lg:max-w-xs transform transition-all duration-700 ease-in-out delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="/icons/people.svg"
            alt="Campanhas Estratégicas"
            className="mx-auto mb-4 h-16 w-16 object-contain"
          />
          <h2 className="text-xl font-bold text-blue-600">Campanhas Estratégicas</h2>
          <p className="text-gray-700">
            Nós desenvolvemos campanhas exclusivas para seu negócio, considerando suas
            particularidades. Priorizamos as características individuais de cada projeto
            para alcançar os melhores resultados possíveis.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md text-center lg:max-w-xs transform transition-all duration-700 ease-in-out delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="/icons/chart.svg"
            alt="Relatórios Inteligentes"
            className="mx-auto mb-4 h-16 w-16 object-contain"
          />
          <h2 className="text-xl font-bold text-blue-600">Relatórios Inteligentes</h2>
          <p className="text-gray-700">
            Você terá acesso total aos seus resultados por meio de planilhas em tempo real
            e relatórios mensais de resultados.
          </p>
        </div>
      </div>
      <a
        href="https://wa.me/5511999999999" // Substitua '5511999999999' pelo seu número de telefone correto
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-blue-700 mt-10 text-white font-bold py-3 px-6 rounded-full transform transition-all duration-500 ease-in-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Fale comigo no WhatsApp
      </a>
    </div>
  );
}

export default Second;
