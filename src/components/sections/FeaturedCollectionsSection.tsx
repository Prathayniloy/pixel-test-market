
import { CollectionCard } from "@/components/nft/CollectionCard";

// Sample collection data
const collections = [
  {
    id: "1",
    name: "Pixel Punks",
    creator: "PixelLab",
    itemCount: 24,
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    creatorImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    verified: true,
  },
  {
    id: "2",
    name: "Digital Dreams",
    creator: "ArtisticSoul",
    itemCount: 18,
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    creatorImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    verified: false,
  },
  {
    id: "3",
    name: "Abstract Worlds",
    creator: "CreativeMind",
    itemCount: 32,
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    creatorImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    verified: true,
  },
  {
    id: "4",
    name: "Crypto Art",
    creator: "BlockchainArtist",
    itemCount: 15,
    coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    creatorImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    verified: false,
  },
];

export function FeaturedCollectionsSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-background via-background to-transparent -z-10" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Collections</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover handpicked NFT collections from top artists and creators
            </p>
          </div>
          <a 
            href="#" 
            className="text-nft-primary hover:text-nft-hover mt-4 md:mt-0 font-medium underline underline-offset-4"
          >
            View all collections
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} {...collection} />
          ))}
        </div>
      </div>
    </section>
  );
}
