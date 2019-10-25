import { css } from 'styled-components';

const size = {
  small: 400,
  med: 760,
  large: 1140
};

// Mobil first, prefer the "above" breakpoint function
export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
