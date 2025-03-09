
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import Header from "@/components/Header";
import GitHubCard from "@/components/GitHubCard";
import { Github, ArrowRight } from "lucide-react";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleConnect = () => {
    toast.success("GitHub integration test successful!", {
      description: "Your repositories are now connected.",
    });
  };

  const mockRepos = [
    {
      repoName: "react-components",
      description: "A collection of reusable React components with TypeScript and Tailwind CSS",
      stars: 128,
      forks: 32,
      language: "TypeScript",
      languageColor: "#3178C6",
    },
    {
      repoName: "data-visualization",
      description: "Interactive data visualization tools using D3.js and React",
      stars: 76,
      forks: 14,
      language: "JavaScript",
      languageColor: "#F7DF1E",
    },
    {
      repoName: "api-toolkit",
      description: "RESTful API toolkit with authentication, caching, and error handling",
      stars: 93,
      forks: 21,
      language: "TypeScript",
      languageColor: "#3178C6",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 animate-slide-in-up" variant="secondary">
              GitHub Integration Test
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-in-up" style={{ animationDelay: "100ms" }}>
              Seamless GitHub Integration for Your Projects
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: "200ms" }}>
              Connect your repositories, manage pull requests, and streamline your development workflow with our simple, intuitive interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: "300ms" }}>
              <Button size="lg" onClick={handleConnect} className="gap-2">
                <Github className="h-5 w-5" />
                Connect GitHub
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* Repositories Section */}
        <section className="container py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Your Repositories</h2>
            
            {loading ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-[200px] rounded-lg bg-muted/50 animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockRepos.map((repo, index) => (
                  <GitHubCard
                    key={index}
                    repoName={repo.repoName}
                    description={repo.description}
                    stars={repo.stars}
                    forks={repo.forks}
                    language={repo.language}
                    languageColor={repo.languageColor}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Github className="h-5 w-5" />
            <span className="text-sm font-medium">GitHub Integration Test</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
