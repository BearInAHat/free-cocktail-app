import React, { memo } from "react";

import { DetailsComponent } from "Components/DetailsComponent/DetailsComponent";
import { InstructionsComponent } from "Components/InstructionsComponent/InstructionsComponent";
import { IngredientsComponent } from "Components/IngredientsComponent/IngredientsComponent";

import "./CocktailInfoComponent.styl";

interface CocktailInfoComponentProps {
  drink: string;
  category: string;
  alcoholic: string;
  glass: string;
  instructions: string;
  ingredients: { measure: string; ingredient: string }[] | null;
}

export const CocktailInfoComponent: React.FC<CocktailInfoComponentProps> = memo(
  ({ category, alcoholic, glass, drink, instructions, ingredients }) => (
    <div className="textSection">
      <h2 className="cocktailName">{drink}</h2>
      <DetailsComponent
        category={category}
        alcoholic={alcoholic}
        glass={glass}
      />
      <InstructionsComponent instructions={instructions} />
      <IngredientsComponent ingredients={ingredients} />
    </div>
  )
);
