import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import {
  Building2,
  ReceiptText,
  ListOrdered,
} from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";

const cardData: CardProps[] = [
  {
    label: "Total Companies",
    amount: "600",
    description: "+50 from last month",
    icon: Building2
  },
  {
    label: "Contracts",
    amount: "200",
    description: "+10 from last month",
    icon: ReceiptText
  },
  {
    label: "Service Order",
    amount: "50",
    description: "+5 from last month",
    icon: ListOrdered
  },
  {
    label: "Sales Order",
    amount: "100",
    description: "+10 from last month",
    icon: ListOrdered
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle  title="Dashboard"/>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all
      sm:grid-cols-2 xl:grid-cols-4">
         {cardData.map((d,i)=> (
           <Card key={i}
              amount={d.amount}
              description={d.description}
              icon={d.icon}
              label={d.label}
           />
         ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
       <CardContent>
          <h1>Overview</h1>
          <p>Total No of Companies VS Month</p>
       </CardContent>
       <CardContent>
          <h1>Total No of Active Users</h1>
       </CardContent>
      </section>
    </div>
  );  
}

