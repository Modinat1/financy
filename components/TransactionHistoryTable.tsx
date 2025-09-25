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
        <div  className="bg-[#ffffff] rounded-lg p-4">
        <Table>
            <TableHeader >
                <TableRow className="font-bold text-m">
                    <TableHead className='font-extrabold text-[#191919]'>Date</TableHead>
                    <TableHead className='font-extrabold text-[#191919]'>Status</TableHead>
                    <TableHead className='font-extrabold text-[#191919]'>Transaction Type</TableHead>
                    <TableHead className='font-extrabold text-[#191919]'>Receipt</TableHead>
                    <TableHead className='font-extrabold text-[#191919]'>Amount</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((transaction, index) => (
                        <TableRow key={index} className="font-medium text-xs text-[#707073]">
                            <TableCell className='font-extrabold text-[#191919] py-4'>{transaction.date}</TableCell>
                            <TableCell>{transaction.status}</TableCell>
                            <TableCell>{transaction.type}</TableCell>
                            <TableCell>{transaction.receipt}</TableCell>
                            <TableCell className='font-extrabold text-[#191919]'>${transaction.amount.toFixed(2)}</TableCell>
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

        </Table>
            <Button text="Load More" className="text-[#ffffff] block mx-auto mb-3 py-2 px-12" />
        </div>
    );
};

export default TransactionHistoryTable;

