import React from "react";
import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

const AccordionContent = ({ children, className }) => {
  const { openItemId } = useAccordionContext();
  const { id } = useAccordionItemContext();

  const isOpen = openItemId === id;
  const classes = `${isOpen ? "open" : "close"} ${className || ""}`;
  return <div className={classes}>{children}</div>;
};

export default AccordionContent;
