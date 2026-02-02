import Link from 'next/link';

export default function AvaliacaoPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-verde-mar-600 to-verde-mar-500 py-20 md:py-24 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Avaliação Psicológica
            </h1>
            <p className="text-xl md:text-2xl text-verde-mar-50 font-light">
              Compreensão técnica e cuidadosa do funcionamento psicológico
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
                A avaliação psicológica é um processo técnico e cuidadoso que busca compreender aspectos emocionais, cognitivos, comportamentais e de personalidade de uma pessoa, sempre a partir de critérios científicos e éticos da Psicologia.
              </p>

              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                Ela não se resume à aplicação de testes. Trata-se de um acompanhamento estruturado, que envolve entrevistas, observação clínica e instrumentos psicológicos adequados para cada objetivo. O foco é oferecer uma compreensão mais clara sobre o funcionamento psicológico, respeitando a individualidade e o momento de vida de cada pessoa.
              </p>
            </div>

            {/* Instrumentos */}
            <div className="bg-verde-mar-50 rounded-2xl p-8 md:p-10 mb-12 border-l-4 border-verde-mar-500">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-cinza-900 mb-6">
                Instrumentos Utilizados
              </h2>

              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                Em meu trabalho, utilizo instrumentos psicológicos reconhecidos pelo Conselho Federal de Psicologia (CFP), bem como técnicas complementares, selecionados de acordo com os objetivos da avaliação, a demanda apresentada e as características do(a) avaliado(a). Os instrumentos empregados possibilitaram a coleta de informações relevantes sobre aspectos cognitivos, emocionais, comportamentais e adaptativos, respeitando os princípios éticos e técnicos da prática psicológica.
              </p>

              <p className="text-lg text-cinza-700 leading-relaxed">
                Os dados obtidos por meio dos instrumentos foram analisados de forma integrada, considerando-se também as informações provenientes da entrevista psicológica, observações clínicas e demais procedimentos adotados durante o processo avaliativo.
              </p>
            </div>

            {/* Avaliação Neuropsicológica */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-cinza-900 mb-8 text-center">
                Avaliação Neuropsicológica
              </h2>

              <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-verde-mar-500 mb-8">
                <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                  A avaliação neuropsicológica é indicada, por exemplo, para investigar:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verde-mar-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-cinza-700">Dificuldades de aprendizagem</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verde-mar-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-cinza-700">Alterações cognitivas</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verde-mar-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-cinza-700">Queixas de memória</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verde-mar-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-cinza-700">Problemas de atenção</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verde-mar-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-cinza-700">Mudanças no comportamento</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-verde-mar-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-cinza-700">Funções executivas</p>
                  </div>
                </div>

                <p className="text-lg text-cinza-700 leading-relaxed mt-6">
                  Sempre com um olhar cuidadoso e integrado ao contexto emocional e familiar da pessoa.
                </p>
              </div>
            </div>

            {/* Processo */}
            <div className="bg-gradient-to-br from-verde-mar-50 to-white rounded-2xl p-8 md:p-10 mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-cinza-900 mb-6">
                Como Funciona o Processo
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-verde-mar-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cinza-900 mb-2">Escuta e Clareza</h3>
                    <p className="text-cinza-700 leading-relaxed">
                      Todo o processo é conduzido com escuta, clareza e responsabilidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-verde-mar-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cinza-900 mb-2">Avaliação Personalizada</h3>
                    <p className="text-cinza-700 leading-relaxed">
                      Aplicação de instrumentos adequados à necessidade de cada pessoa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-verde-mar-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cinza-900 mb-2">Resultados Acessíveis</h3>
                    <p className="text-cinza-700 leading-relaxed">
                      Os resultados são apresentados de forma acessível, ajudando a pessoa — ou a família — a compreender melhor suas potencialidades, dificuldades e possibilidades de cuidado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-verde-mar-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cinza-900 mb-2">Orientação e Encaminhamentos</h3>
                    <p className="text-cinza-700 leading-relaxed">
                      Seja para orientação, acompanhamento terapêutico ou encaminhamentos quando necessários.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposta */}
            <div className="mb-12">
              <p className="text-lg text-cinza-700 leading-relaxed text-center italic">
                A avaliação psicológica não tem como objetivo rotular, mas compreender. É um caminho para ampliar o autoconhecimento e oferecer direções mais conscientes para o cuidado emocional e cognitivo.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-verde-mar-500 to-verde-mar-600 rounded-2xl p-8 md:p-10 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Precisa de uma Avaliação Psicológica?
              </h3>
              <p className="text-verde-mar-50 mb-8 text-lg">
                Entre em contato para entender como a avaliação pode ajudar você ou sua família.
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
