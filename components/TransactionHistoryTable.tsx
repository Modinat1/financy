import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import Button from './Button';

type Transaction = {
    date: string;
    status: string;
    type: string;
    receipt: string;
    amount: number;
    category: string;
};

type TransactionHistoryTableProps = {
    transactions: Transaction[];
    activeCategory?: string; // Optional
};

const TransactionHistoryTable: React.FC<TransactionHistoryTableProps> = ({ transactions, activeCategory }) => {
    // Filter transactions based on activeCategory if provided
    const filteredTransactions = activeCategory
        ? activeCategory === "all"
            ? transactions
            : transactions.filter((transaction) => transaction.category === activeCategory)
        : transactions;

    return (
        <Table className="bg-[#ffffff] rounded-lg p-4">
            <TableHeader>
                <TableRow className="font-bold text-md text-black">
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Transaction Type</TableHead>
                    <TableHead>Receipt</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody className="p-4">
                {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((transaction, index) => (
                        <TableRow key={index} className="font-medium text-xs text-[#707073]">
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>{transaction.status}</TableCell>
                            <TableCell>{transaction.type}</TableCell>
                            <TableCell>{transaction.receipt}</TableCell>
                            <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={5} className="text-center text-gray-500">
                            No transactions available
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>

            <Button text="Load More" className="block mx-auto" />
        </Table>
    );
};

export default TransactionHistoryTable;

