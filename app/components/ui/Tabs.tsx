"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTabId?: string;
  variant?: "underline" | "pills" | "boxed";
  fullWidth?: boolean;
  className?: string;
}

export default function Tabs({
  tabs,
  defaultTabId,
  variant = "underline",
  fullWidth = false,
  className = "",
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id);

  const variantStyles = {
    underline: {
      tabList: "flex border-b border-gray-200",
      tab: "px-4 py-2 text-sm font-medium",
      activeTab: "text-black border-b-2 border-black",
      inactiveTab: "text-gray-500 hover:text-gray-700 hover:border-gray-300",
    },
    pills: {
      tabList: "flex space-x-2",
      tab: "px-4 py-2 text-sm font-medium rounded-md",
      activeTab: "bg-black text-white",
      inactiveTab: "text-gray-500 hover:text-gray-900 hover:bg-gray-100",
    },
    boxed: {
      tabList: "flex",
      tab: "px-4 py-2 text-sm font-medium border-t border-r border-l rounded-t-md",
      activeTab: "bg-white text-black border-gray-200 -mb-px",
      inactiveTab: "bg-gray-50 text-gray-500 border-gray-100 hover:text-gray-700",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={className}>
      <div className={`${styles.tabList} ${fullWidth ? "w-full" : ""}`}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`${styles.tab} ${
                isActive ? styles.activeTab : styles.inactiveTab
              } ${fullWidth ? "flex-1 text-center" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              aria-selected={isActive}
              role="tab"
            >
              {tab.label}
              {variant === "underline" && isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-black"
                  layoutId="underline"
                />
              )}
            </button>
          );
        })}
      </div>
      <div className="mt-4 relative" style={{ minHeight: "200px" }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="transition-all duration-300 ease-in-out"
            style={{
              display: activeTab === tab.id ? "block" : "none",
            }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
} 