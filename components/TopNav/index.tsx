"use client";
import { Button } from "@components/Button";
import { CompanyIcon, CompanyIcon2 } from "@components/Icons";
import { SearchBar } from "@components/Searchbar";
import { Heading, Text } from "@components/Typography";
import { Routes, useNavigationStore } from "@stores/navigation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { StyledTopNav } from "./styled";

type NavigationItemProps = {
  text?: string;
  icon?: React.ReactElement;
  route: Routes;
  handleOpenClose?: () => any;
};

export default function TopNav(props: any) {
  const [value, setValue] = useState("");
  return (
    <StyledTopNav className="p-3">
      <div className="container flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <CompanyIcon2 stroke="var(--colors-accent)" width={40} height={40} />

          <SearchBar
            placeholder="Search..."
            wrapperClassName="w-[15rem]"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>

        <div className="flex items-center justify-center gap-4">
          <NavigationItem route="home" text="Home" />
          <NavigationItem route="about" text="About" />
          <NavigationItem route="contact" text="Contact" />
          <NavigationItem route="dashboard" text="Dashboard" />
          <NavigationItem route="table" text="Table" />
          <NavigationItem route="settings" text="Settings" />
        </div>
      </div>
    </StyledTopNav>
  );
}

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  const { text, icon, route } = props;

  /* Stores and Hooks */
  const router = useRouter();
  const { setRoute, route: currentRoute } = useNavigationStore();

  const onClickHandler = useCallback(() => {
    setRoute(route);
    router.push("/main", `/main/?tab=${route}`, { shallow: true });
  }, [route, router, setRoute]);

  return (
    <Button
      typographyProps={{
        size: "base",
        weight: "normal",
      }}
      variant="text"
      color="secondary"
      onClick={onClickHandler}
    >
      {text ?? icon}
    </Button>
  );
};
