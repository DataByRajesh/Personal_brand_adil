
export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/adil-ibnu.jpg" alt="Adil Ibnu" className="rounded-lg shadow-lg" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">About Adil Ibnu</h2>
            <p className="text-lg text-gray-400 mb-4">
              Adil Ibnu is a passionate musician and performer with a knack for blending traditional and contemporary sounds. With a diverse background in various genres, he brings a unique and captivating energy to every performance.
            </p>
            <p className="text-lg text-gray-400">
              Whether he's on stage, in the studio, or teaching the next generation of musicians, Adil's dedication to his craft is evident. He is always pushing the boundaries of his creativity and exploring new sonic territories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
