
import { NFTCard } from "@/components/nft/NFTCard";

// Sample NFT data
const nfts = [
  {
    id: "1",
    title: "Cosmic Voyager",
    creator: "PixelLab",
    price: "0.85",
    currency: "ETH",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    likes: 92,
    views: 317,
  },
  {
    id: "2",
    title: "Digital Horizon",
    creator: "ArtisticSoul",
    price: "1.2",
    currency: "ETH",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    likes: 58,
    views: 215,
  },
  {
    id: "3",
    title: "Algorithm Dreams",
    creator: "CreativeMind",
    price: "0.65",
    currency: "ETH",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    likes: 124,
    views: 480,
  },
  {
    id: "4",
    title: "Neural Path",
    creator: "BlockchainArtist",
    price: "2.1",
    currency: "ETH",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    likes: 76,
    views: 251,
  },
  {
    id: "5",
    title: "Cybernetic Vision",
    creator: "PixelLab",
    price: "1.8",
    currency: "ETH",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    likes: 43,
    views: 189,
  },
  {
    id: "6",
    title: "Quantum Artifact",
    creator: "ArtisticSoul",
    price: "1.4",
    currency: "ETH",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    likes: 67,
    views: 228,
  },
  {
    id: "7",
    title: "Digital Genesis",
    creator: "CreativeMind",
    price: "0.9",
    currency: "ETH",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    likes: 84,
    views: 302,
  },
  {
    id: "8",
    title: "Future Relic",
    creator: "BlockchainArtist",
    price: "1.1",
    currency: "ETH",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    likes: 51,
    views: 197,
  },
];

export function TrendingNFTsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Trending NFTs</h2>
            <p className="text-muted-foreground max-w-2xl">
              The most popular and sought-after digital assets on our marketplace
            </p>
          </div>
          <a 
            href="#" 
            className="text-nft-primary hover:text-nft-hover mt-4 md:mt-0 font-medium underline underline-offset-4"
          >
            View all NFTs
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {nfts.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>
      </div>
    </section>
  );
}
