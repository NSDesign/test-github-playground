
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, GitBranch, GitFork, Star, ThumbsUp } from "lucide-react";

interface GitHubCardProps {
  repoName: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  languageColor: string;
}

const GitHubCard = ({
  repoName,
  description,
  stars,
  forks,
  language,
  languageColor,
}: GitHubCardProps) => {
  const [isStarred, setIsStarred] = useState(false);

  const toggleStar = () => {
    setIsStarred(!isStarred);
  };

  return (
    <Card className="w-full max-w-md overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <GitBranch className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-lg font-medium">{repoName}</CardTitle>
        </div>
        <CardDescription className="mt-2 line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: languageColor }}></span>
          <span>{language}</span>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between pt-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>{isStarred ? stars + 1 : stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            <span>{forks}</span>
          </div>
        </div>
        <Button
          variant={isStarred ? "secondary" : "outline"}
          size="sm"
          onClick={toggleStar}
          className="gap-1 transition-all duration-300"
        >
          {isStarred ? <Check className="h-4 w-4" /> : <Star className="h-4 w-4" />}
          {isStarred ? "Starred" : "Star"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GitHubCard;
