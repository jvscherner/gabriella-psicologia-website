'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AgendarPage() {
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

    const emailBody = `
Nova Solicitação de Agendamento - Site Gabriella Engelhardt

Nome Completo: ${formData.nomeCompleto}
Data de Nascimento: ${formData.dataNascimento}
Gênero: ${formData.genero}
Estado Civil: ${formData.estadoCivil}
Contato: ${formData.contato}

---
Enviado através do formulário do site
    `.trim();

    const mailtoLink = `mailto:gabib14engel@gmail.com?subject=Agendamento - ${formData.nomeCompleto}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

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
              Agendar Consulta
            </h1>
            <p className="text-lg text-cinza-600">
              Escolha a melhor forma de entrar em contato para agendar sua consulta.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

            {/* Cards de Contato Rápido */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5545991222290"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-verde-mar-500 to-verde-mar-600 p-8 rounded-2xl text-white hover:shadow-2xl hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mr-4">
                    <svg className="w-7 h-7 text-verde-mar-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-1">WhatsApp</h3>
                    <p className="text-verde-mar-100 text-sm">Converse diretamente comigo</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  Resposta rápida e prática. Clique para iniciar nossa conversa agora.
                </p>
              </a>

              {/* Email */}
              <a
                href="mailto:gabib14engel@gmail.com"
                className="bg-gradient-to-br from-verde-mar-500 to-verde-mar-600 p-8 rounded-2xl text-white hover:shadow-2xl hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mr-4">
                    <svg className="w-7 h-7 text-verde-mar-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-1">E-mail</h3>
                    <p className="text-verde-mar-100 text-sm">Fale diretamente pelo email</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  Envie sua mensagem e respondo em até 24 horas.
                </p>
              </a>
            </div>

            {/* Formulário Colapsável */}
            <div>
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="w-full bg-gradient-to-br from-verde-mar-50 to-white rounded-2xl p-6 border-2 border-verde-mar-200 hover:border-verde-mar-400 hover:ring-2 hover:ring-vermelho-cardeal-500 hover:ring-offset-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
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
                        Preencha seus dados e entro em contato com você
                      </p>
                    </div>
                  </div>
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

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isFormOpen ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-gradient-to-br from-verde-mar-50 to-white rounded-2xl p-8 md:p-10 border-2 border-verde-mar-200 shadow-lg">
                  <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
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

          </div>
        </div>
      </section>
    </div>
  );
}
