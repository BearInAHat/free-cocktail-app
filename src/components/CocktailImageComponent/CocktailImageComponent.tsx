import React, { memo } from "react";

import "./CocktailImageComponent.styl";

interface CocktailImageComponentProps {
  drinkThumb: string;
  drink: string;
}

export const CocktailImageComponent: React.FC<CocktailImageComponentProps> =
  memo(({ drinkThumb, drink }) => (
    <div className="imageContainer">
      <img
        src={drinkThumb || ""}
        alt={drink || "Drink"}
        loading="lazy"
        className="cocktailImage"
      />
    </div>
  ));
