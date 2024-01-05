import { css } from '@linaria/core';


export const Application = () => {
  return (
    <div className={CssApp}>
      <h1>Remote Widget Primary</h1>
      <p>Lorem Ipsum</p>
    </div>
  )
};

const CssApp = css`
  border: 1px solid black;
`;
