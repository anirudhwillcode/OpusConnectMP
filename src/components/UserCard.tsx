"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

interface UserCardProps {
  type: string;
  count: number;
  year: string;
  trend?: "up" | "down";
  trendPercentage?: number;
}

export default function UserCard({
  type,
  count,
  year,
  trend,
  trendPercentage,
}: UserCardProps) {
  const isOdd = type.length % 2 !== 0;

  return (
    <motion.div
      className={`rounded-2xl ${
        isOdd ? "bg-white" : "bg-yellow-100"
      } p-6 flex-1 min-w-[200px] shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs bg-lamaSkyLight px-3 py-1 rounded-full text-green-600 font-semibold shadow-sm">
          {year} 2024-2025
        </span>
        <button className="text-gray-500 hover:text-gray-700 transition-colors">
          <Image src="/more.png" alt="More options" width={20} height={20} />
        </button>
      </div>
      <div className="flex items-end gap-2 mb-2">
        <h1 className="text-4xl font-bold text-gray-800">{count} 43</h1>
        {trend && trendPercentage && (
          <div
            className={`flex items-center ${
              trend === "up" ? "text-green-500" : "text-red-500"
            }`}
          >
            {trend === "up" ? (
              <TrendingUp size={20} />
            ) : (
              <TrendingDown size={20} />
            )}
            <span className="text-sm font-semibold">{trendPercentage}%</span>
          </div>
        )}
      </div>
      <h2 className="capitalize text-sm font-medium text-gray-600">{type}s</h2>
      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${isOdd ? "bg-blue-200" : "bg-yellow-500"}`}
          style={{ width: `${(count / 100) * 100}%` }}
        ></div>
      </div>
    </motion.div>
  );
}
