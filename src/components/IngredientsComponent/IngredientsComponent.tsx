import React, { memo } from "react";

import "./IngredientsComponent.styl";

interface IngredientsComponentProps {
  ingredients: { measure: string; ingredient: string }[] | null;
}

export const IngredientsComponent: React.FC<IngredientsComponentProps> = memo(
  ({ ingredients }) => (
    <div className="ingredientList">
      <div className="ingredientListTitle">List of ingredients:</div>
      <div>
        {ingredients?.map(({ measure, ingredient }, index) => (
          <div className="ingredientRow" key={index}>
            <div className="ingredientCell">{ingredient}</div>
            <div className="ingredientCell">
              {measure || "at your discretion"}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
);
