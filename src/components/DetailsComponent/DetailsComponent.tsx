import React, { memo } from "react";

import "./DetailsComponent.styl";

interface DetailsComponentComponentProps {
  category: string;
  alcoholic: string;
  glass: string;
}

export const DetailsComponent: React.FC<DetailsComponentComponentProps> = memo(
  ({ category, alcoholic, glass }) => (
    <div className="cocktailDetails">
      <div className="cocktailDetail">{category}</div>
      <div className="cocktailDetail">{alcoholic}</div>
      <div className="cocktailDetail">{glass}</div>
    </div>
  )
);
