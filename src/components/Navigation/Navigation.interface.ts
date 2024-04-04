interface IINavListItem {
  path: string;
  title: string;
  img?: JSX.Element;
}

export interface INavList {
  title: string;
  list: IINavListItem[];
}
