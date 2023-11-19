"use client";

import { Fragment } from "react";
import NextLink from "next/link";
import {
  BellIcon,
  CalendarDaysIcon,
  ListChecksIcon,
  MessagesSquare,
  NewspaperIcon,
  PieChartIcon,
  StoreIcon,
  TrophyIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import RocketIcon from "@/assets/icons/rocket.png";

const FEATURES_GROUP = [
  {
    title: "Communication Center",
    features: [
      { name: "Feed", href: "/feed", icon: <NewspaperIcon /> },
      { name: "Chat", href: "/chat", icon: <MessagesSquare />, label: "3" },
      {
        name: "Notifications",
        href: "/notifications",
        icon: <BellIcon />,
        label: "+9",
      },
    ],
  },
  {
    title: "Management Hub",
    features: [
      { name: "Dashboard", href: "/dashboard", icon: <PieChartIcon /> },
      { name: "Tasks", href: "/tasks", icon: <ListChecksIcon /> },
      { name: "Schedule", href: "/schedule", icon: <CalendarDaysIcon /> },
    ],
  },
  {
    title: "Space",
    features: [
      { name: "Store", href: "/store", icon: <StoreIcon /> },
      {
        name: "Achievement",
        href: "/achievement",
        icon: <TrophyIcon />,
      },
    ],
  },
];

const Asidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 p-4 min-h-full bg-gray-900">
      <div className="flex items-center gap-2 mb-6 mt-2">
        <Image src={RocketIcon} alt="Ícone de foguete" width={40} />
        <h3 className="text-gray-200 text-2xl">.networkGU</h3>
      </div>

      {FEATURES_GROUP.map((group, index) => (
        <Fragment key={`group-${index}`}>
          <div>
            <h3 className="text-gray-200 text-xs mb-2">{group.title}</h3>
            <ul className="flex flex-col gap-1">
              {group.features.map((feature, index) => {
                const isActive = pathname === feature.href;
                const stylesOverrides = isActive
                  ? "bg-gray-800 text-gray-200"
                  : "bg-transparent text-gray-400";

                return (
                  <li
                    key={`feature-${index}`}
                    className={`flex items-center gap-2 py-1 px-2 hover:text-gray-200 hover:bg-gray-800 rounded-md font-semibold text-sm cursor-pointer ${stylesOverrides}`}
                  >
                    {feature.icon}
                    <NextLink href={feature.href} className="flex-1">
                      {feature.name}
                    </NextLink>
                    {feature?.label && <span>{feature.label}</span>}
                  </li>
                );
              })}
            </ul>
          </div>
          {index + 1 !== FEATURES_GROUP.length && (
            <hr className="my-4 border-gray-700" />
          )}
        </Fragment>
      ))}
    </aside>
  );
};

export default Asidebar;
