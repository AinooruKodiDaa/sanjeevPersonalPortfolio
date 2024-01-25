import React from "react";

/* Types */
import type { IconWithBgProps, BaseIconProps as BaseProps } from "./types";

/**Base height and width*/
const baseHeight = 20;
const baseWidth = 20;

export const PatientRegisterIcon: React.FC<BaseProps> = (props) => {
  const { fill, ...rest } = props;

  return (
    <svg
      width={baseWidth}
      height={baseHeight}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1925_5093)">
        <path
          d="M9 17.25C9 13.7055 11.247 10.6755 14.391 9.5115C14.772 8.655 15 7.7025 15 6.75C15 3.0225 15 0 10.5 0C6 0 6 3.0225 6 6.75C6 9.072 7.347 11.3925 9 12.324V13.5615C3.912 13.977 0 16.4775 0 19.5H9.312C9.1095 18.7845 9 18.03 9 17.25Z"
          fill={fill ?? "#037EFF"}
        />
        <path
          d="M17.25 10.5C13.5225 10.5 10.5 13.5225 10.5 17.25C10.5 20.9775 13.5225 24 17.25 24C20.9775 24 24 20.9775 24 17.25C24 13.5225 20.9775 10.5 17.25 10.5ZM21 18H18V21H16.5V18H13.5V16.5H16.5V13.5H18V16.5H21V18Z"
          fill={fill ?? "#037EFF"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1925_5093">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HomeIcon: React.FC<any> = (props) => {
  const { fill, ...rest } = props;
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2531_3904)">
        <path
          d="M29.4964 13.6566L24.9498 9.10994V3.8578C24.9498 2.90814 24.1802 2.13851 23.2292 2.13851C22.2803 2.13851 21.5107 2.90814 21.5107 3.8578V5.67095L18.1254 2.28549C16.4517 0.612649 13.5416 0.615617 11.8716 2.28851L0.503323 13.6566C-0.167774 14.329 -0.167774 15.417 0.503323 16.0884C1.17472 16.7607 2.26488 16.7607 2.93603 16.0884L14.3033 4.72007C14.6736 4.3517 15.3263 4.3517 15.6946 4.71898L27.0638 16.0884C27.4009 16.4246 27.8404 16.5918 28.2798 16.5918C28.7202 16.5918 29.1604 16.4244 29.4965 16.0884C30.1678 15.4171 30.1678 14.3291 29.4964 13.6566Z"
          fill={fill ?? "black"}
        />
        <path
          d="M15.5971 7.98366C15.2668 7.65356 14.732 7.65356 14.4027 7.98366L4.40314 17.9803C4.24527 18.1381 4.15576 18.3536 4.15576 18.5784V25.8696C4.15576 27.5805 5.54301 28.9677 7.25388 28.9677H12.2047V21.3005H17.7941V28.9677H22.7449C24.4557 28.9677 25.843 27.5805 25.843 25.8696V18.5784C25.843 18.3536 25.7543 18.1381 25.5956 17.9803L15.5971 7.98366Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2531_3904">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const UserIcon: React.FC<any> = (props) => {
  const { fill, ...rest } = props;
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 1.25C11.203 1.25 8.125 4.32804 8.125 8.125C8.125 11.922 11.203 15 15 15C18.797 15 21.875 11.922 21.875 8.125C21.875 4.32804 18.797 1.25 15 1.25Z"
        fill={fill ?? "black"}
      />
      <path
        d="M8.75 17.5C5.29822 17.5 2.5 20.2983 2.5 23.75V27.5C2.5 28.1904 3.05965 28.75 3.75 28.75H26.25C26.9404 28.75 27.5 28.1904 27.5 27.5V23.75C27.5 20.2983 24.7017 17.5 21.25 17.5H8.75Z"
        fill={fill ?? "black"}
      />
    </svg>
  );
};

export const DashboardIcon: React.FC<any> = (props) => {
  const { fill, ...rest } = props;
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_52_6)">
        <path
          d="M15.9375 14.5312H29.5312C29.7905 14.5312 30 14.3217 30 14.0625C30 6.29625 23.7038 0 15.9375 0C15.6783 0 15.4688 0.209531 15.4688 0.46875V14.0625C15.4688 14.3217 15.6783 14.5312 15.9375 14.5312Z"
          fill={fill ?? "black"}
        />
        <path
          d="M29.5312 15.4688H16.875C16.8544 15.4688 16.8366 15.4777 16.8164 15.48C16.777 15.4852 16.7377 15.4889 16.7002 15.5034C16.6636 15.518 16.6331 15.5428 16.6022 15.5658C16.5853 15.5784 16.5652 15.585 16.5497 15.5995C16.5487 15.6005 16.5483 15.6023 16.5473 15.6033C16.507 15.6427 16.4761 15.69 16.4522 15.7416C16.4503 15.7458 16.4456 15.7491 16.4438 15.7533C16.4363 15.7711 16.4367 15.7927 16.4316 15.8119C16.4208 15.8512 16.4077 15.8911 16.4072 15.9319L16.4062 15.9375C16.4062 15.9623 16.4166 15.9844 16.4208 16.0088C16.4264 16.0434 16.4283 16.0781 16.4414 16.1114C16.4578 16.1527 16.4845 16.1864 16.5112 16.2206C16.5211 16.2337 16.5258 16.2502 16.538 16.2623L16.5427 16.267C16.5427 16.267 16.5436 16.2684 16.5445 16.2689L25.8811 25.8811C28.4264 23.3363 30 19.8206 30 15.9375C30 15.6783 29.7905 15.4688 29.5312 15.4688Z"
          fill={fill ?? "black"}
        />
        <path
          d="M14.8195 16.0739C14.5369 15.7913 14.5313 15.2836 14.5313 15.2836V2.34375C14.5313 2.08453 14.3217 1.875 14.0625 1.875C6.29625 1.875 0 8.17125 0 15.9375C0 23.7038 6.29625 30 14.0625 30C17.9456 30 21.4613 28.4264 24.0061 25.8811C24.0061 25.8811 15.2794 16.5333 14.8195 16.0739Z"
          fill={fill ?? "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_52_6">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SettingsIcon: React.FC<any> = (props) => {
  const { fill, ...rest } = props;
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.9865 12.5H26.63C26.3184 12.4934 26.0159 12.3936 25.7616 12.2134C25.5073 12.0332 25.3129 11.7808 25.2035 11.489L25.196 11.4695C25.069 11.1857 25.0297 10.8704 25.0832 10.5641C25.1366 10.2578 25.2804 9.97451 25.496 9.7505L27.161 8.0855C27.445 7.8014 27.6045 7.41617 27.6045 7.0145C27.6045 6.61283 27.445 6.2276 27.161 5.9435L25.061 3.8435C24.7769 3.55955 24.3917 3.40003 23.99 3.40003C23.5883 3.40003 23.2031 3.55955 22.919 3.8435L21.254 5.5085C21.03 5.72412 20.7467 5.86788 20.4404 5.92133C20.1341 5.97478 19.8188 5.93549 19.535 5.8085H19.5155C19.2208 5.69878 18.9662 5.50257 18.785 5.2456C18.6038 4.98864 18.5044 4.68291 18.5 4.3685V2.0135C18.5 1.61209 18.3405 1.22713 18.0567 0.943294C17.7729 0.659458 17.3879 0.5 16.9865 0.5H14.0135C13.6121 0.5 13.2271 0.659458 12.9433 0.943294C12.6595 1.22713 12.5 1.61209 12.5 2.0135V4.3685C12.4935 4.68031 12.3938 4.98303 12.2135 5.23758C12.0333 5.49212 11.781 5.68681 11.489 5.7965H11.4695C11.1857 5.92349 10.8704 5.96278 10.5641 5.90933C10.2578 5.85588 9.97451 5.71212 9.7505 5.4965L8.0855 3.8315C7.8014 3.54755 7.41617 3.38803 7.0145 3.38803C6.61283 3.38803 6.2276 3.54755 5.9435 3.8315L3.8435 5.9315C3.55955 6.2156 3.40003 6.60083 3.40003 7.0025C3.40003 7.40417 3.55955 7.7894 3.8435 8.0735L5.5085 9.7385C5.72412 9.96251 5.86788 10.2458 5.92133 10.5521C5.97478 10.8584 5.93549 11.1737 5.8085 11.4575V11.477C5.70026 11.773 5.50485 12.0292 5.24804 12.2118C4.99123 12.3944 4.68509 12.4949 4.37 12.5H2.0135C1.61209 12.5 1.22713 12.6595 0.943294 12.9433C0.659458 13.2271 0.5 13.6121 0.5 14.0135V16.9865C0.5 17.3879 0.659458 17.7729 0.943294 18.0567C1.22713 18.3405 1.61209 18.5 2.0135 18.5H4.37C4.68161 18.5066 4.98409 18.6064 5.23838 18.7866C5.49267 18.9668 5.68708 19.2192 5.7965 19.511V19.5305C5.92349 19.8143 5.96278 20.1296 5.90933 20.4359C5.85588 20.7422 5.71212 21.0255 5.4965 21.2495L3.8315 22.9145C3.54755 23.1986 3.38803 23.5838 3.38803 23.9855C3.38803 24.3872 3.54755 24.7724 3.8315 25.0565L5.9315 27.1565C6.2156 27.4405 6.60083 27.6 7.0025 27.6C7.40417 27.6 7.7894 27.4405 8.0735 27.1565L9.7385 25.4915C9.96251 25.2759 10.2458 25.1321 10.5521 25.0787C10.8584 25.0252 11.1737 25.0645 11.4575 25.1915L11.477 25.199C11.7718 25.3068 12.0272 25.501 12.2097 25.7564C12.3922 26.0117 12.4934 26.3162 12.5 26.63V28.9865C12.5 29.3879 12.6595 29.7729 12.9433 30.0567C13.2271 30.3405 13.6121 30.5 14.0135 30.5H16.9865C17.1853 30.5 17.3821 30.4609 17.5657 30.3848C17.7493 30.3087 17.9162 30.1972 18.0567 30.0567C18.1972 29.9162 18.3087 29.7493 18.3848 29.5657C18.4609 29.3821 18.5 29.1853 18.5 28.9865V26.63C18.5066 26.3184 18.6064 26.0159 18.7866 25.7616C18.9668 25.5073 19.2192 25.3129 19.511 25.2035L19.5305 25.196C19.8143 25.069 20.1296 25.0297 20.4359 25.0832C20.7422 25.1366 21.0255 25.2804 21.2495 25.496L22.9145 27.161C23.1986 27.445 23.5838 27.6045 23.9855 27.6045C24.3872 27.6045 24.7724 27.445 25.0565 27.161L27.1565 25.061C27.4405 24.7769 27.6 24.3917 27.6 23.99C27.6 23.5883 27.4405 23.2031 27.1565 22.919L25.4915 21.254C25.2759 21.03 25.1321 20.7467 25.0787 20.4404C25.0252 20.1341 25.0645 19.8188 25.1915 19.535L25.199 19.5155C25.308 19.2221 25.5028 18.9683 25.758 18.7872C26.0132 18.6061 26.3171 18.506 26.63 18.5H28.9865C29.3879 18.5 29.7729 18.3405 30.0567 18.0567C30.3405 17.7729 30.5 17.3879 30.5 16.9865V14.0135C30.5 13.8147 30.4609 13.6179 30.3848 13.4343C30.3087 13.2507 30.1972 13.0838 30.0567 12.9433C29.9162 12.8028 29.7493 12.6913 29.5657 12.6152C29.3821 12.5391 29.1853 12.5 28.9865 12.5ZM15.5 20C14.61 20 13.74 19.7361 12.9999 19.2416C12.2599 18.7471 11.6831 18.0443 11.3425 17.2221C11.0019 16.3998 10.9128 15.495 11.0865 14.6221C11.2601 13.7492 11.6887 12.9474 12.318 12.318C12.9474 11.6887 13.7492 11.2601 14.6221 11.0865C15.495 10.9128 16.3998 11.0019 17.2221 11.3425C18.0443 11.6831 18.7471 12.2599 19.2416 12.9999C19.7361 13.74 20 14.61 20 15.5C20 16.6935 19.5259 17.8381 18.682 18.682C17.8381 19.5259 16.6935 20 15.5 20Z"
        fill={fill ?? "black"}
      />
    </svg>
  );
};
export const CompanyIcon: React.FC<any> = (props) => {
  const { fill, ...rest } = props;
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.782 23.9297C18.4851 25.0781 17.2242 26.3016 18.2156 27.1898C20.0531 28.8305 22.3031 24.3656 25.1273 28.9453"
        stroke="#64B5F6"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <path
        d="M17.461 25.05L18.7805 24.8156C18.8836 24.7978 18.9811 24.7561 19.0652 24.6939C19.1493 24.6316 19.2177 24.5506 19.2648 24.4572C19.312 24.3638 19.3366 24.2606 19.3368 24.156C19.3369 24.0514 19.3126 23.9482 19.2657 23.8547C18.8388 23.0105 18.2677 22.2475 17.5782 21.6C17.475 22.2773 17.0719 23.3297 16.7297 24.1312C16.6827 24.2419 16.6665 24.3632 16.6828 24.4824C16.699 24.6015 16.7471 24.7141 16.822 24.8082C16.8969 24.9023 16.9958 24.9744 17.1082 25.017C17.2207 25.0595 17.3426 25.0709 17.461 25.05Z"
        fill="#F44336"
      />
      <path
        d="M5.99064 12.0797C7.7672 19.5234 15.0516 22.9101 17.7375 22.2656C20.4235 21.6211 25.261 14.7656 23.6156 7.86796C22.4508 2.99999 17.5617 -8.01904e-06 12.6938 1.16484C7.8258 2.32968 4.8258 7.21874 5.99064 12.0867V12.0797Z"
        fill="#F44336"
      />
      <path
        d="M17.2101 22.9945L18.4195 22.7063C18.8015 22.6149 19.0382 22.2328 18.9468 21.8508C18.8554 21.4688 18.4734 21.232 18.0914 21.3235L16.875 21.6117C16.4929 21.7031 16.2562 22.0852 16.3476 22.4672C16.439 22.8492 16.8211 23.086 17.2031 22.9945H17.2101Z"
        fill="#C62828"
      />
      <path
        d="M18.3469 3.15003C17.393 2.56878 16.0266 2.18206 15.2532 3.27894C14.8407 3.86253 15.2297 4.95472 16.0805 5.20081C17.5196 5.62034 17.7704 6.13831 18.0633 6.55784C18.4172 7.05003 18.7524 7.66644 19.3501 7.76253C19.9477 7.85862 20.2876 7.40862 20.2618 6.54144C20.2571 5.15394 19.5329 3.86956 18.3469 3.15003Z"
        fill="#FF847A"
      />
    </svg>
  );
};
export const CompanyIcon2: React.FC<any> = (props) => {
  const { stroke, ...rest } = props;
  return (
    <svg
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="34" cy="34" r="32" stroke={stroke ?? "black"}  stroke-width="4" />
      <path
        d="M31 19H22.5C18.9101 19 16 21.9101 16 25.5V25.5V26C16 28.7614 18.2386 31 21 31V31H24.5C28.0899 31 31 33.9101 31 37.5V37.5C31 41.0899 28.0899 44 24.5 44H9"
        stroke={stroke ?? "black"}
        strokeWidth="3"
      />
      <path
        d="M39.5 36H46H48C50.2091 36 52 37.7909 52 40V40C52 42.2091 50.2091 44 48 44H43.75C39.1937 44 35.5 40.3063 35.5 35.75V29C35.5 23.4772 39.9772 19 45.5 19H52"
        stroke={stroke ?? "black"} 
        strokeWidth="3"
      />
      <path
        d="M41 35V35C40.8719 32.5537 42.8208 30.5 45.2705 30.5H48.5816C52.6787 30.5 56 33.8214 56 37.9185V45.5"
        stroke={stroke ?? "black"}
        strokeWidth="3"
      />
    </svg>
  );
};

export const TableIcon: React.FC<any> = (props) => {
  const { stroke, ...rest } = props;
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 11.875H26.25M3.75 18.125H26.25M10 5.625V24.375M7.75 24.375H22.25C23.6501 24.375 24.3503 24.375 24.885 24.1025C25.3554 23.8629 25.7379 23.4804 25.9775 23.01C26.25 22.4752 26.25 21.7751 26.25 20.375V9.625C26.25 8.22487 26.25 7.5248 25.9775 6.99002C25.7379 6.51961 25.3554 6.13716 24.885 5.89749C24.3503 5.625 23.6501 5.625 22.25 5.625H7.75C6.34987 5.625 5.6498 5.625 5.11503 5.89749C4.64461 6.13716 4.26216 6.51961 4.02249 6.99002C3.75 7.5248 3.75 8.22486 3.75 9.625V20.375C3.75 21.7751 3.75 22.4752 4.02249 23.01C4.26216 23.4804 4.64461 23.8629 5.11503 24.1025C5.6498 24.375 6.34986 24.375 7.75 24.375Z"
        stroke={stroke ?? "black"}
        stroke-width="2"
      />
    </svg>
  );
};

export const ContactIcon: React.FC<any> = (props) => {
  const { fill, ...rest } = props;
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_54_5)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 4H8V0H6V4H3C1.34315 4 0 5.34314 0 7V23C0 24.6568 1.34315 26 3 26H27C28.6568 26 30 24.6568 30 23V7C30 5.34314 28.6568 4 27 4H24V0H22V4ZM6 12C6 9.79086 7.79086 8 10 8C12.2091 8 14 9.79086 14 12C14 14.2091 12.2091 16 10 16C7.79086 16 6 14.2091 6 12ZM4.76394 21.236C5.75558 19.2528 7.78264 18 10 18C12.2174 18 14.2444 19.2528 15.2361 21.236L15.8944 22.5528C16.0494 22.8628 16.0329 23.231 15.8507 23.5258C15.6684 23.8206 15.3466 24 15 24H5C4.65342 24 4.33156 23.8206 4.14936 23.5258C3.96714 23.231 3.95058 22.8628 4.10558 22.5528L4.76394 21.236ZM18 12H24V10H18V12ZM18 18H24V16H18V18Z"
          fill={fill ?? "black"}
        />
        <path d="M30 28V30H0V28H30Z" fill={fill ?? "black"} />
      </g>
      <defs>
        <clipPath id="clip0_54_5">
          <rect width="30" height="30" fill={fill ?? "white"} />
        </clipPath>
      </defs>
    </svg>
  );
};