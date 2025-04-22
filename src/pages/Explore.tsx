
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { NFTCard } from "@/components/nft/NFTCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample NFT data (expanded for the explore page)
const nftData = [
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
  {
    id: "9",
    title: "Pixel Dreams",
    creator: "PixelLab",
    price: "0.75",
    currency: "ETH",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    likes: 63,
    views: 220,
  },
  {
    id: "10",
    title: "Virtual Landscape",
    creator: "ArtisticSoul",
    price: "1.6",
    currency: "ETH",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    likes: 78,
    views: 301,
  },
  {
    id: "11",
    title: "Digital Artifact",
    creator: "CreativeMind",
    price: "0.95",
    currency: "ETH",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    likes: 45,
    views: 187,
  },
  {
    id: "12",
    title: "Cyber Portrait",
    creator: "BlockchainArtist",
    price: "1.3",
    currency: "ETH",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    likes: 89,
    views: 342,
  },
];

const categories = [
  "All Categories",
  "Art",
  "Collectibles",
  "Photography",
  "Music",
  "Virtual Worlds",
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [priceRange, setPriceRange] = useState([0, 5]);
  const [filtersVisible, setFiltersVisible] = useState(false);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Explore NFTs</h1>
          <p className="text-muted-foreground">
            Discover, collect, and trade digital assets on our test blockchain
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Mobile Toggle */}
          <div className="lg:hidden mb-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2"
              onClick={() => setFiltersVisible(!filtersVisible)}
            >
              {filtersVisible ? (
                <>
                  <X size={16} />
                  Hide Filters
                </>
              ) : (
                <>
                  <Filter size={16} />
                  Show Filters
                </>
              )}
            </Button>
          </div>

          {/* Filters - Sidebar */}
          <div 
            className={`${
              filtersVisible ? 'block' : 'hidden'
            } lg:block lg:w-64 space-y-6`}
          >
            <div className="border border-nft-border/30 rounded-lg p-5">
              <h3 className="font-medium text-lg mb-4">Filters</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Categories
                  </label>
                  <Select defaultValue={category} onValueChange={(value) => setCategory(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <label>Price Range (ETH)</label>
                    <span>
                      {priceRange[0]} - {priceRange[1]}
                    </span>
                  </div>
                  <Slider
                    defaultValue={priceRange}
                    max={5}
                    step={0.1}
                    onValueChange={(value: number[]) => setPriceRange(value)}
                  />
                </div>

                <div className="pt-4 border-t border-nft-border/30">
                  <Button variant="default" className="w-full bg-nft-primary hover:bg-nft-hover text-white">
                    Apply Filters
                  </Button>
                </div>
                
                <div>
                  <Button variant="ghost" className="w-full text-muted-foreground">
                    Clear All
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="border border-nft-border/30 rounded-lg p-5">
              <h3 className="font-medium text-lg mb-4">Status</h3>
              <div className="space-y-2">
                <Badge variant="outline" className="mr-1 cursor-pointer hover:bg-nft-primary/10 hover:border-nft-primary">
                  Buy Now
                </Badge>
                <Badge variant="outline" className="mr-1 cursor-pointer hover:bg-nft-primary/10 hover:border-nft-primary">
                  On Auction
                </Badge>
                <Badge variant="outline" className="mr-1 cursor-pointer hover:bg-nft-primary/10 hover:border-nft-primary">
                  New
                </Badge>
                <Badge variant="outline" className="mr-1 cursor-pointer hover:bg-nft-primary/10 hover:border-nft-primary">
                  Has Offers
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-6 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by NFT name, creator, or collection"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Tabs */}
            <Tabs defaultValue="all" className="mb-6">
              <TabsList className="grid grid-cols-4 w-full md:w-auto md:inline-grid">
                <TabsTrigger value="all">All Items</TabsTrigger>
                <TabsTrigger value="art">Art</TabsTrigger>
                <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
                <TabsTrigger value="photography">Photography</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {nftData.map((nft) => (
                    <NFTCard key={nft.id} {...nft} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="art" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {nftData.slice(0, 4).map((nft) => (
                    <NFTCard key={nft.id} {...nft} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="collectibles" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {nftData.slice(4, 8).map((nft) => (
                    <NFTCard key={nft.id} {...nft} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="photography" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {nftData.slice(8, 12).map((nft) => (
                    <NFTCard key={nft.id} {...nft} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Load More Button */}
            <div className="mt-10 text-center">
              <Button variant="outline" size="lg">
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Explore;
