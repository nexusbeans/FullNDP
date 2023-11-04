import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ReadMore({ text, showChar = 160 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const content = isExpanded ? text : text.slice(0, showChar);
  const shouldShowEllipsis = text.length > showChar && !isExpanded;

  return (
    <div>
      <p>
        {content}
        {shouldShowEllipsis && <span className="moreellipses"> .....</span>}
        {shouldShowEllipsis && (
          <span className="morecontent">
            <span>{text.slice(showChar)}</span>
            <button className="morelink " onClick={toggleReadMore}>
              {isExpanded ? "Show less" : "Show more"}
            </button>
          </span>
        )}
      </p>
    </div>
  );
}

export default ReadMore;
