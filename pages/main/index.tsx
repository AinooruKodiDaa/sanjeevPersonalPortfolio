import { About } from "@layouts/About";
import { Contact } from "@layouts/Contact";
import { Dashboard } from "@layouts/Dashboard";
import { Home } from "@layouts/Home";
import { Settings } from "@layouts/Settings";
import { Table } from "@layouts/Table";
import { AppLayout } from "@layouts/layout";
import { useNavigationStore } from "@stores/navigation";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

type Page = React.FC<Props> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
};

const MainPage: Page = (props) => {
  const {} = props;
  const route = useNavigationStore((s) => s.route);

  return (


    <>
    {route === "home" && <Home/>}
    {route === "contact" && <Contact/>}
    {route === "about" && <About/>}
    {route === "settings" && <Settings/>}
    {route === "dashboard" && <Dashboard/>}
    {route === "table" && <Table/>}

    </>
  );
};

MainPage.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};

export default MainPage;