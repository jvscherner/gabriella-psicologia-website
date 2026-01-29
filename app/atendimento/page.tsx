import Link from 'next/link';
import Image from 'next/image';

export default function AtendimentoPage() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-verde-mar-50 via-white to-verde-mar-100 py-16 md:py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cinza-900 mb-6 text-center">
            Sobre o Atendimento
          </h1>
          <p className="text-lg text-cinza-600 text-center max-w-3xl mx-auto">
            Atendimento pensado para acolher diferentes necessidades
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <p className="text-cinza-700 leading-relaxed mb-6">
            Os atendimentos são pensados para acolher diferentes necessidades, respeitando o momento, o contexto e a realidade de cada pessoa ou organização. Por isso, o trabalho acontece tanto no cuidado individual e familiar, quanto no contexto empresarial, sempre com ética, escuta qualificada e responsabilidade profissional.
          </p>
          <p className="text-cinza-700 leading-relaxed">
            Os atendimentos podem ser realizados <strong className="text-verde-mar-700">online</strong>, oferecendo praticidade e acessibilidade, ou <strong className="text-verde-mar-700">presencialmente</strong>, em clínica própria.
          </p>
        </div>
      </section>

      <section className="py-16 bg-verde-mar-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cinza-900 mb-8 text-center">
            Atendimento a Pessoas
          </h2>

          <div id="psicoterapia" className="bg-white rounded-2xl p-8 md:p-10 mb-8 shadow-sm border-l-4 border-verde-mar-500">
            <h3 className="text-2xl font-serif font-semibold text-cinza-900 mb-4">Psicoterapia</h3>
            <div className="space-y-4 text-cinza-700 leading-relaxed">
              <p>A psicoterapia é um espaço de cuidado, escuta e acolhimento, onde você pode falar sobre o que sente, pensa e vive, sem julgamentos.</p>
              <p>Meu trabalho acontece a partir da <strong className="text-verde-mar-700">abordagem sistêmico-familiar</strong>.</p>
              <p>Atendo principalmente <strong className="text-verde-mar-700">casais, crianças e mulheres</strong>.</p>
            </div>
          </div>

          <div id="barras-access" className="bg-white rounded-2xl p-8 md:p-10 mb-8 shadow-sm border-l-4 border-verde-mar-500">
            <h3 className="text-2xl font-serif font-semibold text-cinza-900 mb-4">Barras de Access</h3>
            <div className="space-y-4 text-cinza-700 leading-relaxed">
              <p>As "Barras de Access" são uma técnica terapêutica que trabalha o relaxamento profundo e a liberação de padrões mentais e emocionais.</p>
              <p>Durante a sessão, são tocados suavemente <strong className="text-verde-mar-700">32 pontos específicos na cabeça</strong>.</p>
            </div>
          </div>

          <div id="avaliacao" className="bg-white rounded-2xl p-8 md:p-10 mb-8 shadow-sm border-l-4 border-verde-mar-500">
            <h3 className="text-2xl font-serif font-semibold text-cinza-900 mb-4">Avaliação Psicológica</h3>
            <div className="space-y-4 text-cinza-700 leading-relaxed">
              <p>A avaliação psicológica é um processo técnico e cuidadoso que busca compreender aspectos emocionais, cognitivos, comportamentais e de personalidade.</p>
              <p>Utilizo instrumentos como <strong className="text-verde-mar-700">MBTI, Quati e DISC</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cinza-900 mb-8 text-center">
            Atendimento a Organizações
          </h2>
          <div id="empresarial" className="bg-gradient-to-br from-verde-mar-50 to-white rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-verde-mar-500">
            <p className="text-cinza-700 leading-relaxed">
              No atendimento a organizações, o trabalho é voltado para o cuidado com as pessoas dentro do ambiente profissional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-serif font-bold text-cinza-900 mb-8 text-center">
            Localização do Consultório
          </h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8">
            <div className="p-8">
              <div className="flex items-start mb-6">
                <svg className="w-6 h-6 text-verde-mar-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <div>
                  <p className="text-lg text-cinza-700 font-medium">Rua Rio de Janeiro, 1778</p>
                  <p className="text-cinza-600">Cascavel, Paraná</p>
                  <p className="text-cinza-600">CEP: 85801-031</p>
                </div>
              </div>
            </div>
            <div className="w-full h-96">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.0!2d-53.4553!3d-24.9558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d0e0e0e0e0e1%3A0x1!2sRua%20Rio%20de%20Janeiro%2C%201778!5e0!3m2!1spt-BR!2sbr!4v1234567890" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" className="grayscale hover:grayscale-0 transition-all"></iframe>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2">
              <Image
                src="/images/clinica-1.jpg"
                alt="Consultório de Psicologia - Vista 1"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2">
              <Image
                src="/images/clinica-2.jpg"
                alt="Consultório de Psicologia - Vista 2"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-verde-mar-500 to-verde-mar-600 text-white">
        <div className="container-custom text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">Pronto para começar?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5545991222290" target="_blank" rel="noopener noreferrer" className="bg-white text-verde-mar-700 px-8 py-4 rounded-lg hover:bg-verde-mar-50 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-semibold text-lg transition-all">
              WhatsApp
            </a>
            <Link href="/contato" className="bg-verde-mar-600 text-white px-8 py-4 rounded-lg hover:bg-verde-mar-700 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-semibold text-lg transition-all">
              Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
