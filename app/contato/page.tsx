'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContatoPage() {
  const router = useRouter();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    genero: '',
    estadoCivil: '',
    contato: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Criar corpo do email
    const emailBody = `
Nova Solicitação de Contato - Site Gabriella Engelhardt

Nome Completo: ${formData.nomeCompleto}
Data de Nascimento: ${formData.dataNascimento}
Gênero: ${formData.genero}
Estado Civil: ${formData.estadoCivil}
Contato: ${formData.contato}

---
Enviado através do formulário do site
    `.trim();

    // Enviar via mailto (abrirá o cliente de email do usuário)
    const mailtoLink = `mailto:gabib14engel@gmail.com?subject=Nova Solicitação de Contato - ${formData.nomeCompleto}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    // Aguardar um momento e redirecionar
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-verde-mar-100 to-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cinza-900 mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg text-cinza-600">
              Estou aqui para te acolher. Escolha a melhor forma de entrar em contato comigo.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">

            {/* FORMULÁRIO COLAPSÁVEL */}
            <div className="mb-16">
              {/* Botão para abrir/fechar formulário */}
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="w-full bg-gradient-to-br from-verde-mar-50 to-white rounded-2xl p-6 border-2 border-verde-mar-200 hover:border-verde-mar-400 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all shadow-md hover:shadow-lg cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-verde-mar-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl font-serif font-bold text-cinza-900">
                        Formulário
                      </h2>
                      <p className="text-base text-cinza-600">
                        Deseja acelerar seu processo? Preencha este formulário simples, que irei entrar em contato contigo.
                      </p>
                    </div>
                  </div>
                  {/* Ícone de seta */}
                  <svg
                    className={`w-6 h-6 text-verde-mar-600 transition-transform duration-300 flex-shrink-0 ${
                      isFormOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Formulário expansível */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isFormOpen ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-gradient-to-br from-verde-mar-50 to-white rounded-2xl p-8 md:p-10 border-2 border-verde-mar-200 shadow-lg">
                  <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                    {/* Nome Completo */}
                    <div>
                      <label htmlFor="nomeCompleto" className="block text-sm font-semibold text-cinza-900 mb-2">
                        1. Nome Completo: *
                      </label>
                      <input
                        type="text"
                        id="nomeCompleto"
                        name="nomeCompleto"
                        required
                        value={formData.nomeCompleto}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-cinza-200 rounded-lg focus:border-verde-mar-500 focus:ring-2 focus:ring-verde-mar-200 outline-none transition-all"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    {/* Data de Nascimento */}
                    <div>
                      <label htmlFor="dataNascimento" className="block text-sm font-semibold text-cinza-900 mb-2">
                        2. Data de Nascimento: *
                      </label>
                      <input
                        type="date"
                        id="dataNascimento"
                        name="dataNascimento"
                        required
                        value={formData.dataNascimento}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-cinza-200 rounded-lg focus:border-verde-mar-500 focus:ring-2 focus:ring-verde-mar-200 outline-none transition-all"
                      />
                    </div>

                    {/* Gênero */}
                    <div>
                      <label htmlFor="genero" className="block text-sm font-semibold text-cinza-900 mb-2">
                        3. Gênero: *
                      </label>
                      <select
                        id="genero"
                        name="genero"
                        required
                        value={formData.genero}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-cinza-200 rounded-lg focus:border-verde-mar-500 focus:ring-2 focus:ring-verde-mar-200 outline-none transition-all bg-white cursor-pointer"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Prefiro não me identificar">Prefiro não me identificar</option>
                      </select>
                    </div>

                    {/* Estado Civil */}
                    <div>
                      <label htmlFor="estadoCivil" className="block text-sm font-semibold text-cinza-900 mb-2">
                        4. Estado Civil: *
                      </label>
                      <select
                        id="estadoCivil"
                        name="estadoCivil"
                        required
                        value={formData.estadoCivil}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-cinza-200 rounded-lg focus:border-verde-mar-500 focus:ring-2 focus:ring-verde-mar-200 outline-none transition-all bg-white cursor-pointer"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="Solteiro(a)">Solteiro(a)</option>
                        <option value="Casado(a)">Casado(a)</option>
                        <option value="Divorciado(a)">Divorciado(a)</option>
                        <option value="Viúvo(a)">Viúvo(a)</option>
                      </select>
                    </div>

                    {/* Contato */}
                    <div>
                      <label htmlFor="contato" className="block text-sm font-semibold text-cinza-900 mb-2">
                        5. Contato (WhatsApp ou Email): *
                      </label>
                      <input
                        type="text"
                        id="contato"
                        name="contato"
                        required
                        value={formData.contato}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-cinza-200 rounded-lg focus:border-verde-mar-500 focus:ring-2 focus:ring-verde-mar-200 outline-none transition-all"
                        placeholder="(45) 99999-9999 ou seuemail@exemplo.com"
                      />
                    </div>

                    {/* Botão Enviar */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-verde-mar-500 text-white px-8 py-4 rounded-lg hover:bg-verde-mar-600 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-semibold text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Cards de Contato */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Card WhatsApp */}
              <a
                href="https://wa.me/5545991222290"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-verde-mar-500 to-verde-mar-600 p-8 rounded-2xl text-white hover:shadow-2xl hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-verde-mar-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold">WhatsApp</h3>
                    <p className="text-verde-mar-100 text-sm">Resposta rápida</p>
                  </div>
                </div>
                <p className="text-white/90 mb-4">
                  A forma mais rápida de agendar sua consulta. Clique para iniciar uma conversa.
                </p>
                <p className="text-xl font-semibold">(45) 9 9122-2290</p>
                <div className="mt-4 flex items-center text-verde-mar-100">
                  <span className="text-sm">Clique para conversar</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>

              {/* Card Email */}
              <a
                href="mailto:gabib14engel@gmail.com"
                className="bg-gradient-to-br from-verde-mar-500 to-verde-mar-600 p-8 rounded-2xl text-white hover:shadow-2xl hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-verde-mar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold">E-mail</h3>
                    <p className="text-verde-mar-100 text-sm">Contato formal</p>
                  </div>
                </div>
                <p className="text-white/90 mb-4">
                  Envie suas dúvidas ou agende uma consulta por e-mail. Respondo em até 24 horas.
                </p>
                <p className="text-lg font-semibold break-all">gabib14engel@gmail.com</p>
                <div className="mt-4 flex items-center text-verde-mar-100">
                  <span className="text-sm">Clique para enviar e-mail</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Modalidades de Atendimento */}
            <div className="bg-cinza-50 p-8 rounded-2xl mb-16">
              <h2 className="text-3xl font-serif font-bold text-cinza-900 mb-6 text-center">
                Modalidades de Atendimento
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Online */}
                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-verde-mar-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-verde-mar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-cinza-900">
                      Atendimento Online
                    </h3>
                  </div>
                  <p className="text-cinza-600 leading-relaxed">
                    Consultas por videochamada, no conforto da sua casa. Entre em contato via WhatsApp ou e-mail para agendar.
                  </p>
                </div>

                {/* Presencial */}
                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-verde-mar-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-verde-mar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-cinza-900">
                      Atendimento Presencial
                    </h3>
                  </div>
                  <p className="text-cinza-600 leading-relaxed">
                    Consultas presenciais em consultório. Veja a localização abaixo e agende seu horário.
                  </p>
                </div>
              </div>
            </div>

            {/* Localização */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="p-8">
                <h2 className="text-3xl font-serif font-bold text-cinza-900 mb-4">
                  Localização do Consultório
                </h2>
                <div className="flex items-start mb-6">
                  <svg className="w-6 h-6 text-verde-mar-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-lg text-cinza-700 font-medium">
                      Rua Rio de Janeiro, 1778
                    </p>
                    <p className="text-cinza-600">
                      Cascavel, Paraná
                    </p>
                    <p className="text-cinza-600">
                      CEP: 85801-031
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.0!2d-53.4553!3d-24.9558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d0e0e0e0e0e1%3A0x1!2sRua%20Rio%20de%20Janeiro%2C%201778%20-%20Cascavel%2C%20PR%2C%2085801-031!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>

            {/* CTA Final */}
            <div className="mt-16 bg-gradient-to-br from-verde-mar-500 to-verde-mar-600 p-8 rounded-2xl text-center text-white">
              <h3 className="text-2xl font-serif font-bold mb-3">
                Pronto para dar o primeiro passo?
              </h3>
              <p className="text-verde-mar-50 mb-6 max-w-2xl mx-auto">
                Entre em contato agora e agende sua consulta. Estou aqui para te acolher nessa jornada.
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
                <a
                  href="mailto:gabib14engel@gmail.com"
                  className="bg-verde-mar-600 text-white px-8 py-4 rounded-lg hover:bg-verde-mar-700 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 font-semibold text-lg transition-all inline-flex items-center justify-center"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  E-mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
