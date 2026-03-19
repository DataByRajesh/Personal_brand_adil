
import Image from 'next/image';

const events = [
  {
    title: 'Roots',
    caption: 'Join us for a night of incredible music and good vibes.',
    venue: 'Fatsoma',
    imageUrl: '/Thumbnail_events.png',
    eventUrl: 'https://www.fatsoma.com/e/8dj6gehm/roots',
  },
];

export default function Events() {
  return (
    <section id="events" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 group">
              <div className="relative h-80">
                <Image
                  src={event.imageUrl}
                  alt={`Thumbnail for ${event.title}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-pink-500 font-semibold mb-1 tracking-wide">{event.venue}</p>
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-neutral-400 mb-4">{event.caption}</p>
                <a
                  href={event.eventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-pink-600 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-700 transition-colors duration-300"
                >
                  View Event
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
