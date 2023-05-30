export type ActiveMenuItem = {
  activeMenuItemIndex: number;
  activeMenuItemText: string;
};

export type ActiveMenuItemRootState = {
  activeMenuItem: ActiveMenuItem;
};
