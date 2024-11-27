import React, { memo } from "react";

import "./InstructionsComponent.styl";

interface InstructionsComponentProps {
  instructions: string;
}

export const InstructionsComponent: React.FC<InstructionsComponentProps> = memo(
  ({ instructions }) => (
    <div className="instructionsSection">
      <div className="instructionsTitle">Instructions:</div>
      <div className="instructionsContent">{instructions}</div>
    </div>
  )
);
