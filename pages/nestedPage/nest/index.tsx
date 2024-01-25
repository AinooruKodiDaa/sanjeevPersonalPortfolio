import { About } from "@layouts/About";
import { Contact } from "@layouts/Contact";
import { Dashboard } from "@layouts/Dashboard";
import { Home } from "@layouts/Home";
import { Settings } from "@layouts/Settings";
import { AppLayout } from "@layouts/layout";
import { useNavigationStore } from "@stores/navigation";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

type Page = React.FC<Props> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
};

const Nest: Page = (props) => {
  const {} = props;
  const route = useNavigationStore((s) => s.route);

  return (
    <>
      Im nested
    </>
  );
};

Nest.getLayout = (page) => {
  return <>{page}</>;
};

export default Nest;
