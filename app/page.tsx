'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Home() {
  // Hook apenas para animação do hero (seção principal)
  const heroContent = useScrollAnimation({ threshold: 0.1, rootMargin: '0px', triggerOnce: true });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-verde-mar-700 via-verde-mar-600 to-verde-mar-500 py-20 md:py-32 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full opacity-30 blur-2xl"></div>

        {/* Folhas decorativas */}
        <div className="absolute top-20 left-1/4 opacity-30">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 Q70 30 80 50 Q70 70 50 90 Q30 70 20 50 Q30 30 50 10" fill="white" opacity="0.6"/>
            <path d="M50 10 L50 90 M50 30 Q60 40 50 50 M50 50 Q40 60 50 70" stroke="white" strokeWidth="3" opacity="0.5"/>
          </svg>
        </div>
        <div className="absolute bottom-32 right-1/3 opacity-35 rotate-45">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 Q70 30 80 50 Q70 70 50 90 Q30 70 20 50 Q30 30 50 10" fill="white" opacity="0.6"/>
            <path d="M50 10 L50 90" stroke="white" strokeWidth="2" opacity="0.4"/>
          </svg>
        </div>
        <div className="absolute bottom-10 left-20 opacity-30 rotate-90">
          <svg width="110" height="110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20 Q65 35 70 50 Q65 65 50 80 Q35 65 30 50 Q35 35 50 20" fill="white" opacity="0.6"/>
            <path d="M50 20 L50 80" stroke="white" strokeWidth="2" opacity="0.5"/>
          </svg>
        </div>
        <div className="absolute top-40 left-1/3 opacity-25 -rotate-45">
          <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 Q70 30 80 50 Q70 70 50 90 Q30 70 20 50 Q30 30 50 10" fill="white" opacity="0.7"/>
            <path d="M50 10 L50 90" stroke="white" strokeWidth="2" opacity="0.5"/>
          </svg>
        </div>
        <div className="absolute bottom-48 left-1/4 opacity-28 -rotate-30">
          <svg width="105" height="105" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 Q70 30 80 50 Q70 70 50 90 Q30 70 20 50 Q30 30 50 10" fill="white" opacity="0.65"/>
            <path d="M50 10 L50 90 M40 30 Q50 40 60 30 M40 70 Q50 60 60 70" stroke="white" strokeWidth="2" opacity="0.5"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div ref={heroContent.ref} className={`max-w-4xl mx-auto text-center hero-animate ${heroContent.isVisible ? 'is-visible' : ''}`}>
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/logo2-gabriella.svg"
                alt="Gabriella B. Engelhardt"
                width={200}
                height={80}
                className="drop-shadow-lg"
                priority
              />
            </div>

            {/* Badge CRP */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <svg className="w-4 h-4 text-verde-mar-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-cinza-700">CRP 77/77777</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-sm">
              Acolhimento e cuidado.<br />
              <span className="text-cinza-50">Um espaço para se reconectar com sua essência.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-2 leading-relaxed font-medium">
              Atendimento psicológico humanizado. Online ou Presencial.
            </p>
            <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
              Busco te ajudar a encontrar seu caminho, a encontrar seu bem-estar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/agendar"
                className="bg-verde-mar-600 text-white px-8 py-4 rounded-lg hover:bg-verde-mar-700 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Agendar Atendimento
              </Link>
              <Link
                href="/atendimento"
                className="bg-white text-verde-mar-700 border-2 border-white px-8 py-4 rounded-lg hover:bg-verde-mar-50 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-semibold text-lg transition-all shadow-md"
              >
                Conheça os Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cinza-900 mb-4">
              Como posso te ajudar?
            </h2>
            <p className="text-lg text-cinza-600 max-w-2xl mx-auto">
              Oferece atendimento especializado em diferentes modalidades
            </p>
          </div>

          <ServiceCards />
        </div>
      </section>

      {/* Sobre a Psicóloga - Preview */}
      <section className="py-20 bg-cinza-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" style={{ animation: 'fadeIn 0.8s ease-out both' }}>
            {/* Foto de Gabriella */}
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-4">
                <Image
                  src="/images/gabriella.jpg"
                  alt="Gabriella B. Engelhardt - Psicóloga"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cinza-900 mb-6">
                Gabriella B. Engelhardt
              </h2>
              <p className="text-cinza-600 mb-6 leading-relaxed">
                Vejo cada pessoa como um quebra-cabeça único, formado por vivências e relações que se entrelaçam e dão sentido a aquele modo de ser. Para mim ninguém é "apenas" um indivíduo. Por isso ao olhar para alguém não vejo apenas sua trajetória, mas tudo que cerca sua vida. Ser terapeuta, para mim, é além de incrível, onde posso fazer o que amo e ainda auxiliar as pessoas. Ser psicóloga é um passo ainda mais além. E estou aqui para ajudar.
              </p>
              <div className="mb-6">
                <p className="text-cinza-700 font-medium mb-2">
                  <span className="text-verde-mar-700">CRP:</span> 77/77777
                </p>
                <p className="text-cinza-600 text-sm">
                  Registro ativo no Conselho Regional de Psicologia
                </p>
              </div>
              <Link
                href="/historia"
                className="inline-flex items-center bg-verde-mar-500 text-white px-6 py-3 rounded-lg hover:bg-verde-mar-600 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-semibold transition-all"
              >
                Conheça Minha História
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios / Diferenciais */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cinza-900 mb-4">
              Por que escolher meu atendimento?
            </h2>
          </div>

          <BenefitsGrid />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-verde-mar-500 to-verde-mar-700 text-white">
        <div className="container-custom text-center" style={{ animation: 'fadeIn 0.8s ease-out both' }}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl mb-8 text-verde-mar-50 max-w-2xl mx-auto">
            Entre em contato e agende sua primeira consulta.
            Estou aqui para acolher você nesse processo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-verde-mar-600 text-white px-8 py-4 rounded-lg hover:bg-verde-mar-700 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-semibold text-lg shadow-lg hover:shadow-xl transition-all inline-block"
            >
              Agendar Consulta
            </Link>
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
          </div>
        </div>
      </section>
    </div>
  );
}

// Componente para Cards de Serviços com animação suave
function ServiceCards() {
  const cards = [
    {
      title: 'Psicoterapia',
      description: 'Espaço seguro e acolhedor para você compreender suas emoções, desenvolver autoconhecimento e promover mudanças positivas.',
      icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
      href: '/psicoterapia'
    },
    {
      title: 'Barras de Access',
      description: 'Técnica terapêutica suave que promove relaxamento profundo, redução de estresse e bem-estar através de toques específicos.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      href: '/barras-access'
    },
    {
      title: 'Avaliação Psicológica',
      description: 'Avaliações e testes psicológicos para diversos fins, realizados com técnicas validadas e análise criteriosa.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      href: '/avaliacao'
    },
    {
      title: 'Empresarial',
      description: 'Para empresas e pequenos negócios que desejam auxílio no desenvolvimento ou mesmo seleção de seus colaboradores. Forneço acompanhamento psicológico e a possibilidade de testes adequados a demanda.',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      href: '/empresarial'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-verde-mar-50 rounded-xl p-8 hover:shadow-lg transition-all hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2"
          style={{
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
          }}
        >
          <div className="w-16 h-16 bg-verde-mar-500 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-semibold text-cinza-900 mb-3">
            {card.title}
          </h3>
          <p className="text-cinza-600 mb-4 leading-relaxed">
            {card.description}
          </p>
          <Link
            href={card.href}
            className="text-verde-mar-700 font-semibold hover:text-verde-mar-800 inline-flex items-center hover:underline hover:decoration-vermelho-cardeal-500 hover:decoration-2 hover:underline-offset-4 transition-all"
          >
            Saiba mais
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}

// Componente para Grid de Benefícios com animação suave
function BenefitsGrid() {
  const benefits = [
    {
      title: 'Atendimento Humanizado',
      description: 'Acolhimento genuíno com respeito à sua singularidade',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    },
    {
      title: 'Sigilo Profissional',
      description: 'Total confidencialidade garantida pelo código de ética',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    },
    {
      title: 'Experiência e Presença',
      description: 'A experiência para ajudar além do que se sabe, a presença para te ajudar além do consultório',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Pessoas e Empresas',
      description: 'Forneço atendimento tanto para o indivíduo, como para a empresa. Pensando em bem-estar e desenvolvimento, seja individual ou coletivo.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="text-center"
          style={{
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
          }}
        >
          <div className="w-16 h-16 bg-verde-mar-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-verde-mar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
            </svg>
          </div>
          <h3 className="text-xl font-serif font-semibold text-cinza-900 mb-2">
            {benefit.title}
          </h3>
          <p className="text-cinza-600">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
}
