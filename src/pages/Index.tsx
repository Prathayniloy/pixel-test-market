
import MainLayout from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedCollectionsSection } from "@/components/sections/FeaturedCollectionsSection";
import { TrendingNFTsSection } from "@/components/sections/TrendingNFTsSection";
import { Button } from "@/components/ui/button";
import { Wallet, TrendingUp, Bitcoin, Link } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      
      {/* How It Works Section */}
      <section className="py-16 bg-nft-light dark:bg-nft-dark/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-nft-primary/20 flex items-center justify-center mb-4">
                <Wallet className="h-8 w-8 text-nft-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect Your Wallet</h3>
              <p className="text-muted-foreground">
                Link your test blockchain wallet to PixelMarket to start creating and collecting NFTs.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-nft-primary/20 flex items-center justify-center mb-4">
                <Bitcoin className="h-8 w-8 text-nft-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Create & Mint NFTs</h3>
              <p className="text-muted-foreground">
                Upload your artwork, set properties, and mint your NFT on our test blockchain.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-nft-primary/20 flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-nft-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trade & Earn</h3>
              <p className="text-muted-foreground">
                List your NFTs for sale or purchase from other creators using test tokens.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedCollectionsSection />
      <TrendingNFTsSection />
      
      {/* Join Community CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-nft-primary/20 to-nft-secondary/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Join Our NFT Community</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with creators, collect unique NFTs, and learn about blockchain technology in a risk-free environment.
            </p>
            <Button size="lg" className="bg-nft-primary hover:bg-nft-hover text-white">
              <Link className="mr-2 h-5 w-5" />
              Connect Your Wallet
            </Button>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-nft-primary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-nft-secondary/10 rounded-full filter blur-3xl" />
      </section>
    </MainLayout>
  );
};

export default Index;
