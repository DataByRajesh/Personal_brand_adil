
const testimonials = [
  { name: "Alex Johnson", feedback: "Adil's performance was the highlight of our event. Absolutely breathtaking!" },
  { name: "Maria Garcia", feedback: "Working with Adil in the studio was a dream. A true professional with incredible talent." },
  { name: "James Smith", feedback: "I've learned more in a few months of lessons with Adil than I have in years on my own." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <p className="text-gray-400 italic mb-4">"{testimonial.feedback}"</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
