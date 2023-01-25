interface IPage {
  id: string;
  title: string;
}

type PageState = {
  pages: IPage[];
};

type PageAction = {
  type: string;
};

type DispatchType = (args: PageAction) => PageAction;
