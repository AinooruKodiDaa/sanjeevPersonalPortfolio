import Tooltip from "@tippyjs/react";

/* Types */
import type {  Props } from "./types";

type ButtonComponent = React.FC<Props>;
type MUIButtonComponent = React.FC<any>;

export const withTooltip = (Component: ButtonComponent) => {
  const ButtonWithTooltip: React.FC<Props> = (props) => {
    const { tooltip } = props;

    if (!tooltip) return <Component {...props} />;

    return (
      <Tooltip content={tooltip as any}>
        <Component {...props} />
      </Tooltip>
    );
  };

  return ButtonWithTooltip;
};



export const withTooltipMUI = (Component: MUIButtonComponent) => {
  const ButtonWithTooltip: React.FC<any> = (props) => {
    const { tooltip } = props;

    if (!tooltip) return <Component {...props} />;

    return (
      <Tooltip content={tooltip as any}>
        <Component {...props} />
      </Tooltip>
    );
  };

  return ButtonWithTooltip;
};
