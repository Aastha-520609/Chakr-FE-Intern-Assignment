'use client'
import React from 'react'
import {Nav} from "./ui/nav";
import {Separator} from "./ui/separator";

type Props = {}

import {
    LayoutDashboardIcon,
    Search,
    Bell,
    Settings,
    UserCheck,
    Building2,
    TargetIcon,
    Contact,
    SquareCheckBig,
    CalendarSearch,
    HandHeart,
    HeartHandshake,
    Users2,
  } from "lucide-react"

export default function SideNavbar({}: Props) {
  return (
    <div>
        <Nav
            isCollapsed={false}
            links={[
              {
                title: "Dashboard",
                href: "/dashboard",
                icon: LayoutDashboardIcon,
                variant: "default",
              },
            ]}
        />
        <Separator type="line" />
        <Nav
            isCollapsed={false}
            links={[
              {
                title: "Search",
                href: "/search",
                icon: Search,
                variant: "ghost",
              },
              {
                title: "Notification",
                href: "/notification",
                icon: Bell,
                variant: "ghost",
              },
              {
                title: "Settings",
                href: "/settings",
                icon: Settings,
                variant: "ghost",
              },
            ]}
          />
          <Separator type="text" text="Sales" />
          <Nav
            isCollapsed={false}
            links={[
              {
                title: "People",
                href: "/people",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Prospects",
                href: "/prospects",
                icon: UserCheck,
                variant: "ghost",
              },
              {
                title: "Companies",
                href: "/companies",
                icon: Building2,
                variant: "ghost",
              },
              {
                title: "Opportunities",
                href: "/opportunities",
                icon: TargetIcon,
                variant: "ghost",
              },
              {
                title: "Contacts",
                href: "/contacts",
                icon: Contact,
                variant: "ghost",
              },
            ]}
          />
        <Separator type="text" text="Productivity" />
        <Nav
            isCollapsed={false}
            links={[
              {
                title: "Tasks",
                href: "/tasks",
                icon: SquareCheckBig,
                variant: "ghost",
              },
              {
                title: "Calender",
                href: "/calender",
                icon: CalendarSearch,
                variant: "ghost",
              },
            ]}
          />
        <Separator type="text" text="Community" />
        <Nav
            isCollapsed={false}
            links={[
              {
                title: "Forums",
                href: "/forums",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Contribution",
                href: "/contribution",
                icon: HandHeart,
                variant: "ghost",
              },
              {
                title: "Support",
                href: "/support",
                icon: HeartHandshake,
                variant: "ghost",
              },
            ]}
          />
    </div>
  )
}