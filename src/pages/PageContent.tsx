import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, shallowEqual } from "react-redux";
import { useLocation } from "react-router-dom";
import Page from "../components/layout/Page";

const useStyles = makeStyles(() => ({
  main__paragraph: {
    margin: "auto !important",
  },
}));

const PageContent: React.FC<unknown> = () => {
  const classes = useStyles();
  const location = useLocation();

  let pages: IPage[] = useSelector(
    (state: PageState) => state.pages,
    shallowEqual
  );
  pages = pages.filter((page) => page.id === location.pathname);

  const pageTitle = pages[0].title;

  return (
    <Page>
      <Typography className={classes.main__paragraph}>{pageTitle}</Typography>
    </Page>
  );
};

export default PageContent;
