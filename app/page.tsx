import Image from "next/image";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import LogsList from "./components/LogsList";

export default function Home() {
  const session = 0;
  return (
    <div className="bg-gray-50 h-full w-full overflow-auto scrollbar-thin scrollbar-thumb-stone-400 scrollbar-track-slate-200">
      <Header session={session} />
      {session ? (
        <>
          <LogsList />
        </>
      ) : (
        <div className="flex justify-center">
          <LandingPage />
        </div>
      )}
    </div>
  );
}
