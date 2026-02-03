import Link from 'next/link';

export default function NR1Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-verde-mar-600 to-verde-mar-500 py-20 md:py-24 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              NR-1 – Gestão de Riscos Ocupacionais
            </h1>
            <p className="text-xl md:text-2xl text-verde-mar-50 font-light">
              Saúde mental, segurança e conformidade legal para sua empresa
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
                A NR-1 é a norma que orienta as empresas na identificação, avaliação e gerenciamento dos riscos presentes no ambiente de trabalho, incluindo os riscos psicossociais, que impactam diretamente a saúde mental, o bem-estar e o desempenho dos colaboradores. Mais do que uma exigência legal, ela é uma ferramenta essencial para construir ambientes de trabalho mais saudáveis, seguros e produtivos.
              </p>

              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                A correta aplicação da NR-1 ajuda a prevenir adoecimentos físicos e emocionais, reduzir afastamentos, melhorar o clima organizacional e demonstrar o compromisso da empresa com o cuidado real das pessoas que fazem parte dela. Empresas que investem em saúde ocupacional não apenas cumprem a legislação, mas também fortalecem sua imagem, aumentam a produtividade e promovem relações de trabalho mais equilibradas e humanas.
              </p>

              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                Meu trabalho com a NR-1 vai além do cumprimento de normas. Realizo a aplicação de forma responsável, ética e personalizada, respeitando a realidade de cada empresa e considerando as necessidades específicas de seus colaboradores. O processo é conduzido com escuta ativa, sensibilidade e olhar clínico, garantindo avaliações claras, seguras e alinhadas às exigências legais.
              </p>

              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                Sou psicóloga com capacitação validada para a aplicação da NR-1, preparada para auxiliar sua empresa em todas as etapas do processo, oferecendo orientações técnicas e um acompanhamento cuidadoso. Acredito que ambientes de trabalho saudáveis começam pelo cuidado com as pessoas — e é exatamente isso que busco proporcionar em cada atendimento.
              </p>

              <p className="text-lg text-cinza-700 leading-relaxed mb-6">
                Cuidar da saúde mental no trabalho é um gesto de responsabilidade, respeito e carinho. Estou aqui para ajudar sua empresa a caminhar nesse processo com segurança e tranquilidade.
              </p>
            </div>

            {/* Link para informações governamentais */}
            <div className="bg-cinza-50 border-l-4 border-verde-mar-500 p-6 rounded-xl mb-12">
              <p className="text-cinza-700 leading-relaxed">
                Para mais informações legais/governamentais a respeito da norma, acesse o tópico:{' '}
                <a
                  href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-verde-mar-700 font-semibold hover:text-verde-mar-800 underline decoration-vermelho-cardeal-500 decoration-2 underline-offset-2 transition-all"
                >
                  Norma Regulamentadora No. 1 (NR-1)
                </a>
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-verde-mar-500 to-verde-mar-600 rounded-2xl p-8 md:p-10 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Entre em Contato
              </h3>
              <p className="text-verde-mar-50 mb-8 text-lg">
                Vamos conversar sobre como posso ajudar sua empresa a implementar a NR-1 de forma ética e responsável.
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
