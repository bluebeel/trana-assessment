import { styled } from "@trana/ui";


export const BoxLink = styled('a', {
  display: 'block',
  color: '$hiContrast',
  textDecoration: 'none',
  outline: 0,
  p: '$1',
  m: '-$1',
  br: '$1',
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
});