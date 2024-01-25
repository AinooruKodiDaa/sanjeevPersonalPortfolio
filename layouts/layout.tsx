import { Modal } from "@components/Modal";
import { PageFooter } from "@components/PageFooter";
import SideNav from "@components/SideNav";
import TopNav from "@components/TopNav";
import { Heading } from "@components/Typography";
import { extractTabPath } from "@utils/routerPath";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const AppLayout: React.FC<Props> = (props) => {
  const router = useRouter();

  const pageHeader = extractTabPath(router.asPath) ?? "Home";

  return (
    <div>
      <TopNav />
      {/* <SideNav /> */}

      <header className="container p-3">
        <Heading color="secondary" size="sm" as="h1" weight="normal">
         {`${pageHeader}`}
        </Heading>
      </header>
      {props.children}
      <PageFooter/>
    </div>
  );
};
