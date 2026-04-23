"use client";

import type * as Persona from "#/components/persona";
import type * as NavItem from "#/components/sidebar/nav-item";
import { linkOptions } from "@tanstack/react-router";
import {
  AudioLinesIcon,
  BlocksIcon,
  CalendarIcon,
  HomeIcon,
  InboxIcon,
  MessageCircleQuestionIcon,
  SearchIcon,
  Settings2Icon,
  SparklesIcon,
  TerminalIcon,
  Trash2Icon,
} from "lucide-react";

// This is sample data.
export const sidebarDemoData = {
  user: {
    name: "Oliver T",
    subtitle: "oliver@example.com",
    avatar: "https://i.pravatar.cc/150?u=oliver",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: <TerminalIcon />,
      subtitle: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: <AudioLinesIcon />,
      subtitle: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: <TerminalIcon />,
      subtitle: "Free",
    },
  ],
  primary: [
    {
      title: "Search",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <SearchIcon />,
    },
    {
      title: "Ask AI",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <SparklesIcon />,
    },
    {
      title: "Home",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <HomeIcon />,
    },
    {
      title: "Inbox",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <InboxIcon />,
      badge: "10",
    },
  ],
  secondary: [
    {
      title: "Calendar",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <CalendarIcon />,
    },
    {
      title: "Settings",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <Settings2Icon />,
    },
    {
      title: "Templates",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <BlocksIcon />,
    },
    {
      title: "Trash",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <Trash2Icon />,
    },
    {
      title: "Help",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <MessageCircleQuestionIcon />,
    },
  ],
  detailPages: [
    {
      title: "Project Management & Task Tracking",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <span>📊</span>,
    },
    {
      title: "Family Recipe Collection & Meal Planning",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <span>🍳</span>,
    },
    {
      title: "Fitness Tracker & Workout Routines",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <span>💪</span>,
    },
    {
      title: "Book Notes & Reading List",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <span>📚</span>,
    },
    {
      title: "Sustainable Gardening Tips & Plant Care",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <span>🌱</span>,
    },
    {
      title: "Language Learning Progress & Resources",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <span>🗣️</span>,
    },
    {
      title: "Home Renovation Ideas & Budget Tracker",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <span>🏠</span>,
    },
    {
      title: "Personal Finance & Investment Portfolio",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <span>💰</span>,
    },
    {
      title: "Movie & TV Show Watchlist with Reviews",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <span>🎬</span>,
    },
    {
      title: "Daily Habit Tracker & Goal Setting",
      linkOptions: linkOptions({ to: "/detail" }),
      icon: <span>✅</span>,
    },
  ],
} satisfies {
  primary: Array<NavItem.LinkItem>;
  secondary: Array<NavItem.LinkItem>;
  detailPages: Array<NavItem.LinkItem>;
  teams: Persona.TeamData[];
  user: Persona.UserData;
};
