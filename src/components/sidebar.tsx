"use client";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Inbox,
  Settings,
  Smile,
  TimerReset,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "Inbox",
      icon: <Inbox />,
    },
    {
      name: "Activity",
      icon: <Bell />,
    },
    {
      name: "Schedule",
      icon: <TimerReset />,
    },
    {
      name: "Settings",
      icon: <Settings />,
    },
    {
      name: "Help",
      icon: <HelpCircle />,
    },
  ];

  const sidebarVariant = {
    open: {
      width: "16rem",
      transition: {
        duration: 0.6,
      },
    },
    closed: {
      width: "4.5rem",
      transition: {
        duration: 0.6,
      },
    },
  };

  const childVariant = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  const parentVariant = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const logoVariant = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      transition={{
        duration: 0.3,
      }}
      exit={"closed"}
      className="h-[100vh] border-r border-neutral-100 "
    >
      <motion.nav
        variants={sidebarVariant}
        className=" bg-white shadow-md h-full p-4"
      >
        <div className="flex justify-between text-black items-center">
          <motion.div
            variants={logoVariant}
            className={`flex gap-2 items-center ${!isOpen && "hidden"}`}
          >
            <span className="bg-indigo-600 rounded-md p-2">
              <Smile className="text-white" />
            </span>
            <div>
              <h2 className="text-sm font-semibold">Dashboard</h2>
              <p className="text-xs font-medium text-neutral-600 ">Team Plan</p>
            </div>
          </motion.div>
          <button
            className="bg-white rounded-full p-2 hover:bg-neutral-50 text-stone-500"
            onClick={toggleButton}
          >
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <motion.div
          variants={parentVariant}
          className={`text-black flex flex-col  gap-4 mt-6  border-y-2 py-3 border-neutral-300 
          } `}
        >
          {links.map((link) => (
            <motion.div className="flex gap-3" key={link.name}>
              <div className="text-neutral-500">{link.icon}</div>
              <motion.h1 variants={childVariant}>{link.name}</motion.h1>
            </motion.div>
          ))}
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}
