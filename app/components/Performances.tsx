
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const performances = [
  {
    title: 'Acoustic Set at The Starlight Lounge',
    caption: 'An intimate evening of original songs and covers, featuring stripped-down versions of my most popular tracks.',
    venue: 'The Starlight Lounge',
    imageUrl: '/tn_1.png',
    instagramUrl: 'https://www.instagram.com/sot_eventsltd/',
  },
  {
    title: 'Live at the City Music Festival',
    caption: 'Full band performance on the main stage, playing to a packed crowd at the annual city-wide music event.',
    venue: 'City Music Festival',
    imageUrl: '/tn_2.png',
    instagramUrl: 'https://www.instagram.com/sot_eventsltd/',
  },
  {
    title: 'Solo Performance',
    caption: 'A captivating solo performance, showcasing raw talent and passion.',
    venue: 'The Music Box',
    imageUrl: '/images/solo.png',
    instagramUrl: 'https://www.instagram.com/p/DScbvrSiIj4/',
  },
];

export default function Performances() {
  return (
    <section id="performances" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">Performances</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {performances.map((perf, index) => (
            <div key={index} className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 group">
              <div className="relative h-80">
                <Image
                  src={perf.imageUrl}
                  alt={`Thumbnail for ${perf.title}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-pink-500 font-semibold mb-1 tracking-wide">{perf.venue}</p>
                <h3 className="text-2xl font-bold mb-2">{perf.title}</h3>
                <p className="text-neutral-400 mb-4">{perf.caption}</p>
                <a
                  href={perf.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-pink-600 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-700 transition-colors duration-300"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  View on Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
