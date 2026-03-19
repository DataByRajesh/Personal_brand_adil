
export default function SoundOfTrees() {
  return (
    <section id="sound-of-trees" className="relative py-20 bg-black text-white">
      <div className="absolute inset-0 z-0">
        <img src="/sot.png" alt="Sound of Trees banner" className="w-full h-full object-cover opacity-30" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <img src="/sot-brand.png" alt="Sound of Trees Logo" className="w-48 h-48 mx-auto mb-6" />
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          Sound of Trees is a South Indian Malayalam music group bringing together culture, live musicianship, and a shared stage presence.
        </p>
      </div>
    </section>
  );
}
