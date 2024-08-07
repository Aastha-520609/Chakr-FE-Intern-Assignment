'use client'
import React from 'react'
import { DataTable } from '@/components/DataTable'
import { ColumnDef } from '@tanstack/react-table'
import PageTitle from "@/components/PageTitle"


type Payment = {
  Name: string;
  DomainName: string;
  AccountOwner : string;
  Employee: number;
  Email: string;
};

const payments: Payment[] = [
  {
    Name: "XYZ",
    DomainName: "ABC",
    AccountOwner: "Aastha",
    Employee: 10,
    Email: "m@example.com",
  },
  {
      Name: "XYZ",
      DomainName: "ABC",
      AccountOwner: "Aastha",
      Employee: 10,
      Email: "m@example.com",
  },
  {
      Name: "XYZ",
      DomainName: "ABC",
      AccountOwner: "Aastha",
      Employee: 10,
      Email: "m@example.com",
  },
  {
      Name: "XYZ",
      DomainName: "ABC",
      AccountOwner: "Aastha",
      Employee: 10,
      Email: "m@example.com",
  },
  {
      Name: "XYZ",
      DomainName: "ABC",
      AccountOwner: "Aastha",
      Employee: 10,
      Email: "m@example.com",
  },
  {
      Name: "XYZ",
      DomainName: "ABC",
      AccountOwner: "Aastha",
      Employee: 10,
      Email: "m@example.com",
  },
];
 
const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "DomainName",
    header: "Domain Name",
  },
  {
    accessorKey: "AccountOwner",
    header: "Account Owner",
  },
  {
      accessorKey: "Employee",
      header: "Employee",
  },
  {
      accessorKey: "Email",
      header: "Email",
  },
];

const Page: React.FC = () => {
    return (
      <div className = "flex flex-col gap-5 w-full">
          <PageTitle title="Companies"/>
          <DataTable columns={columns} data={payments} />
      </div>
    );
  };
  
export default Page;  