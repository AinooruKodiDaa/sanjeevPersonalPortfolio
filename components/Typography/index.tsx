import React, {ReactNode} from "react";
import { Tooltip } from "@components/Tooltip";
import { StyledTypography } from "./styled";

/* Types */
import type { FontColors, FontSizes, FontWeights, TextCases } from "./types";

type BaseProps = {
  children?: React.ReactNode;
  size?: FontSizes;
  weight?: FontWeights;
  color?: FontColors | any;
  textCase?: TextCases;
  className?: string;
};

type Placement = "top" | "right" | "left" | "bottom";

type TextProps = {
  as?: "p" | "span";
  tooltipContent?: string | ReactNode | (() => ReactNode);
  tooltipPlacement?: string;
} & BaseProps;

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  tooltipContent?: string | ReactNode | (() => ReactNode);
  tooltipPlacement?: string;
} & BaseProps;

type WithTooltipProps<T> = {
  tooltipContent?: string | ReactNode | (() => ReactNode);
  tooltipPlacement?: string;
} & T;

const withTooltip = <P extends BaseProps>(Component: React.ComponentType<P>) => {
  const ComponentWithTooltip: React.FC<WithTooltipProps<P>> = ({ tooltipContent,tooltipPlacement = "top", ...props }) => {
    if (tooltipContent) {
      return (
        <Tooltip content={tooltipContent} placement={tooltipPlacement as Placement}>
          <div>
            <Component {...props as P} />
          </div>
        </Tooltip>
      );
    }

    return <Component {...props as P} />;
  };

  return ComponentWithTooltip;
};



const Header: React.FC<HeadingProps> = ((props) => {
  const {
    as = "h3",
    className = "",
    size = "lg",
    weight = "700",
    color = "black",
  } = props;

  return (
    <StyledTypography
      color={color}
      size={size}
      weight={weight as any}
      as={as}
      className={className}
    >
      {props.children}
    </StyledTypography>
  );
});


const TextComponent: React.FC<TextProps> = withTooltip((props) => {
  const {
    as = "p",
    className = "",
    size = "base",
    weight = "400",
    color = "black",
    textCase = "none",
  } = props;

  return (
    <StyledTypography
      color={color}
      size={size}
      weight={weight as any}
      as={as}
      textCase={textCase}
      className={className}
    >
      {props.children}
    </StyledTypography>
  );
});

export const Heading = withTooltip(Header);
export const Text = withTooltip(TextComponent);