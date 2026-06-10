import { ThemeSwitcher } from "@/features/theme/components/switcher";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <Nav />
      <ThemeSwitcher />
    </header>
  );
}
