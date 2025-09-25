'use client';

import React, { useState } from 'react';
import AccountSettings from './AccountSettings';
import SecuritySettings from './SecuritySettings';

const SettingsComp = () => {
  const [active, setActive] = useState("account");
  const categories = ["account", "security"]; 

  return (
    <div className="bg-[#ffffff] rounded-lg p-4">
      <ul className="flex gap-5">
        {categories.map((category) => (
          <li
            key={category}
            className={`capitalize cursor-pointer pb-3 ${
              active === category ? "font-bold text-[#299D91] border-b-2 border-[#299D91]" : "text-gray-500"
            }`}
            onClick={() => setActive(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        {active === "account" && <AccountSettings/>}
        {active === "security" && <SecuritySettings/>}
      </div>
    </div>
  );
};

export default SettingsComp;
