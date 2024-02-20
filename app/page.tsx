import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="bg-gray-50 h-full w-full"> 
    <Header />
    <div>
      Hello world
    </div>
    </div>
  );
}
