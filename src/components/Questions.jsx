import React, { useState } from "react";

const Questions = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  // Perguntas
  const questions = [
    "Qual é o custo médio de uma campanha de tráfego pago?",
    "Quanto tempo leva para ver resultados com o tráfego pago?",
    "Como você garante resultados consistentes com o tráfego pago?",
    "Como você mede o sucesso das campanhas de tráfego pago?",
    "O tráfego pago é adequado para todos os tipos de negócio?",
    "Quem pagará os anúncios?",
    "Trabalham com todos os nichos?",
    "Vocês só trabalham com anúncios?",
  ];

  // Respostas específicas para cada pergunta
  const answers = [
    "O investimento ideal é um valor que possa ser mantido no médio prazo, até que as campanhas peguem escala. O custo varia dependendo de fatores como tamanho do mercado-alvo e tipo de anúncio, mas eu trabalho com cada cliente para desenvolver campanhas que se encaixem em seu orçamento.",
    "Os resultados podem variar, mas muitos clientes começam a ver um aumento no tráfego e nas conversões dentro de algumas semanas após o lançamento das campanhas.",
    "O tráfego pago não faz milagres e precisa ser linkado a um conjunto de fatores. o que garanto é que irei desenvolver estratégias altamente direcionadas e otimizadas para cada cliente, visando alcançar suas metas específicas.",
    "Eu uso métricas como taxas de cliques, taxas de conversão, retorno sobre o investimento e custo por aquisição para medir o sucesso das campanhas.",
    "Sim, o tráfego pago pode ser adaptado para uma ampla variedade de negócios, desde pequenas empresas locais até grandes empresas globais.",
    "Os pagamentos são feitos pelo cliente, via cartão ou boleto, diretamente para a plataforma de anúncios.",
    "Quase todos. Não trabalhamos com afiliados, dropshipping, PLR e nichos black.",
    "O nosso time é capacitado para oferecer todos os serviços necessários para a veiculação de anúncios, que inclui: Social, sites, landing page, copy.",
  ];

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Dúvidas frequentes
      </h2>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="border-b pb-2">
            <button
              onClick={() => toggle(index)}
              className={`w-full text-left text-lg font-semibold flex justify-between items-center py-3 px-4 ${
                open === index ? "bg-blue-700 text-white" : "bg-blue-600 text-white"
              } rounded-lg transition-colors duration-300`}
            >
              {question}
              <span className="ml-4">{open === index ? "▲" : "▼"}</span>
            </button>
            {open === index && (
              <div className="bg-gray-100 p-4 mt-2 rounded-lg">
                <p className="text-gray-700">{answers[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
