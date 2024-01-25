import { Text } from "@components/Typography";
import Image from "next/image";

export const Home: React.FC<any> = (props) => {
  return (
    <div className="h-full container p-3 bg-cover bg-center">
      <title>Home page</title>

      {/* <video autoPlay muted loop id="myVideo">
        <source src="/videos/screen-capture.webm" type="video/webm" />
        Your browser does not support HTML5 video.
      </video> */}

      <Image
        className="-z-10"
        src="/images/sanjeevsCar.jpg"
        alt="Cover picture"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <section className="text-start">
        <Text as="p" size="lg" weight="normal" color="primary">
          This is akc nein deind ienid neidn eind iendi neind iendien iend nedn
          eindie nden dne dneidn end end nedne idn einie ndien idnei ndie nid
          eind end iendi neidn eind ien This is akc nein deind ienid neidn eind
          nedne idn einie ndien idnei ndie nid eind end iendi neidn eind ien
        </Text>
      </section>
      <div className="py-20">
        Some other content
      </div>
      <div className="py-20">
        Some other content
      </div>
     
    </div>
  );
};
