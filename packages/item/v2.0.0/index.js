import { createElement as h } from 'react';

export default () => {
  return h(
    "div",
    {
      style: {
        padding: 4,
        border: '1px solid black',
      }
    },
    h(
      "p",
      {},
      h(
        "strong",
        {},
        [
          "Package: Item - v2.0.0"
        ]
      )
    )
  );
};
