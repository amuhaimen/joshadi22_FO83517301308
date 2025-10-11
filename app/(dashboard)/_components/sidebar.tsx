"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";
import {
  DashboardIcon,
  JobSearchIcon,
  SettingsIcon,
  SoftwareDevIcon,
  WidgetStoreIcon,
  ContractsIcon,
} from "@/public/sidebar/icons/CustomIcons";
import QuestionIcon from "@/public/sidebar/icons/Question";
import logo from "@/public/header/images/logo.png";
import PhoneIcon from "@/public/sidebar/icons/PhoneIcon";

// ✅ Import JSON using absolute path
import contractsData from "../../(dashboard)/dashboard/contracts/data/contactsData.json";

type SubItem = {
  title: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: SubItem[];
};
type MenuItem = {
  title: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  children?: SubItem[];
};

const bottomMenuItems = [
  { title: "Store", icon: <WidgetStoreIcon />, href: "/dashboard/widget-store" },
  { title: "Support", icon: <QuestionIcon />, href: "#" },
  { title: "Contact Us", icon: <PhoneIcon />, href: "#" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname() || "";
  const { role } = useAuth();
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  /* ================= Build Contracts Children (role-wise) ================= */
  const contractsChildren: SubItem[] = contractsData.map((contract) => {
    const base = `${contract.href}`;
    const userRole = role || "manager"; // fallback

    const children: SubItem[] =
      userRole === "manager" || userRole === "investor"
        ? [{ title: "Dashboard", icon: DashboardIcon, href: `${base}/${userRole}` }]
        : [
            { title: "Dashboard", icon: DashboardIcon, href: `${base}/${userRole}` },
            { title: "Workspace", icon: SettingsIcon, href: `${base}/${userRole}-workspace` },
          ];

    return { title: contract.title, href: base, children };
  });

  const menuItems: Record<string, MenuItem[]> = {
    manager: [
      { title: "Contracts", icon: ContractsIcon, href: "/dashboard/contracts", children: contractsChildren },
      { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
      { title: "Time Keeping", icon: SoftwareDevIcon, href: "/dashboard/time-keeping" },
      { title: "Project Manager Payout", icon: JobSearchIcon, href: "/dashboard/payout" },
      { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
    ],
    investor: [
      { title: "Contracts", icon: ContractsIcon, href: "/dashboard/contracts", children: contractsChildren },
      { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
        { title: "Time Keeping", icon: SoftwareDevIcon, href: "/dashboard/time-keeping" },
      { title: "Investment Ideas", icon: JobSearchIcon, href: "/dashboard/investment-ideas" },
      { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
    ],
    designer: [
      { title: "Contracts", icon: ContractsIcon, href: "/dashboard/contracts", children: contractsChildren },
      { title: "Certificate Store", icon: DashboardIcon, href: "/dashboard/certification-store" },
        { title: "Time Keeping", icon: SoftwareDevIcon, href: "/dashboard/time-keeping" },
      { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
      { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
    ],
    developer: [
      { title: "Contracts", icon: ContractsIcon, href: "/dashboard/contracts", children: contractsChildren },
       { title: "Certificate Store", icon: DashboardIcon, href: "/dashboard/certification-store" },
            { title: "Time Keeping", icon: SoftwareDevIcon, href: "/dashboard/time-keeping" },
      { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
      { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
    ],
  };

  /* ================= Open all dropdowns on mount ================= */
  useEffect(() => {
    const initialState: Record<string, boolean> = {};
    const openAll = (items: (MenuItem | SubItem)[]) => {
      items.forEach((item) => {
        initialState[item.title] = true;
        if ("children" in item && item.children) openAll(item.children);
      });
    };
    const currentItems = menuItems[role || "contracts"] || [];
    openAll(currentItems);
    setOpenDropdowns(initialState);
  }, [role,menuItems]);

  /* ============== Collapse “Contracts” outside its route ============== */
  useEffect(() => {
    setOpenDropdowns((prev) => ({
      ...prev,
      Contracts: pathname.startsWith("/dashboard/contracts"),
    }));
  }, [pathname]);

  const toggleDropdown = (title: string) =>
    setOpenDropdowns((prev) => ({ ...prev, [title]: !prev[title] }));

  /* ============== Active checker ============== */
  const isActiveParent = (parentPath: string, children?: SubItem[]): boolean => {
    if (pathname === parentPath || pathname.startsWith(parentPath + "/")) return true;
    if (children?.length) {
      return children.some(
        (child) =>
          pathname === child.href ||
          pathname.startsWith(child.href + "/") ||
          isActiveParent(child.href, child.children)
      );
    }
    return false;
  };

  /* ============== Recursive children renderer (depth-aware) ============== */
  const renderChildren = (children?: SubItem[], depth = 1) => {
    if (!children) return null;

    return (
      <div className={`${depth === 1 ? "ml-8" : "ml-12"} mt-2 space-y-2`}>
        {children.map((child) => {
          const hasChildren = !!child.children?.length;
          const isActive = isActiveParent(child.href, child.children);
          const isOpen = openDropdowns[child.title];
          const IconComp = child.icon;

          return (
            <div key={child.href}>
              <button
                onClick={() => {
                  if (hasChildren) toggleDropdown(child.title);
                  router.push(child.href);
                }}
                className={`flex items-center justify-between gap-3 p-2 rounded-md w-full text-left transition-colors duration-150 text-base ${
                  isActive
                    ? "text-[#21AF68] font-semibold text-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {/* depth 1: icon-only (আগের মতো), depth >= 2: icon + title */}
                <span className="flex items-center gap-2">
                  {IconComp && <IconComp className="w-5 h-5" />}
                  {depth >= 2 ? <span>{child.title}</span> : !IconComp ? <span>{child.title}</span> : null}
                </span>

                {hasChildren && (isOpen ? <IoChevronUp /> : <IoChevronDown />)}
              </button>

              {hasChildren && isOpen && renderChildren(child.children, depth + 1)}
            </div>
          );
        })}
      </div>
    );
  };

  const items = menuItems[role || "contracts"] || [];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 w-72 sidebar_bg shadow-lg flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-center">
          <Image src={logo} alt="logo" width={70} height={70} />
        </div>
        <button className="p-2 rounded-lg hover:bg-gray-100 md:hidden" onClick={onClose}>
          <IoMdClose className="w-6 h-6" />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-grow overflow-y-auto">
        <div className="p-4 space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const hasChildren = !!item.children?.length;
            const isOpen = openDropdowns[item.title];
            const isActive = isActiveParent(item.href, item.children);

            return (
              <div key={item.title} className="relative">
                {/* Main parent active design */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1.5 rounded-r bg-[#21AF68]"
                  />
                )}

                <button
                  onClick={() => {
                    if (hasChildren) toggleDropdown(item.title);
                    router.push(item.href);
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex w-full items-center justify-between p-3 pl-5 rounded-lg transition-all duration-200 text-base ${
                    isActive
                      ? "bg-gradient-to-r from-[#183823] via-[#193928] to-[#174a32] text-white font-semibold ring-1 ring-[#1f5a3a]/50"
                      : "text-[#E9E9EA] hover:font-semibold hover:bg-white/5"
                  }`}
                >
                  {/* Main menu: icon + title */}
                  <div className="flex items-center gap-3.5 flex-1">
                    {Icon && <Icon className="w-5 h-5" />}
                    <span>{item.title}</span>
                  </div>

                  {hasChildren && (isOpen ? <IoChevronUp /> : <IoChevronDown />)}
                </button>

                {hasChildren && isOpen && renderChildren(item.children, 1)}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Bottom Menu */}
      <div className="mt-auto p-4 space-y-2">
        {bottomMenuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3.5 p-3 rounded-lg transition-all duration-200 text-base ${
                isActive
                  ? "bg-gradient-to-r from-[#183823] via-[#193928] to-[#174a32] text-white font-semibold"
                  : "text-[#E9E9EA] hover:font-semibold"
              }`}
              onClick={onClose}
            >
              <div className="w-5 h-5">{item.icon}</div>
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
