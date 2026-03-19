
import InstagramEmbed from './InstagramEmbed';

export default function FeaturedVideo() {
  return (
    <section id="featured-video" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">A Glimpse of Sound of Trees</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          Here’s a snapshot of our journey, capturing the energy and passion that define our live performances. This is the sound of our story, our growth, and the connection we share with our audience, all in one sound.
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <InstagramEmbed url="https://www.instagram.com/reel/DS-IY6dDA-d/" />
          </div>
        </div>
      </div>
    </section>
  );
}
