import { Heading, Text } from "@components/Typography";
import { StyledLandingPageContainer, StyledLandingPageSection } from "./styled";
import Image from "next/image";
import { Button } from "@components/Button";
import { useRouter } from "next/router";

export const LandingComponent: React.FC<any> = (props) => {

  const router = useRouter();

  return (


    <div className="container custom-scroll-bar p-3 h-screen overflow-auto">
    <title>Landing page</title>
    <Image
      className="-z-10"
      src="/images/8kImage.jpg"
      alt="Cover picture"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
    />

    {/* <StyledLandingPageSection >
      <Heading  as="h1" size="6xl" color="primary" weight="normal">
        WELCOME
      </Heading>
      <Text size="xl" color="primary" weight="normal">
        This is a practice website I have designed as a personal portfolio,
        please enjoy!
      </Text>
    </StyledLandingPageSection> */}
    
    <section className="h-screen items-center flex gap-24">
        <div className="flex flex-col justify-center">
          <Heading color="accent" size="5xl" weight="bold" as="h1">
            About me
          </Heading>

          <Text color="primary" size="2xl" weight="normal" as="p">
            ~ 2.5 years experienced full-stack developer delivering quality
            solutions through teamwork & independent ingenuity. Passionate about
            staying at the forefront of technology trends and continuously
            expanding my skillset to tackle new challenges head-on.
          </Text>
        </div>

        <Image
          className="-z-10 rounded-full aspect-square shadow-2xl shadow-[rgba(0,0,0,0.3)]"
          src="/images/myBack.jpg"
          alt="Cover picture"
          layout=""
          width={450}
          height={450}
          objectFit="cover"
          objectPosition="center"
        />
      </section>
      <section className="h-screen items-center  flex gap-24">
        <Image
          className="-z-10 rounded-full aspect-square shadow-2xl shadow-[rgba(0,0,0,0.3)]"
          src="/images/myBack.jpg"
          alt="Cover picture"
          layout=""
          width={450}
          height={450}
          objectFit="cover"
          objectPosition="center"
        />
        <div className="flex flex-col justify-center">
          <Heading color="accent" size="5xl" weight="bold" as="h1">
            My Life
          </Heading>

          <Text color="primary" size="2xl" weight="normal" as="p">
            2-year experienced full-stack developer delivering quality solutions
            through teamwork & independent ingenuity. Passionate about staying
            at the forefront of technology trends and continuously expanding my
            skillset to tackle new challenges head-on.
          </Text>
        </div>
      </section>
      <section className="h-screen items-center  flex gap-24">
        <div className="flex flex-col justify-center">
          <Heading color="accent" size="5xl" weight="bold" as="h1">
            Education
          </Heading>

          <Text color="primary" size="2xl" weight="normal" as="p">
            2-year experienced full-stack developer delivering quality solutions
            through teamwork & independent ingenuity. Passionate about staying
            at the forefront of technology trends and continuously expanding my
            skillset to tackle new challenges head-on.
          </Text>
        </div>

        <Image
          className="-z-10 rounded-full aspect-square shadow-2xl shadow-[rgba(0,0,0,0.3)]"
          src="/images/myBack.jpg"
          alt="Cover picture"
          layout=""
          width={450}
          height={450}
          objectFit="cover"
          objectPosition="center"
        />
      </section>
      <section className="h-screen items-center  flex gap-24">
        <Image
          className="-z-10 rounded-full aspect-square shadow-2xl shadow-[rgba(0,0,0,0.3)]"
          src="/images/myBack.jpg"
          alt="Cover picture"
          layout=""
          width={450}
          height={450}
          objectFit="cover"
          objectPosition="center"
        />

        <div className="flex flex-col justify-center">
          <Heading color="accent" size="5xl" weight="bold" as="h1">
            Skills
          </Heading>

          <Text color="primary" size="2xl" weight="normal" as="p">
            2-year experienced full-stack developer delivering quality solutions
            through teamwork & independent ingenuity. Passionate about staying
            at the forefront of technology trends and continuously expanding my
            skillset to tackle new challenges head-on.
          </Text>
        </div>
      </section>
    </div>
   
  



  
  );
};
