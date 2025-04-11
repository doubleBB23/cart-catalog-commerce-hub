
import React from 'react';
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from 'lucide-react';
import { categories, priceRange } from '@/data/products';

interface FilterPanelProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  priceFilter: [number, number];
  setPriceFilter: React.Dispatch<React.SetStateAction<[number, number]>>;
  ratingFilter: number;
  setRatingFilter: React.Dispatch<React.SetStateAction<number>>;
  resetFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedCategories,
  setSelectedCategories,
  priceFilter,
  setPriceFilter,
  ratingFilter,
  setRatingFilter,
  resetFilters
}) => {
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceChange = (values: number[]) => {
    setPriceFilter([values[0], values[1]]);
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <div key={category} className="flex items-center">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="ml-2 text-sm cursor-pointer"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Price Range</h3>
            <div className="px-2">
              <Slider
                defaultValue={priceFilter}
                min={priceRange.min}
                max={priceRange.max}
                step={1}
                onValueChange={handlePriceChange}
              />
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>${priceFilter[0].toFixed(0)}</span>
                <span>${priceFilter[1].toFixed(0)}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Minimum Rating</h3>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <Button
                  key={rating}
                  variant={ratingFilter === rating ? "default" : "outline"}
                  size="sm"
                  onClick={() => setRatingFilter(rating)}
                  className="flex items-center gap-1"
                >
                  <span>{rating}</span>
                  <Star className="w-3 h-3 fill-current" />
                </Button>
              ))}
            </div>
          </div>

          <Button onClick={resetFilters} variant="outline" className="w-full">
            Clear All Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterPanel;
