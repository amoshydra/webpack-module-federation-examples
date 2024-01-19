import { createElement as h } from 'react';
import Item from '@amoshydra.local/item';

export default () => {
  return h(
    'div',
    {
      style: {
        padding: 4,
        border: '1px solid black',
      }
    },
    [
      h(
        'p',
        { key: '1' },
        h(
          'strong',
          {},
          [
            'Package: Container - v2.0.0'
          ]
        ),
      ),
      h(
        Item,
        { key: '2' },
      )
    ]
  );
};
