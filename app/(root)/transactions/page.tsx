'use client'

import PagesHeader from "@/components/PagesHeader";
import Header from "@/components/Header";
import TransactionHistoryTable from "@/components/TransactionHistoryTable";
import { useState } from "react";

const Transactions = () => {
    const [active, setActive] = useState("all"); 

    const categories = ["all", "revenue", "expenses"];

    const transactions = [
        { date: "17 Apr, 2023", status: "Complete", type: "Credit", receipt: "BC52d5DKDJS", amount: 250, category: "revenue" },
        { date: "18 Apr, 2023", status: "Pending", type: "Debit", receipt: "AJ72k5KFJS", amount: 150, category: "expenses" },
        { date: "19 Apr, 2023", status: "Complete", type: "Credit", receipt: "ZZ25d5DKDJS", amount: 300, category: "revenue" },
        { date: "20 Apr, 2023", status: "Failed", type: "Debit", receipt: "XY32d5PKS", amount: 200, category: "expenses" },
    ];

    return (
        <section>
            <Header hide />

            <PagesHeader pageTitle="Recent Transactions" />

            {/* Navigation for toggling between categories */}
            <ul className="flex gap-4 p-4 border-b">
                {categories.map((category) => (
                    <li
                        key={category}
                        className={`cursor-pointer text-xs font-bold pb-2 ${
                            active === category ? "text-[#299D91] border-b-2 border-[#299D91]" : "text-[#66666A]"
                        }`}
                        onClick={() => setActive(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                        {/* <p className="capitalize">{category}</p> */}
                    </li>
                ))}
            </ul>

            <TransactionHistoryTable transactions={transactions} activeCategory={active} />
        </section>
    );
};

export default Transactions;
