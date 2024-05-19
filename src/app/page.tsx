import HeroPage from "./components/HeroPage";
import InfoPage from "./components/InfoPage";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-['Inter'] md:px-12 md:py-20 lg:px-24 lg:py-0 ">
      <div className="lg:flex lg:justify-between gap-4 relative ">
        <HeroPage />
        <InfoPage />
      </div>
    </main>
  );
}
