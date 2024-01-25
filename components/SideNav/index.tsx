"use client";
import { Button } from "@components/Button";
import { CompanyIcon, CompanyIcon2, ContactIcon, DashboardIcon, HomeIcon, SettingsIcon, TableIcon, UserIcon } from "@components/Icons";
import { SearchBar } from "@components/Searchbar";
import { Heading, Text } from "@components/Typography";
import { Routes, useNavigationStore } from "@stores/navigation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

type NavigationItemProps = {
  text?: string;
  icon?: React.ReactElement;
  route: Routes;
  handleOpenClose?: () => any;
};

export default function SideNav(props: any) {
  const [value, setValue] = useState("");
  return (
    <nav className="z-50 rounded-3xl p-3 bg-slate-800 drop-shadow-lg fixed left-2  top-[30%]">
      <div className="flex flex-col items-center justify-between gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
        <CompanyIcon2 stroke="var(--colors-accent)" width={40} height={40} />
            {/* <SearchBar
              placeholder="Search..."
              wrapperClassName="w-[10rem]"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            /> */}
          
        </div>



        <div className="flex flex-col items-center justify-center gap-4">
          
          <NavigationItem route="home" icon={<HomeIcon fill="currentColor" width={20} height={20} />}/>
          <NavigationItem route="about" icon={<UserIcon fill="currentColor" width={20} height={20} />} />
          <NavigationItem route="contact" icon={<ContactIcon fill="currentColor" width={20} height={20} />} />
          <NavigationItem route="dashboard" icon={<DashboardIcon fill="currentColor" width={20} height={20} />} />
          <NavigationItem route="table" icon={<TableIcon stroke="currentColor" width={20} height={20} />} />
          <NavigationItem route="settings" icon={<SettingsIcon fill="currentColor" width={20} height={20} />} />
       
        </div>


      </div>
    </nav>
  );
}

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  const { text, icon, route } = props;

  /* Stores and Hooks */
  const router = useRouter();
  const { setRoute, route: currentRoute } = useNavigationStore();

  const onClickHandler = useCallback(() => {
    setRoute(route);
    router.push("/", `/${route}`, { shallow: true });
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
