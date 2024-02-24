import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"

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
  textStyle
} from "styled-system"

const A = styled('a', { shouldForwardProp })(
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
    boxSizing: "border-box",
    textDecoration: "none",
    ":hover": {
      cursor: "pointer"
    }
  }
)

export interface AProps extends React.CSSProperties {
  display?: 'inline-block',
  bg?: 'transparent' | string
  [x: string]: any
}

export default A
