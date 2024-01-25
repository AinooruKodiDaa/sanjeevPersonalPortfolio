export type BaseIconProps = {
  children?: React.ReactNode;
} & React.SVGProps<SVGSVGElement>;

export type IconWithBgProps = {
  bgColor?: string;
  fill1?:string;
  fill2?:string;
  iconFill?: string;
} & BaseIconProps;
