
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Plus, X, Info } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Create = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    collection: "",
    price: "",
    royalties: "10",
    properties: [{ trait_type: "", value: "" }],
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addProperty = () => {
    setFormData((prev) => ({
      ...prev,
      properties: [...prev.properties, { trait_type: "", value: "" }],
    }));
  };

  const removeProperty = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      properties: prev.properties.filter((_, i) => i !== index),
    }));
  };

  const updateProperty = (index: number, field: 'trait_type' | 'value', value: string) => {
    setFormData((prev) => {
      const updatedProperties = [...prev.properties];
      updatedProperties[index][field] = value;
      return { ...prev, properties: updatedProperties };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate minting process
    setTimeout(() => {
      toast({
        title: "NFT Created Successfully",
        description: "Your NFT has been minted and is now available on the marketplace.",
      });
      setIsSubmitting(false);
      // Could redirect to the new NFT page here
    }, 2000);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Create NFT</h1>
          <p className="text-muted-foreground">
            Mint your artwork as an NFT on our test blockchain
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Upload Area */}
          <div>
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-4">Preview</h3>
                  
                  {!previewUrl ? (
                    <div className="border-2 border-dashed border-nft-border/50 rounded-lg h-80 flex flex-col items-center justify-center p-6">
                      <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-center text-muted-foreground mb-4">
                        Upload your file here
                        <br />
                        Supports JPG, PNG, GIF, SVG, MP4
                      </p>
                      <Label htmlFor="file-upload" className="cursor-pointer">
                        <div className="bg-nft-primary hover:bg-nft-hover text-white py-2 px-4 rounded-md">
                          Choose File
                        </div>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept="image/*,video/mp4"
                          onChange={handleFileChange}
                        />
                      </Label>
                      <p className="text-xs text-muted-foreground mt-4">
                        Max size: 100MB
                      </p>
                    </div>
                  ) : (
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-auto"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={handleRemoveFile}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  
                  <div className="mt-4 flex items-center">
                    <Info className="h-4 w-4 text-muted-foreground mr-2" />
                    <p className="text-xs text-muted-foreground">
                      We recommend using high-resolution images (at least 1000×1000px)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-6">Basic Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="title">Name <span className="text-red-500">*</span></Label>
                      <Input
                        id="title"
                        name="title"
                        placeholder="NFT Name"
                        value={formData.title}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Provide a detailed description of your NFT"
                        rows={5}
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="collection">Collection</Label>
                      <Select
                        value={formData.collection}
                        onValueChange={(value) => handleSelectChange("collection", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a collection" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="digital-horizons">Digital Horizons</SelectItem>
                          <SelectItem value="pixel-punks">Pixel Punks</SelectItem>
                          <SelectItem value="abstract-worlds">Abstract Worlds</SelectItem>
                          <SelectItem value="create-new">+ Create New Collection</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-6">Properties</h3>
                  <p className="text-muted-foreground mb-6">
                    Add properties to your NFT to increase its uniqueness and value.
                  </p>
                  
                  {formData.properties.map((prop, index) => (
                    <div key={index} className="flex gap-4 mb-4 items-start">
                      <div className="flex-1">
                        <Label>Type</Label>
                        <Input
                          placeholder="e.g. Color"
                          value={prop.trait_type}
                          onChange={(e) => updateProperty(index, 'trait_type', e.target.value)}
                        />
                      </div>
                      <div className="flex-1">
                        <Label>Value</Label>
                        <Input
                          placeholder="e.g. Blue"
                          value={prop.value}
                          onChange={(e) => updateProperty(index, 'value', e.target.value)}
                        />
                      </div>
                      {index > 0 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="mt-7"
                          onClick={() => removeProperty(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2"
                    onClick={addProperty}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Property
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-6">Sales Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="price">Price (ETH)</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        step="0.001"
                        min="0"
                        placeholder="0.001"
                        value={formData.price}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="royalties">Royalties (%)</Label>
                      <Select
                        value={formData.royalties}
                        onValueChange={(value) => handleSelectChange("royalties", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select royalty percentage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5%</SelectItem>
                          <SelectItem value="10">10%</SelectItem>
                          <SelectItem value="15">15%</SelectItem>
                          <SelectItem value="20">20%</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground mt-1">
                        Percentage of sales that goes to the original creator
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" defaultChecked />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the Terms of Service
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button
                type="submit"
                className="w-full bg-nft-primary hover:bg-nft-hover text-white"
                size="lg"
                disabled={!file || isSubmitting || !formData.title}
              >
                {isSubmitting ? "Creating NFT..." : "Create NFT"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Create;
