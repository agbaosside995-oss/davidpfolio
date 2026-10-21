import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' ou 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const SERVICE_ID = 'service_rfw38vc'; // Votre Service ID
    const TEMPLATE_ID = 'template_a203f8r'; // Votre Template ID
    const PUBLIC_KEY = 'sRXrB66Yxy9LMdI1y'; // Votre Public Key

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setLoading(false);
          setStatus('success');
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.error('FAILED...', error.text);
          setLoading(false);
          setStatus('error');
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Me <span className="text-sky-400">Contacter</span>
        </h2>
        <p className="text-slate-400 mb-12 max-w-lg mx-auto">
          Un projet en tête ou une opportunité de collaboration ? Envoyez-moi un message et je vous répondrai dans les plus brefs délais.
        </p>

        <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Nom complet</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Votre nom"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="votre@email.com"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Votre message..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-slate-700 text-slate-950 disabled:text-slate-400 font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>

          {status === 'success' && (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg text-sm text-center">
              ✅ Votre message a été envoyé avec succès ! Je vous répondrai bientôt.
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-lg text-sm text-center">
              ❌ Une erreur est survenue. Vérifiez vos clés EmailJS ou réessayez.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}