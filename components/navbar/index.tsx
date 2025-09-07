import { NavMenu } from "@/components/navbar/nav-menu";
import { NavigationSheet } from "@/components/navbar/navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 inset-x-4 h-12 bg-background border dark:border-slate-700/70 max-w-screen-sm mx-auto rounded-full">
      <div className="h-full flex items-center mx-auto px-4">
        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
