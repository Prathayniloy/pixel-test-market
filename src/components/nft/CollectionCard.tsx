
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface CollectionCardProps {
  id: string;
  name: string;
  creator: string;
  itemCount: number;
  coverImage: string;
  creatorImage: string;
  verified?: boolean;
}

export function CollectionCard({
  id,
  name,
  creator,
  itemCount,
  coverImage,
  creatorImage,
  verified = false,
}: CollectionCardProps) {
  return (
    <Link to={`/collection/${id}`}>
      <Card className="overflow-hidden nft-card-hover border-nft-border/30">
        <div className="aspect-[16/9] relative overflow-hidden">
          <img
            src={coverImage}
            alt={name}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-4 flex items-end">
            <Avatar className="h-12 w-12 border-2 border-white">
              <AvatarImage src={creatorImage} alt={creator} />
              <AvatarFallback className="bg-nft-primary text-white">
                {creator.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="ml-3 text-white">
              <h3 className="font-medium text-lg flex items-center gap-1">
                {name}
                {verified && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-blue-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </h3>
              <p className="text-sm text-white/80">by {creator}</p>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">{itemCount} items</span>
            <span className="text-nft-primary font-medium">View Collection</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
