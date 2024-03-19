import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  textStyle,
} from 'styled-system';

const SA = styled('a', { shouldForwardProp })(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  textAlign,
  textStyle,
  color,
  alignItems,
  justifyContent,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
    textDecoration: 'none',
    ':hover': {
      cursor: 'pointer',
    },
  },
);

const A = (props: React.PropsWithChildren & AProps) => {
  if (!props.href) console.warn('missing href');

  return <SA {...props}>{props.children}</SA>;
};

export interface AProps extends React.CSSProperties {
  display?: 'inline-block';
  bg?: 'transparent' | string;
  href?: string;
  [x: string]: unknown;
}

export default A;
