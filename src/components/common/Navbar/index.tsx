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
} from "lucide-react";
import { usePathname } from "next/navigation";

const FEATURES_GROUP = [
  {
    title: "Management Hub",
    features: [
      { name: "Dashboard", href: "/dashboard", icon: <PieChartIcon /> },
      { name: "Tasks", href: "/tasks", icon: <ListChecksIcon /> },
      { name: "Schedule", href: "/schedule", icon: <CalendarDaysIcon /> },
    ],
  },
  {
    title: "Communication Center",
    features: [
      { name: "Chat", href: "/chat", icon: <MessagesSquare /> },
      { name: "Feed", href: "/feed", icon: <NewspaperIcon /> },
      { name: "Notifications", href: "/notifications", icon: <BellIcon /> },
    ],
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-64 p-4 min-h-full bg-gray-900">
      <div className="flex items-center gap-2 mb-6 mt-2">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-green-600" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-red-600" />
        </div>
      </div>

      {FEATURES_GROUP.map((group, index) => (
        <Fragment key={`group-${index}`}>
          <div>
            <h3 className="text-gray-200 font-bold mb-2">{group.title}</h3>
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
    </nav>
  );
};

export default Navbar;
