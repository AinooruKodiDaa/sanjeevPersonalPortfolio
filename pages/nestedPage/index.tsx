import { About } from "@layouts/About";
import { Contact } from "@layouts/Contact";
import { Dashboard } from "@layouts/Dashboard";
import { Home } from "@layouts/Home";
import { NestedComponent } from "@layouts/NestedPage";

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

const NestedPage: Page = (props) => {
  const {} = props;
  const route = useNavigationStore((s) => s.route);

  return (
    <>
      <NestedComponent />
    </>
  );
};

NestedPage.getLayout = (page) => {
  return <>{page}</>;
};

export default NestedPage;
