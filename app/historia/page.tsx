import Link from 'next/link';
import Image from 'next/image';

export default function HistoriaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-verde-mar-100 to-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cinza-900 mb-6">
              Minha História
            </h1>
            <p className="text-lg text-cinza-600">
              Conheça um pouco sobre minha trajetória e o que me motiva nessa jornada
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Foto */}
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg sticky top-24 hover:shadow-2xl transition-all hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-4">
                <Image
                  src="/images/gabriella.jpg"
                  alt="Gabriella B. Engelhardt - Psicóloga"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="order-1 md:order-2">
              <div className="prose prose-lg max-w-none">
                <div className="bg-verde-mar-50 p-6 rounded-xl mb-8">
                  <h2 className="text-2xl font-serif font-semibold text-cinza-900 mb-4 mt-0">
                    Gabriella B. Engelhardt
                  </h2>
                  <p className="text-cinza-700 mb-2">
                    <strong className="text-verde-mar-700">Psicóloga</strong>
                  </p>
                  <p className="text-cinza-600 text-sm mb-1">
                    <strong>CRP:</strong> 77/77777
                  </p>
                  <p className="text-cinza-600 text-sm">
                    <strong>Idade:</strong> 23 anos
                  </p>
                </div>

                <div className="space-y-6 text-cinza-700 leading-relaxed">
                  <p className="text-lg">
                    Me chamo Gabriella, sou psicóloga formada e mãe. Atuo na área há 10 anos, acompanhando desde cedo os passos de minha mãe, também psicóloga. Cresci em contato com a prática clínica, acompanhando diferentes histórias e aprendizados que contribuíram para a construção do meu olhar profissional.
                  </p>

                  <p className="text-lg">
                    A maternidade aprofundou ainda mais minha sensibilidade para compreender os vínculos, os ciclos de desenvolvimento e os desafios emocionais que atravessam indivíduos e famílias. Tenho paixão por este trabalho, por este caminho e por essa vocação.
                  </p>

                  <p className="text-lg">
                    Atuo pela abordagem sistêmica, compreendendo cada pessoa como alguém que vai além de si mesma, inserida em uma rede de relações, histórias e contextos que influenciam quem ela é, o que vive e como se constrói.
                  </p>

                  <div className="bg-cinza-50 p-6 rounded-xl mt-8">
                    <h3 className="text-xl font-serif font-semibold text-cinza-900 mb-4">
                      Abordagem Sistêmica
                    </h3>
                    <p className="text-cinza-700">
                      A abordagem sistêmico-familiar da psicologia compreende que cada pessoa faz parte de sistemas de relações — como a família, o casal e o contexto social — que influenciam diretamente seus sentimentos e comportamentos. Em vez de olhar apenas para o indivíduo isolado, essa abordagem busca entender os padrões de interação, comunicação e vínculos que se constroem nessas relações. O objetivo é promover mudanças mais amplas e duradouras, fortalecendo relações e ampliando possibilidades de bem-estar emocional.
                    </p>
                  </div>

                  <div className="bg-verde-mar-50 p-6 rounded-xl mt-8">
                    <h3 className="text-xl font-serif font-semibold text-cinza-900 mb-4">
                      Minha Vocação
                    </h3>
                    <p className="text-cinza-700">
                      Ser terapeuta, para mim, é além de incrível, onde posso fazer o que amo e ainda auxiliar as pessoas. Ser psicóloga é um passo ainda mais além. E estou aqui para ajudar.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 p-6 bg-gradient-to-br from-verde-mar-500 to-verde-mar-600 rounded-xl text-white">
                <h3 className="text-2xl font-serif font-bold mb-3">
                  Vamos conversar?
                </h3>
                <p className="mb-6 text-verde-mar-50">
                  Estou aqui para te acolher nessa jornada de autoconhecimento e transformação.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contato"
                    className="bg-white text-verde-mar-700 px-6 py-3 rounded-lg hover:bg-verde-mar-50 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-semibold text-center transition-all"
                  >
                    Entre em Contato
                  </Link>
                  <a
                    href="https://wa.me/5545991222290"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-verde-mar-600 text-white px-6 py-3 rounded-lg hover:bg-verde-mar-700 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-semibold text-center transition-all inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
