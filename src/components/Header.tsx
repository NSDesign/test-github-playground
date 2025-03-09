
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Github className="h-6 w-6" />
          <span className="text-lg font-medium">GitHub Integration</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Documentation
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </a>
          <Button size="sm" variant="default">
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
