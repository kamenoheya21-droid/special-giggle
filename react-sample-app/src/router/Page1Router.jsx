import { Children } from "react";
import { Page1 } from "../Page1";
import { Page1Details } from "../Page1Details";

export const page1Router = [
  {
    path: "",
    exact: true,
    Children: <Page1 />,
  },
  {
    path: "details",
    exact: false,
    Children: <Page1Details />,
  },
];