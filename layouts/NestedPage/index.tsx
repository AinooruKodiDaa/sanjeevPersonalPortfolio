import { Heading, Text } from "@components/Typography";
import { StyledLandingPageContainer, StyledLandingPageSection } from "./styled";
import Image from "next/image";
import { Button } from "@components/Button";
import { useRouter } from "next/router";

export const NestedComponent: React.FC<any> = (props) => {
  const router = useRouter();


  return (
    <div>
    <title>Nested Page</title>
    <div>{`${router.asPath}`}</div>

<Button onClick={()=> { 

router.push(`/${router.asPath}/nest`)

}}>Click nest</Button>
  </div>
  );
};
