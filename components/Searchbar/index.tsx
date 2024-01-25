import { PatientRegisterIcon } from "@components/Icons";
import { StyledSearchBar } from "./styled";

type Props = {
  children?: React.ReactNode;
  wrapperClassName?: string;
  isDarkMode?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const SearchBar: React.FC<Props> = (props) => {
  const { wrapperClassName = "", isDarkMode, ...rest } = props;

  return (
    <div className={`relative ${wrapperClassName}`}>
      <StyledSearchBar type="search" {...rest} />
      {/* <PatientRegisterIcon
        fill="currentColor"
        className="absolute top-0 bottom-0 right-1 my-auto"
        width={20}
        height={20}
      /> */}
    </div>
  );
};
