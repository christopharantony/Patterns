import React from "react";
import { useAccordionContext } from "./Accordion";

const AccordionContent = ({ id, children, className }) => {
  const { openItemId } = useAccordionContext();

  const isOpen = openItemId === id;
  const classes = `${isOpen ? "open" : "close"} ${className || ""}`;
  return <div className={classes}>{children}</div>;
};

export default AccordionContent;
