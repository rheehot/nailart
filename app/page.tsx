import AetherHero from '@/components/main/hero';
import Navbar from '@/components/main/navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <AetherHero
        title="Generate YouTube Thumbnails with AI"
        subtitle="Create stunning, click-worthy thumbnails automatically with AI. No design skills needed - generate professional YouTube thumbnails in seconds."
        ctaLabel="Create Thumbnail"
        ctaHref="#create"
        secondaryCtaLabel="View Samples"
        secondaryCtaHref="#gallery"
      />
    </main>
  );
}
