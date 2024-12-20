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









