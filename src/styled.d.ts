import "styled-components";

type Primary = {
  cyan: string;
  neon: string;
};

type Neutral = {
  grayishBlue: string;
  darkGrayishBlue: string;
  darkBlue: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    primary: Primary;
    neutral: Neutral;
    mobile: string;
    tablet: string;
    desktop: string;
  }
}
