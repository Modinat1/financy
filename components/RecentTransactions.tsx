'use client';

import React, { useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import Image from 'next/image';

const RecentTransactions = () => {
  const [active, setActive] = useState("all");

  const categories = ["all", "revenue", "expenses"];

  const expenses = [
    {
      id: 1,
      title: 'Gadget & Gear',
      item: "GTR 5",
      price: 160,
      day: 17,
      month: "May",
      year: 2023,
      icon: "/icons/gadget.svg",
      category: 'expenses',
    },
    {
      id: 2,
      title: 'XL fashions',
      item: "Polo Shirt",
      price: 20,
      day: 17,
      month: "May",
      year: 2023,
      icon: "/icons/Shopping.svg",
      category: 'revenue',
    },
    {
      id: 3,
      title: 'Food',
      item: "Biryani",
      price: 10,
      day: 17,
      month: "May",
      year: 2023,
      icon: "/icons/Food.svg",
      category: 'expenses',
    },
    {
      id: 4,
      title: 'Uber',
      item: "Taxi Fare",
      price: 12,
      day: 17,
      month: "May",
      year: 2023,
      icon: "/icons/Transport.svg",
      category: 'expenses',
    },
    {
      id: 5,
      title: 'Gadget & Gear',
      item: "Keyboard",
      price: 22,
      day: 17,
      month: "May",
      year: 2023,
      icon: "/icons/gadget.svg",
      category: 'revenue',
    },
  ];

  const filteredTransactions =
    active === "all"
      ? expenses
      : expenses.filter((expense) => expense.category === active);

  return (
    <div>
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-[#878787] text-md">Recent Transactions</h3>
        <span className="flex items-center gap-2 cursor-pointer">
          <p className="capitalize text-xs text-[#878787]">view all</p>
          <BsChevronRight size={12} />
        </span>
      </div>

      <div className="bg-[#FFFFFF] rounded-md p-6">
        {/* Categories Tabs */}
        <ul className="flex gap-4 p-4 border-b">
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer text-xs font-bold pb-2 ${
                active === category
                  ? "text-[#299D91] border-b-2 border-[#299D91]"
                  : "text-[#66666A]"
              }`}
              onClick={() => setActive(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>

        {/* Transactions List */}
        {filteredTransactions.map((expense, index) => {
          const { id, title, price, item, icon, day, month, year } = expense;
          return (
            <div
              key={id}
              className={`flex justify-between items-center py-4 ${
                index !== filteredTransactions.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              {/* Icon and Details */}
              <div className="flex items-center gap-2">
                <div className="bg-[#F4F4F4] rounded-md p-2">
                  <Image
                    src={icon}
                    width={20}
                    height={20}
                    alt={title}
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold">{item}</h3>
                  <small className="text-[#9F9F9F] text-xs">{title}</small>
                </div>
              </div>

              {/* Price and Date */}
              <div>
                <h3 className="text-sm text-right font-semibold">${price}</h3>
                <small className="text-xs text-[#9F9F9F]">
                  {day} {month} {year}
                </small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentTransactions;
