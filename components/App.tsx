/* SPDX-FileCopyrightText: 2021 @koistya */
/* SPDX-License-Identifier: MIT */

import * as React from "react";
import {
  Typography,
  CssBaseline,
  Container,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Divider,
  ListItemText,
  Button,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { AppToolbar, Toolbar } from "./AppToolbar";
import { ThemeProvider } from "./ThemeProvider";
import "tailwindcss/tailwind.css";
import "./index.css";
import { useState, useEffect } from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

/**
 * The top-level (root) React component.
 *
 * @see https://reactjs.org/
 * @see https://mui.com/core/
 */
export function App(): JSX.Element {
  const data = [
    { id: 1, name: "kishor" },
    { id: 2, name: "kishor" },
    { id: 3, name: "kishor" },
    { id: 4, name: "kishor" },
    { id: 5, name: "kishor" },
    { id: 6, name: "kishor" },
    { id: 7, name: "kishor" },
    { id: 8, name: "kishor" },
    { id: 9, name: "kishor" },
    { id: 10, name: "kishor" },
  ];

  const [collapsed, setCollapsed] = useState(true);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    setListData(collapsed ? data.slice(0, 5) : data);
  }, [collapsed]);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const getListItem = () => {
    return listData.map((item) => {
      return (
        <ListItem>
          <ListItemText primary="Inbox">{item.name}</ListItemText>
        </ListItem>
      );
    });
  };

  return (
    <ThemeProvider>
      <CssBaseline />

      <AppToolbar />
      <Toolbar />

      <Container sx={{ my: 4 }}>
        <Card className="rounded-3xl">
          <CardHeader title="Hello" className="border-b-2 h-12" />
          <CardContent className="h-100">
            <List>{getListItem()}</List>
            <div className="justify-center flex w-full">
              <Button
                variant="outlined"
                startIcon={<DraftsIcon />}
                endIcon={collapsed ? <ArrowDownward /> : <ArrowUpward />}
                onClick={handleCollapsed}
                className="self-center "
              >
                {collapsed ? "Show all" : "Show less"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
