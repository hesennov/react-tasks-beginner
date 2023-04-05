import React from "react";
import ShowMore from "react-show-more-list";

const MyLongComponent = ({ listItems }) => (
  <ShowMore items={listItems} by={2}>
    {({ current, onMore }) => (
      <React.Fragment>
        <ul>
          {current.map((item) => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
        <button
          disabled={!onMore}
          onClick={() => {
            if (!!onMore) onMore();
          }}
        >
          more
        </button>
      </React.Fragment>
    )}
  </ShowMore>
);

render(
  <MyLongComponent
    listItems={[
      {
        id: "1",
        label: "You can grow new brain cells. Here's how",
      },
      {
        id: "2",
        label: "The brain may be able to repair itself — with help",
      },
      {
        id: "3",
        label: "Growing evidence of brain plasticity",
      },
      {
        id: "4",
        label: "One more reason to get a good night's sleep",
      },
    ]}
  />,
  
);

export default MyLongComponent; 