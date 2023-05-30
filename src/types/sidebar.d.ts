import { DropDown } from "./dropDown";

export type SideNavBar = {
  isSidebarOpen: boolean;
  isNavbarOpen: boolean;
  dropDownList: DropDown[];
};

export type SideNavBarRootState = {
  sideNavBar: SideNavBar;
};
