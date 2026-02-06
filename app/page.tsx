import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import {
  HeroSection,
  ProblemSolution,
  FeaturesPreview,
  SocialProof,
  FinalCTA,
} from '@/components/sections/Landing';

export default function Home() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <FeaturesPreview />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
