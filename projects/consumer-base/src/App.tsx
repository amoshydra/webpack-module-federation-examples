import { css } from '@linaria/core';


export const Application = () => {
  return (
    <div className={CssApp}>
      <h1>Basic Consumer</h1>
      <p>Hello world</p>
    </div>
  )
};

const CssApp = css`
  border: 1px solid black;
`;
