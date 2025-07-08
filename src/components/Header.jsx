import Navbar from "./Navbar";
import { buttonVariants } from "./ui/button";

export default function Header() {
  return (
    <header className="py-3">
      <div className="container max-w-screen-lg mx-auto px-5 flex items-center justify-between">
        <h1 className="font-medium text-2xl">
          <span className="hidden md:inline ">bobur</span>
          <span className="hidden md:inline text-slate-500">dv</span>
        </h1>
        <Navbar />
        {/* tema */}
      </div>
    </header>
  );
}
