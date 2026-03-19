
import { Button } from './ui/Button';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('/adil-ibnu-hero.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">Adil Ibnu</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">Musician and Guitarist</p>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4 italic">Crafting sonic landscapes with a blend of traditional and contemporary sounds.</p>
      </div>
    </section>
  );
}
