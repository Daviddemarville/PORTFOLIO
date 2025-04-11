import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const FormulaireContact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_7njeobx',
        'template_q509i7a',
        form.current,
        'jCPoF2633VmzeJZ9_'
      )
      .then(
        () => {
          setMessage("Merci ! Votre message a bien été envoyé.");
          setError(false);
          form.current?.reset();
        },
        () => {
          setMessage("Oups ! Une erreur s'est produite. Veuillez réessayer.");
          setError(true);
        }
      );
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Formulaire de Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          className="border border-gray-500 rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          required
          className="border border-gray-500 rounded px-4 py-2"
        />
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          required
          className="border border-gray-500 rounded px-4 py-2"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
          className="border border-gray-500 rounded px-4 py-2"
        />
        <label className="text-sm flex items-center gap-2 mt-2">
          <input type="checkbox" required />
          J’accepte que mes données soient utilisées pour me recontacter.
        </label>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
        >
          Envoyer
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-center font-medium ${error ? 'text-red-500' : 'text-green-600'}`}
        >
          {message}
        </p>
      )}
      <p className="text-sm text-gray-600 mt-4">
        Les informations recueillies à partir de ce formulaire sont utilisées uniquement
        pour pouvoir vous recontacter. Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification et d’effacement de vos données personnelles. Vous pouvez exercer ce droit à tout moment via ce formulaire ou en me contactant directement.
      </p>
    </div>
  );
};

export default FormulaireContact;
