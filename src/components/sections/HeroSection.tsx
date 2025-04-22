
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background decoration */}
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-nft-primary/20 rounded-full filter blur-3xl opacity-70" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-nft-secondary/20 rounded-full filter blur-3xl opacity-70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Discover, Collect & Sell
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nft-primary to-nft-secondary"> Digital Art </span>
              on our Test Blockchain
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              PixelMarket is the world's first and largest NFT marketplace on a test blockchain. Mint and trade without risk using test tokens.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-nft-primary hover:bg-nft-hover text-white">
                <Link to="/explore">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Explore NFTs
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-nft-primary text-nft-primary hover:bg-nft-primary/10">
                <Link to="/create">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Create NFT
                </Link>
              </Button>
            </div>
            
            <div className="flex gap-8 mt-10">
              <div>
                <p className="text-3xl font-bold">10K+</p>
                <p className="text-muted-foreground">Artworks</p>
              </div>
              <div>
                <p className="text-3xl font-bold">5K+</p>
                <p className="text-muted-foreground">Artists</p>
              </div>
              <div>
                <p className="text-3xl font-bold">8K+</p>
                <p className="text-muted-foreground">Trades</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="animate-float animation-delay-2000">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                  alt="Featured NFT" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="pt-8 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Featured NFT" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="animate-float animation-delay-4000">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Featured NFT" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="pt-8 animate-float animation-delay-2000">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Featured NFT" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-nft-primary/20 filter blur-3xl opacity-30 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
