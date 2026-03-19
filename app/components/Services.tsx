
const services = [
  { title: "Live Performances", description: "Captivating performances for events, venues, and private parties, featuring a mix of original music and covers.", icon: '🎤' },
  { title: "Studio Sessions", description: "Professional session musician services for recording artists and producers, specializing in guitar and vocals.", icon: '🎸' },
  { title: "Music Lessons", description: "Personalized one-on-one lessons for aspiring musicians, covering guitar, songwriting, and music theory.", icon: '🎼' },
  { title: "Collaborations", description: "Open to collaborations with other artists, bands, and creators on new and exciting musical projects.", icon: '🤝' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
