import Link from 'next/link';

export default function BarrasAccessPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-verde-mar-600 to-verde-mar-500 py-20 md:py-24 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Barras de Access®
            </h1>
            <p className="text-xl md:text-2xl text-verde-mar-50 font-light">
              Relaxamento profundo e liberação de padrões mentais
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
                As Barras de Access® são uma técnica terapêutica que trabalha o relaxamento profundo e a liberação de padrões mentais e emocionais que, muitas vezes, nos mantêm presos a estresse, ansiedade, crenças limitantes e sobrecarga do dia a dia.
              </p>
            </div>

            {/* Como Funciona */}
            <div className="bg-verde-mar-50 rounded-2xl p-8 md:p-10 mb-12 border-l-4 border-verde-mar-500">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-cinza-900 mb-6">
                Como Funciona
              </h2>

              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                Durante a sessão, a pessoa permanece deitada, enquanto são tocados suavemente <strong className="text-verde-mar-700">32 pontos específicos na cabeça</strong>. Esses pontos estão relacionados a diferentes áreas da vida, como controle, criatividade, dinheiro, comunicação, corpo, emoções e pensamentos.
              </p>

              <p className="text-lg text-cinza-700 leading-relaxed">
                O toque é leve e não invasivo, promovendo um estado de relaxamento que ajuda a mente a desacelerar.
              </p>
            </div>

            {/* Benefícios */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-cinza-900 mb-8 text-center">
                Benefícios Relatados
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-verde-mar-100 hover:shadow-md hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-verde-mar-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-verde-mar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cinza-900 mb-2">Sensação de Leveza</h3>
                      <p className="text-cinza-700">Alívio da sobrecarga mental e emocional acumulada</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-verde-mar-100 hover:shadow-md hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-verde-mar-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-verde-mar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cinza-900 mb-2">Clareza Mental</h3>
                      <p className="text-cinza-700">Maior facilidade para pensar e tomar decisões</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-verde-mar-100 hover:shadow-md hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-verde-mar-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-verde-mar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cinza-900 mb-2">Diminuição da Ansiedade</h3>
                      <p className="text-cinza-700">Redução dos níveis de estresse e preocupação</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-verde-mar-100 hover:shadow-md hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-verde-mar-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-verde-mar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cinza-900 mb-2">Melhora do Sono</h3>
                      <p className="text-cinza-700">Descanso mais profundo e reparador</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-verde-mar-100 hover:shadow-md hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-verde-mar-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-verde-mar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cinza-900 mb-2">Maior Facilidade Emocional</h3>
                      <p className="text-cinza-700">Melhora na capacidade de lidar com desafios</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-verde-mar-100 hover:shadow-md hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-verde-mar-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-verde-mar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cinza-900 mb-2">Relação Mais Gentil</h3>
                      <p className="text-cinza-700">Maior aceitação e cuidado consigo mesmo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposta */}
            <div className="bg-gradient-to-br from-verde-mar-50 to-white rounded-2xl p-8 md:p-10 mb-12">
              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                Mais do que "resolver problemas", as Barras de Access® convidam a criar espaço: espaço para novas percepções, para escolhas mais conscientes e para uma relação mais gentil consigo mesmo. É um cuidado que não exige esforço, apenas disponibilidade para receber.
              </p>

              <p className="text-lg text-cinza-700 leading-relaxed">
                As sessões podem ser um complemento ao processo terapêutico, auxiliando no bem-estar emocional e no equilíbrio interno, sempre de forma ética, acolhedora e respeitosa.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-verde-mar-500 to-verde-mar-600 rounded-2xl p-8 md:p-10 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Experimente as Barras de Access®
              </h3>
              <p className="text-verde-mar-50 mb-8 text-lg">
                Agende sua sessão e permita-se esse momento de cuidado e relaxamento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5545991222290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-verde-mar-700 px-8 py-4 rounded-lg hover:bg-verde-mar-50 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-semibold text-lg transition-all inline-flex items-center justify-center"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
                <Link
                  href="/contato"
                  className="bg-verde-mar-700 text-white px-8 py-4 rounded-lg hover:bg-verde-mar-800 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-semibold text-lg transition-all"
                >
                  Página de Contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
