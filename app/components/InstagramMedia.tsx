
import InstagramEmbed from './InstagramEmbed';
import { Instagram } from 'lucide-react';

const posts = [
  {
    url: 'https://www.instagram.com/p/C2-S3x9yP4o/',
  },
  {
    url: 'https://www.instagram.com/p/C2-S3x9yP4o/',
  },
];

export default function InstagramMedia() {
  return (
    <section id="social-proof" className="py-20 bg-neutral-950 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">Latest on Instagram</h2>
        <p className="text-neutral-400 mb-10 max-w-2xl mx-auto">Follow my journey and get a behind-the-scenes look at my music, performances, and life on the road.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <InstagramEmbed key={index} url={post.url} />
          ))}
        </div>
        <a
          href="https://www.instagram.com/adil_ibnu/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-pink-600 text-white font-bold py-3 px-6 rounded-full hover:bg-pink-700 transition-colors duration-300 mt-12"
        >
          <Instagram className="mr-2 h-5 w-5" />
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}
