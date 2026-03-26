
"use client";
import { useState } from 'react';
import { Instagram, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mreobbaw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            Let's Make Music Together
          </h2>
          <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
            Have a project in mind, or just want to say hi? Fill out the form below or connect with me on social media. I'm always excited to hear from fellow musicians, fans, and collaborators.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-neutral-900 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg disabled:opacity-50"
                disabled={submissionStatus === 'sending'}
              >
                {submissionStatus === 'sending' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-3 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>

              {submissionStatus === 'success' && (
                <p className="text-center text-green-400 mt-4">Your message has been sent successfully! I'll get back to you soon.</p>
              )}
              {submissionStatus === 'error' && (
                 <p className="text-center text-red-400 mt-4">Something went wrong. Please try again later.</p>
              )}
            </form>
          </div>

          <div className="space-y-8 mt-8 md:mt-0">
            <div className="bg-neutral-900 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 text-white">Connect with Me</h3>
              <p className="text-neutral-400 mb-6">
                Follow my journey, get updates on new music, and join the conversation.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="https://www.instagram.com/adil_ibnu/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-300">
                  <Instagram className="h-10 w-10" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300">
                  <Linkedin className="h-10 w-10" />
                </a>
              </div>
            </div>

            <div className="bg-neutral-900 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 text-white">Booking & Inquiries</h3>
              <p className="text-neutral-400">
                For booking, press, or other professional inquiries, please contact our management team.
              </p>
              <a href="mailto:adilibnu25@gmail.com" className="mt-4 inline-block font-semibold text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                adilibnu25@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
