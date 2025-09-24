// src/common/property-pane.tsx
import React from "react";

const PropertyPane = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="property-pane">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default PropertyPane;
