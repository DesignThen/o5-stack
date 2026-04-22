"use client";

import type * as Persona from "#/components/persona";
import type * as NavItem from "#/components/sidebar/nav-item";
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
    name: "shadcn",
    subtitle: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
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
      url: "#",
      icon: <SearchIcon />,
    },
    {
      title: "Ask AI",
      url: "#",
      icon: <SparklesIcon />,
    },
    {
      title: "Home",
      url: "#",
      icon: <HomeIcon />,
    },
    {
      title: "Inbox",
      url: "#",
      icon: <InboxIcon />,
      badge: "10",
    },
  ],
  secondary: [
    {
      title: "Calendar",
      url: "#",
      icon: <CalendarIcon />,
    },
    {
      title: "Settings",
      url: "#",
      icon: <Settings2Icon />,
    },
    {
      title: "Templates",
      url: "#",
      icon: <BlocksIcon />,
    },
    {
      title: "Trash",
      url: "#",
      icon: <Trash2Icon />,
    },
    {
      title: "Help",
      url: "#",
      icon: <MessageCircleQuestionIcon />,
    },
  ],
  detailPages: [
    {
      title: "Project Management & Task Tracking",
      url: "#",
      icon: <span>📊</span>,
    },
    {
      title: "Family Recipe Collection & Meal Planning",
      url: "#",
      icon: <span>🍳</span>,
    },
    {
      title: "Fitness Tracker & Workout Routines",
      url: "#",
      icon: <span>💪</span>,
    },
    {
      title: "Book Notes & Reading List",
      url: "#",
      icon: <span>📚</span>,
    },
    {
      title: "Sustainable Gardening Tips & Plant Care",
      url: "#",
      icon: <span>🌱</span>,
    },
    {
      title: "Language Learning Progress & Resources",
      url: "#",
      icon: <span>🗣️</span>,
    },
    {
      title: "Home Renovation Ideas & Budget Tracker",
      url: "#",
      icon: <span>🏠</span>,
    },
    {
      title: "Personal Finance & Investment Portfolio",
      url: "#",
      icon: <span>💰</span>,
    },
    {
      title: "Movie & TV Show Watchlist with Reviews",
      url: "#",
      icon: <span>🎬</span>,
    },
    {
      title: "Daily Habit Tracker & Goal Setting",
      url: "#",
      icon: <span>✅</span>,
    },
  ],
} satisfies {
  primary: Array<NavItem.RouteProps["item"]>;
  secondary: Array<NavItem.RouteProps["item"]>;
  detailPages: Array<NavItem.RouteProps["item"]>;
  teams: Persona.TeamData[];
  user: Persona.UserData;
};
