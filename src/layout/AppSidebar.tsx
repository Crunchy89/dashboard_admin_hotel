"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
  BoxCubeIcon,
  CalenderIcon,
  ChatIcon,
  ChevronDownIcon,
  DollarLineIcon,
  FileIcon,
  GridIcon,
  GroupIcon,
  HorizontaLDots,
  ListIcon,
  ShootingStarIcon,
  TaskIcon,
  UserCircleIcon,
} from "../icon";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const navSections: NavSection[] = [
  {
    title: "Overview",
    items: [
      {
        icon: <GridIcon />,
        name: "Dashboard",
        path: "/dashboard",
      },
    ],
  },
  {
    title: "Money",
    items: [
      {
        icon: <DollarLineIcon />,
        name: "Finance",
        path: "/dashboard/finance",
      },
      {
        icon: <FileIcon />,
        name: "Salary",
        path: "/dashboard/salary",
      },
    ],
  },
  {
    title: "Customers",
    items: [
      {
        icon: <UserCircleIcon />,
        name: "User",
        subItems: [
          { name: "List User", path: "/dashboard/user", pro: false },
          { name: "Room", path: "/dashboard/user/rooms", pro: false },
          { name: "Device", path: "/dashboard/user/devices", pro: false },
        ],
      },
      {
        icon: <BoxCubeIcon />,
        name: "Packages",
        path: "/dashboard/packages",
      },
      {
        icon: <ShootingStarIcon />,
        name: "Client Points",
        path: "/dashboard/client-points",
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        icon: <CalenderIcon />,
        name: "Installation",
        path: "/dashboard/calendar",
      },
      {
        icon: <TaskIcon />,
        name: "Maintenance",
        path: "/dashboard/maintenance",
      },
    ],
  },
  {
    title: "Organization",
    items: [
      {
        icon: <GroupIcon />,
        name: "Staff",
        path: "/dashboard/staff",
      },
    ],
  },
  {
    title: "Business",
    items: [
      {
        icon: <ListIcon />,
        name: "Reports",
        path: "/dashboard/laporan",
      },
      {
        icon: <ChatIcon />,
        name: "Messages",
        path: "/dashboard/chat",
      },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const [openSubmenu, setOpenSubmenu] = useState<{
    section: string;
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {},
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  const renderMenuItems = (items: NavItem[], section: string) => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, section)}
              className={`menu-item group  ${
                openSubmenu?.section === section && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={` ${
                  openSubmenu?.section === section &&
                  openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${
                    openSubmenu?.section === section &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${section}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.section === section &&
                  openSubmenu?.index === index
                    ? `${subMenuHeight[`${section}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  useEffect(() => {
    let matched: { section: string; index: number } | null = null;

    navSections.forEach((section) => {
      section.items.forEach((nav, index) => {
        if (nav.subItems?.some((subItem) => isActive(subItem.path))) {
          matched = { section: section.title, index };
        }
      });
    });

    setOpenSubmenu(matched);
  }, [pathname, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.section}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, section: string) => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.section === section &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { section, index };
    });
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
              ? "w-[290px]"
              : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <Image
            src="/images/logo/logo-icon.svg"
            alt="Logo"
            width={32}
            height={32}
          />
          {(isExpanded || isHovered || isMobileOpen) && (
            <span className="text-xl font-semibold text-gray-800 dark:text-white/90">
              Dashboard
            </span>
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-6">
            {navSections.map((section) => (
              <div key={section.title}>
                <h2
                  className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                    !isExpanded && !isHovered
                      ? "lg:justify-center"
                      : "justify-start"
                  }`}
                >
                  {isExpanded || isHovered || isMobileOpen ? (
                    section.title
                  ) : (
                    <HorizontaLDots />
                  )}
                </h2>
                {renderMenuItems(section.items, section.title)}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
