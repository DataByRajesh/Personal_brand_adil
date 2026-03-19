
import { Instagram, Ticket } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 tracking-tight">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-neutral-400 mb-10">
            For booking, press, or other inquiries, please contact our management team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://www.instagram.com/adil_ibnu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
            >
              <Instagram className="mr-3 h-6 w-6" />
              Get in touch on Instagram
            </a>
            <a
              href="https://www.fatsoma.com/e/8dj6gehm/roots"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-neutral-800 text-white font-bold py-3 px-8 rounded-full hover:bg-neutral-700 transition-colors duration-300 w-full sm:w-auto"
            >
              <Ticket className="mr-3 h-6 w-6" />
              View Upcoming Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
