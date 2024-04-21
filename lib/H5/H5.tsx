import React from 'react';

type Base = React.PropsWithChildren & React.CSSProperties;

export interface H5Props extends Base {
  [x: string]: unknown;
}

export const H5 = (props: H5Props) => {
  return <h5>{props.children}</h5>;
};
