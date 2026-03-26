
const services = [
  {
    title: "Live Performances",
    description: "Transform your event with a captivating live performance. From intimate gatherings to large-scale productions, I deliver a dynamic mix of original music and reimagined covers that will leave a lasting impression on your audience.",
    icon: '🎤',
  },
  {
    title: "Studio Sessions",
    description: "Bring your musical vision to life with professional session work. I provide high-quality guitar and vocal tracks for recording artists and producers, adding a unique and creative touch to your project.",
    icon: '🎸',
  },
  {
    title: "Music Lessons",
    description: "Unlock your musical potential with personalized one-on-one lessons. Whether you're a beginner or an experienced player, I offer tailored instruction in guitar, songwriting, and music theory to help you achieve your goals.",
    icon: '🎼',
  },
  {
    title: "Creative Collaborations",
    description: "Let's create something amazing together. I'm always looking for opportunities to collaborate with other artists, bands, and creators on new and exciting musical projects. Let's push the boundaries and make something new.",
    icon: '🤝',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">What I Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="text-5xl mb-6 text-yellow-400">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
