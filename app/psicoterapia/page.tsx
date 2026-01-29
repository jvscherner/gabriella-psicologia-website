import Link from 'next/link';

export default function PsicoterapiaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-verde-mar-600 to-verde-mar-500 py-20 md:py-24 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Psicoterapia
            </h1>
            <p className="text-xl md:text-2xl text-verde-mar-50 font-light">
              Um espaço de escuta, acolhimento e construção
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
                A psicoterapia é um espaço de escuta, acolhimento e construção. Um espaço onde a história de cada pessoa importa, assim como os vínculos, os contextos e as relações que a atravessam.
              </p>

              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                Minha atuação é baseada na <strong className="text-verde-mar-700">abordagem sistêmico-familiar</strong>, que compreende o ser humano para além do individual. Nessa perspectiva, ninguém existe isolado: somos formados pelas relações que vivemos, pelas experiências que nos marcaram e pelos sistemas dos quais fazemos parte — família, casal, trabalho, afetos, histórias que se repetem e histórias que pedem mudança.
              </p>

              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                Ao olhar para você, não vejo apenas um sintoma ou uma queixa. Vejo um conjunto de vivências que se entrelaçam, como um quebra-cabeça único, construído ao longo do tempo. Cada peça tem significado, mesmo aquelas que hoje parecem confusas ou dolorosas.
              </p>
            </div>

            {/* Card de Atendimento */}
            <div className="bg-verde-mar-50 rounded-2xl p-8 md:p-10 mb-12 border-l-4 border-verde-mar-500">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-cinza-900 mb-6">
                Áreas de Atendimento
              </h2>

              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                O foco do meu trabalho está no atendimento a <strong className="text-verde-mar-700">casais, crianças e mulheres</strong>, respeitando as particularidades de cada fase da vida e de cada configuração familiar.
              </p>

              <div className="space-y-6">
                {/* Casais */}
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-verde-mar-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cinza-900 mb-2">Casais</h3>
                      <p className="text-cinza-700 leading-relaxed">
                        Nos atendimentos com casais, o olhar se volta para a dinâmica da relação, a comunicação, os conflitos e os vínculos afetivos.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Crianças */}
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-verde-mar-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cinza-900 mb-2">Crianças</h3>
                      <p className="text-cinza-700 leading-relaxed">
                        Com crianças, o cuidado se estende ao contexto familiar, entendendo que o desenvolvimento emocional acontece sempre em relação.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mulheres */}
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-verde-mar-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cinza-900 mb-2">Mulheres</h3>
                      <p className="text-cinza-700 leading-relaxed">
                        No acompanhamento de mulheres, há espaço para acolher histórias, sobrecargas, dores silenciosas e processos de fortalecimento pessoal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposta */}
            <div className="mb-12">
              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                A psicoterapia não é sobre julgamentos ou respostas prontas. É sobre compreender padrões, dar novos significados às experiências e criar possibilidades mais saudáveis de se relacionar consigo e com o outro. O processo acontece no tempo de cada pessoa.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-verde-mar-500 to-verde-mar-600 rounded-2xl p-8 md:p-10 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Pronto para começar sua jornada?
              </h3>
              <p className="text-verde-mar-50 mb-8 text-lg">
                Entre em contato e agende sua primeira consulta. Estou aqui para te acolher.
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
