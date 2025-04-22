
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Eye, TrendingUp } from "lucide-react";

export interface NFTCardProps {
  id: string;
  title: string;
  creator: string;
  price: string;
  currency: string;
  imageUrl: string;
  likes: number;
  views: number;
}

export function NFTCard({
  id,
  title,
  creator,
  price,
  currency,
  imageUrl,
  likes,
  views,
}: NFTCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <Link to={`/nft/${id}`}>
      <Card className="overflow-hidden h-full nft-card-hover border-nft-border/30">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
          />
          <div className="absolute top-2 right-2 flex gap-1">
            <Badge className="bg-background/70 hover:bg-background backdrop-blur-sm text-foreground">
              <Eye className="h-3 w-3 mr-1" />
              {views}
            </Badge>
            <Badge
              className={`backdrop-blur-sm cursor-pointer ${
                liked ? "bg-nft-primary text-white" : "bg-background/70 hover:bg-background text-foreground"
              }`}
              onClick={handleLike}
            >
              <Heart className={`h-3 w-3 mr-1 ${liked ? "fill-current" : ""}`} />
              {likeCount}
            </Badge>
          </div>
        </div>
        <CardContent className="pt-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg line-clamp-1">{title}</h3>
              <p className="text-sm text-muted-foreground">by {creator}</p>
            </div>
            <Badge variant="outline" className="border-nft-primary text-nft-primary">
              <TrendingUp className="h-3 w-3 mr-1" />
              New
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-0">
          <div>
            <p className="text-sm text-muted-foreground">Current Price</p>
            <p className="font-semibold text-nft-primary">{price} {currency}</p>
          </div>
          <Button
            className="bg-nft-primary hover:bg-nft-hover text-white"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Buy action would go here
            }}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
