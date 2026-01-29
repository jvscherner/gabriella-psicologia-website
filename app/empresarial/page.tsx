import Link from 'next/link';

export default function EmpresarialPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-verde-mar-600 to-verde-mar-500 py-20 md:py-24 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Atendimento Empresarial
            </h1>
            <p className="text-xl md:text-2xl text-verde-mar-50 font-light">
              Cuidado com a saúde emocional nas organizações
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introdução */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                O atendimento empresarial é voltado para o cuidado com a saúde emocional e relacional dentro das organizações, reconhecendo que empresas são formadas por pessoas, histórias e vínculos que impactam diretamente o clima de trabalho, o desempenho e a qualidade das relações profissionais.
              </p>

              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                O acompanhamento psicológico empresarial pode acontecer de forma pontual ou contínua, de acordo com a necessidade da empresa. Ele tem como objetivo oferecer suporte aos colaboradores, auxiliando na prevenção do adoecimento emocional, no manejo do estresse, na melhoria da comunicação e no fortalecimento das relações no ambiente de trabalho.
              </p>
            </div>

            {/* Serviços */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-cinza-900 mb-8 text-center">
                Serviços Oferecidos
              </h2>

              <div className="space-y-6">
                {/* Seleção e Recrutamento */}
                <div className="bg-verde-mar-50 rounded-xl p-8 border-l-4 border-verde-mar-500 hover:shadow-md hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-verde-mar-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cinza-900 mb-3">Seleção e Recrutamento</h3>
                      <p className="text-cinza-700 leading-relaxed">
                        Auxílio nos processos de seleção e recrutamento, por meio de entrevistas psicológicas e aplicação de testes, buscando compreender perfis comportamentais, habilidades emocionais e compatibilidade com a função e com a cultura organizacional. Esse cuidado contribui para contratações mais conscientes e alinhadas às necessidades da empresa.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Consultas Psicológicas */}
                <div className="bg-verde-mar-50 rounded-xl p-8 border-l-4 border-verde-mar-500 hover:shadow-md hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-verde-mar-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cinza-900 mb-3">Consultas Psicológicas Pontuais</h3>
                      <p className="text-cinza-700 leading-relaxed">
                        Consultas psicológicas para situações específicas, como momentos de crise, urgências emocionais ou demandas pontuais que exigem acolhimento e escuta qualificada. Esses atendimentos podem auxiliar tanto colaboradores quanto lideranças a atravessarem períodos mais sensíveis com maior clareza e equilíbrio.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Acompanhamento Individual */}
                <div className="bg-verde-mar-50 rounded-xl p-8 border-l-4 border-verde-mar-500 hover:shadow-md hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-verde-mar-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cinza-900 mb-3">Acompanhamento Psicológico Individual</h3>
                      <p className="text-cinza-700 leading-relaxed">
                        Acompanhamento psicológico voltado ao desenvolvimento individual, ajudando cada colaborador a reconhecer seus recursos, lidar melhor com desafios, aprimorar habilidades emocionais e fortalecer seu desempenho profissional de forma saudável e sustentável.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Prevenção do Adoecimento */}
                <div className="bg-verde-mar-50 rounded-xl p-8 border-l-4 border-verde-mar-500 hover:shadow-md hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-verde-mar-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cinza-900 mb-3">Prevenção e Bem-Estar</h3>
                      <p className="text-cinza-700 leading-relaxed">
                        Suporte aos colaboradores, auxiliando na prevenção do adoecimento emocional, no manejo do estresse, na melhoria da comunicação e no fortalecimento das relações no ambiente de trabalho.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compromisso */}
            <div className="bg-gradient-to-br from-verde-mar-50 to-white rounded-2xl p-8 md:p-10 mb-12">
              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                Todo o trabalho é conduzido com <strong className="text-verde-mar-700">ética, sigilo e respeito</strong>, considerando tanto as necessidades da organização quanto o bem-estar de cada pessoa envolvida.
              </p>

              <p className="text-lg text-cinza-700 leading-relaxed">
                O objetivo é contribuir para ambientes de trabalho mais conscientes, humanos e equilibrados, onde o cuidado emocional faça parte da construção de resultados.
              </p>
            </div>

            {/* CTA Especial de Contato */}
            <div className="bg-gradient-to-br from-verde-mar-500 to-verde-mar-600 rounded-2xl p-8 md:p-10 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Ícone */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-verde-mar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Texto */}
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
                    Interessado?
                  </h3>
                  <p className="text-verde-mar-50 text-lg leading-relaxed">
                    Me contate e vamos analisar como podemos fazer o melhor para sua demanda, além de verificarmos possíveis orçamentos.
                  </p>
                </div>

                {/* Botão */}
                <div className="flex-shrink-0">
                  <Link
                    href="/contato"
                    className="bg-white text-verde-mar-700 px-8 py-4 rounded-lg hover:bg-verde-mar-50 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-semibold text-lg transition-all inline-flex items-center justify-center whitespace-nowrap"
                  >
                    Entrar em Contato
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
