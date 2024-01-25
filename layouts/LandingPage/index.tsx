import { Heading, Text } from "@components/Typography";
import { StyledLandingPageContainer, StyledLandingPageSection } from "./styled";
import Image from "next/image";
import { Button } from "@components/Button";
import { useRouter } from "next/router";

export const LandingComponent: React.FC<any> = (props) => {

  const router = useRouter();

  return (


    <div>
    <title>Landing page</title>
    <Image
      className="-z-10"
      src="/images/8kImage.jpg"
      alt="Cover picture"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
    />

    <StyledLandingPageSection >
      <Heading  as="h1" size="6xl" color="primary" weight="normal">
        WELCOME
      </Heading>
      <Text size="xl" color="primary" weight="normal">
        This is a practice website I have designed as a personal portfolio,
        please enjoy!
      </Text>
    </StyledLandingPageSection>
  </div>



  
  );
};
