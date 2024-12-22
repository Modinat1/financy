import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import Button from './Button';

const UpComingBillsTable = () => {
    
    const transactions = [
        {id: 1, dueDay: "17 May", dueMonth: "May", logo: "Complete", item_desc: "Credit", desc_title: "figma yearly plan", lats_charge: "BC52d5DKDJS", amount: 250},
        {id: 1, dueDay: "17 May", dueMonth: "May", logo: "Complete", item_desc: "Credit", desc_title: "figma yearly plan", lats_charge: "BC52d5DKDJS", amount: 250},  
    ];

  return (
    <div>
         <Table className="bg-[#ffffff] rounded-lg p-4">
            <TableHeader>
                <TableRow className="font-bold text-md text-black">
                    <TableHead>Due Date</TableHead>
                    <TableHead>Logo</TableHead>
                    <TableHead>Item Description</TableHead>
                    <TableHead>Last Charge</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody className="p-4">
             
            </TableBody>

            <Button text="Load More" className="block mx-auto" />
        </Table>
    </div>
  )
}

export default UpComingBillsTable









