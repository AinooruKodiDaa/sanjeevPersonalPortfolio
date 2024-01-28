import { Heading, Text } from "@components/Typography";
import Image from "next/image";

export const About: React.FC<any> = (props) => {
  return (
    <div className="container p-3">
      <title>About page</title>

      <Image
        className="-z-10"
        src="/images/greenery.jpeg"
        alt="Cover picture"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <section className="mb-40 flex gap-24">
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
      <section className="my-40 flex gap-24">
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
      <section className="my-40 flex gap-24">
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
      <section className="my-40 flex gap-24">
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
