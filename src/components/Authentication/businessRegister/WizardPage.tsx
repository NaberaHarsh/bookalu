import React from "react";

type props = {
  children: React.ReactNode;
};

export const WizardPage: React.FC<props> = (props) => (
  <div>{props.children}</div>
);
