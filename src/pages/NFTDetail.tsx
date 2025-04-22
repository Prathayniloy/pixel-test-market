
import { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Link, ShoppingCart, Clock, Bitcoin, ChevronDown, ChevronUp, Share2 } from "lucide-react";

// Sample NFT data
const nftSample = {
  id: "1",
  title: "Cosmic Voyager",
  description: "An exploration of digital realms and cosmic landscapes, showcasing the boundless possibilities of digital art in the metaverse. This unique NFT represents the convergence of technology and creativity.",
  creator: {
    name: "PixelLab",
    address: "0x1234...5678",
    avatar: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    verified: true,
  },
  owner: {
    name: "ArtCollector",
    address: "0x8765...4321",
    avatar: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    verified: false,
  },
  price: "0.85",
  currency: "ETH",
  imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  likes: 92,
  views: 317,
  created: "2025-01-15T14:30:00Z",
  collection: "Digital Horizons",
  blockchain: "Ethereum",
  tokenId: "78945",
  tokenStandard: "ERC-721",
  properties: [
    { trait: "Type", value: "Digital Art" },
    { trait: "Style", value: "Abstract" },
    { trait: "Color", value: "Blue" },
    { trait: "Resolution", value: "4K" },
    { trait: "Edition", value: "1 of 1" },
  ],
  history: [
    { event: "Minted", from: "Creator", to: "PixelLab", price: "0", date: "2025-01-15T14:30:00Z" },
    { event: "Listed", from: "PixelLab", to: "", price: "0.85", date: "2025-01-16T10:15:00Z" },
    { event: "Offer", from: "Collector1", to: "", price: "0.70", date: "2025-02-01T09:45:00Z" },
    { event: "Offer", from: "Collector2", to: "", price: "0.75", date: "2025-02-05T16:20:00Z" },
  ],
};

const NFTDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(nftSample.likes);
  const [showProperties, setShowProperties] = useState(true);
  const [showDetails, setShowDetails] = useState(true);
  
  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - NFT Image */}
          <div>
            <div className="rounded-lg overflow-hidden border border-nft-border/30 bg-card">
              <img
                src={nftSample.imageUrl}
                alt={nftSample.title}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Social Actions */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex items-center gap-1 ${isLiked ? "text-nft-primary" : ""}`}
                  onClick={handleLikeToggle}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? "fill-current text-nft-primary" : ""}`} />
                  <span>{likeCount}</span>
                </Button>
                
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Eye className="h-5 w-5" />
                  <span>{nftSample.views}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Link className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Column - NFT Details */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-nft-primary/10 text-nft-primary border-nft-primary/20 hover:bg-nft-primary/20">
                {nftSample.collection}
              </Badge>
              <Badge variant="outline">
                {nftSample.tokenStandard}
              </Badge>
            </div>
            
            <h1 className="text-3xl font-bold mb-2">{nftSample.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Creator:</span>
                <div className="flex items-center">
                  <Avatar className="h-6 w-6 mr-1">
                    <AvatarImage src={nftSample.creator.avatar} />
                    <AvatarFallback>{nftSample.creator.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{nftSample.creator.name}</span>
                  {nftSample.creator.verified && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-blue-500 ml-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Owner:</span>
                <div className="flex items-center">
                  <Avatar className="h-6 w-6 mr-1">
                    <AvatarImage src={nftSample.owner.avatar} />
                    <AvatarFallback>{nftSample.owner.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{nftSample.owner.name}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Created:</span>
                <span>{formatDate(nftSample.created)}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-muted-foreground">{nftSample.description}</p>
            </div>
            
            {/* Price Information */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Price</p>
                    <div className="flex items-center gap-2">
                      <Bitcoin className="h-6 w-6 text-nft-primary" />
                      <span className="text-2xl font-bold">{nftSample.price} {nftSample.currency}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">USD Price</p>
                    <p className="text-lg font-medium">$2,125.00</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1 bg-nft-primary hover:bg-nft-hover text-white">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy Now
                  </Button>
                  <Button variant="outline" className="flex-1 border-nft-primary text-nft-primary hover:bg-nft-primary/10">
                    Place Bid
                  </Button>
                </div>
                
                <div className="flex items-center justify-center mt-4 gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  Sale ends in 2 days 18 hours
                </div>
              </CardContent>
            </Card>
            
            {/* Tabs for more info */}
            <Tabs defaultValue="properties">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="properties">Properties</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              
              <TabsContent value="properties" className="pt-4">
                <div 
                  className="border-t border-nft-border/30 pt-4 cursor-pointer"
                  onClick={() => setShowProperties(!showProperties)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">Properties</h3>
                    <Button variant="ghost" size="icon">
                      {showProperties ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </Button>
                  </div>
                  
                  {showProperties && (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {nftSample.properties.map((prop, index) => (
                        <div 
                          key={index} 
                          className="bg-nft-primary/10 rounded-lg p-3 text-center"
                        >
                          <p className="text-xs text-nft-primary uppercase font-medium">{prop.trait}</p>
                          <p className="font-medium mt-1">{prop.value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="pt-4">
                <div 
                  className="border-t border-nft-border/30 pt-4 cursor-pointer"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">Details</h3>
                    <Button variant="ghost" size="icon">
                      {showDetails ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </Button>
                  </div>
                  
                  {showDetails && (
                    <div className="mt-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Contract Address</span>
                        <span className="font-medium">0x1a2b...3c4d</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Token ID</span>
                        <span className="font-medium">{nftSample.tokenId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Token Standard</span>
                        <span className="font-medium">{nftSample.tokenStandard}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Blockchain</span>
                        <span className="font-medium">{nftSample.blockchain}</span>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="history" className="pt-4">
                <div className="border-t border-nft-border/30 pt-4">
                  <h3 className="font-medium text-lg mb-4">Transaction History</h3>
                  <div className="space-y-4">
                    {nftSample.history.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <div>
                          <p className="font-medium">{item.event}</p>
                          <div className="text-sm text-muted-foreground">
                            {item.from} {item.to && `→ ${item.to}`}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{item.price ? `${item.price} ${nftSample.currency}` : '--'}</p>
                          <p className="text-sm text-muted-foreground">{formatDate(item.date)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NFTDetail;
