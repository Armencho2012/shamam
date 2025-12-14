import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* 404 Display */}
        <div className="mb-8">
          <span className="font-display text-9xl text-primary/30">404</span>
        </div>

        {/* Message */}
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          Oops! Page Not Found
        </h1>
        <p className="font-body text-muted-foreground mb-8">
          Looks like this page got lost in the oven! Don't worry, our macarons are still here waiting for you.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/menu">
              <ArrowLeft className="w-4 h-4 mr-2" />
              View Our Menu
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
