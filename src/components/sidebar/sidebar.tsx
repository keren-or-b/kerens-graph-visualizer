"use client";

import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Dashboard,
  PowerSharp,
  Warning,
  ZoomInMap,
  DescriptionSharp,
  SignpostSharp,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Lorem", icon: <Warning />, path: "/warning" },
  { name: "Lorem", icon: <ZoomInMap />, path: "/1" },
  { name: "Lorem", icon: <PowerSharp />, path: "/2" },
  { name: "Lorem", icon: <DescriptionSharp />, path: "/3" },
  { name: "Lorem", icon: <SignpostSharp />, path: "/4" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // Ensure client-only rendering
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    localStorage.setItem("sidebarOpen", "false");
  }, []);
  //   Do not render anything until mounted to prevent SSR mismatch
  if (!mounted) return null;

  const toggleSidebar = () => {
    const newOpenState = !open;
    setOpen(newOpenState);
    localStorage.setItem("sidebarOpen", newOpenState.toString());
  };

  return (
    <div className="relative">
      <button
        onClick={() => toggleSidebar()}
        className={`absolute right-[-20px] top-7 z-[1500] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#00732E] text-white shadow-md transition-all duration-300`}
      >
        {open ? (
          <ChevronLeft fontSize="small" />
        ) : (
          <ChevronRight fontSize="small" />
        )}
      </button>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? 200 : 70,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 200 : 70,
            transition: "width 0.3s",
            overflowX: "hidden",
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <Link href={"/"} passHref legacyBehavior>
              <ListItemButton onClick={() => toggleSidebar}>
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    minWidth: 0,
                    width: open ? "50%" : "100%",
                  }}
                >
                  <Dashboard />
                </ListItemIcon>
              </ListItemButton>
            </Link>
          </ListItem>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <Link href={item.path} passHref legacyBehavior>
                <ListItemButton component="a" selected={pathname === item.path}>
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      minWidth: 0,
                      width: open ? "50%" : "100%",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {open && <ListItemText primary={item.name} />}
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
