import React, { useState } from "react";

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const resultString = isTruncated ? text.slice(0, maxLength) : text;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }

  return (
    <div>
      <p>{resultString}</p>
      {text.length > maxLength && (
        <button onClick={toggleIsTruncated}>
          {isTruncated ? "Read more" : "Show less"}
        </button>
      )}
    </div>
  );
};
export default ReadMore;
