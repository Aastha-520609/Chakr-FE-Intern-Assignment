'use client'
import {useState} from 'react'
import {Nav} from "./ui/nav";
import {Separator} from "./ui/separator";
import {Button} from "./ui/button";

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
    HeartHandshake,
    ReceiptText,
    Users2,
    PanelLeftClose,
    PanelRightClose,
  } from "lucide-react"

export default function SideNavbar({}: Props) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

    function toggleSidebar()
    {
      setIsCollapsed(!isCollapsed)
    }
  
  return (
    <div className="relative min-w-[80px] px-3 pt-12">
     <div className="absolute right-[-20px] top-3">
        <Button
           onClick={toggleSidebar} 
           variant="ghost" 
           className="p-2 h-8 w-8"
        > 
            {isCollapsed ? <PanelRightClose /> : <PanelLeftClose />}
        </Button>
     </div>
        <Nav
            isCollapsed={isCollapsed}
            links={[  
              {
                title: "Dashboard",
                href: "/",
                icon: LayoutDashboardIcon,
                variant: "default",
              },
            ]}
        />
         {!isCollapsed && <Separator type="line" />}
        <Nav
            isCollapsed={isCollapsed}
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
          {!isCollapsed && <Separator type="text" text="Sales" />}
          <Nav
            isCollapsed={isCollapsed}
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
                title: "Contracts",
                href: "/contracts",
                icon: ReceiptText,
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
        {!isCollapsed && <Separator type="text" text="Productivity" />}
        <Nav
            isCollapsed={isCollapsed}
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
        {!isCollapsed && <Separator type="text" text="Community" />}
        <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Forums",
                href: "/forums",
                icon: Users2,
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