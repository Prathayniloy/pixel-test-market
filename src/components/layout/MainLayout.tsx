
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleWalletConnection = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-nft-border/30 sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-nft-primary to-nft-secondary flex items-center justify-center animate-pulse-glow">
              <span className="text-white font-bold">NFT</span>
            </div>
            <span className="font-bold text-lg hidden sm:block">PixelMarket</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-nft-primary transition-colors">
              Home
            </Link>
            <Link to="/explore" className="text-foreground hover:text-nft-primary transition-colors">
              Explore
            </Link>
            <Link to="/create" className="text-foreground hover:text-nft-primary transition-colors">
              Create
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button
              onClick={toggleWalletConnection}
              variant={isConnected ? "outline" : "default"}
              className={isConnected ? 
                "border-nft-primary text-nft-primary hover:bg-nft-primary/10" : 
                "bg-nft-primary hover:bg-nft-hover text-white"}
            >
              <Wallet className="mr-2 h-4 w-4" />
              {isConnected ? "0x7e3...5F9b" : "Connect Wallet"}
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-4 border-t border-nft-border/30 bg-background">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="px-4 py-2 rounded-md hover:bg-nft-primary/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/explore" 
                className="px-4 py-2 rounded-md hover:bg-nft-primary/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                to="/create" 
                className="px-4 py-2 rounded-md hover:bg-nft-primary/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Create
              </Link>
            </nav>
          </div>
        )}
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="border-t border-nft-border/30 py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-nft-primary to-nft-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xs">NFT</span>
              </div>
              <span className="font-bold">PixelMarket</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2025 PixelMarket. Test blockchain NFT marketplace.
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-foreground hover:text-nft-primary transition-colors">
                Terms
              </a>
              <a href="#" className="text-foreground hover:text-nft-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-foreground hover:text-nft-primary transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
