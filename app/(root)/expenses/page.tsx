import StatisticsBarchart from "@/components/BarChart";
import Header from "@/components/Header";
import Image from 'next/image'
import { GoArrowRight } from "react-icons/go";

const Expenses = () => {

    const expenses = [
        {
         id: 1,
         title: 'Housing',
         percentage: 15,
         price: 250,
         icon: "/icons/Housing.svg",
         date: "17 May 2023",
         breakdown: [
            {
                title: "House rent",
                price: 230
            },
            {
                title: "parking",
                price: 20
            },
         ]
        },

        {
        id: 2,
        title: 'Food',
        percentage: 0.8,
        price: 350,
        icon: "/icons/Food.svg",
        date: "17 May 2023",
        breakdown: [
           {
               title: "Grocery",
               price: 230
           },
           {
               title: "restaurant bill",
               price: 120
           },
        ]
        },

        {
        id: 3,
        title: 'Transportation',
        percentage: 12,
        price: 50,
        icon: "/icons/Transport.svg",
        date: "17 May 2023",
        breakdown: [
           {
               title: "taxi fare",
               price: 30
           },
           {
               title: "metro card bill",
               price: 20
           },
        ]
        },

        {
        id: 4,
        title: 'Entertainment',
        percentage: 15,
        price: 80,
        icon: "/icons/Movie.svg",
        date: "17 May 2023",
        breakdown: [
           {
               title: "Movie ticket",
               price: 30
           },
           {
               title: "iTunes",
               price: 50
           },
        ]
        },

        {
        id: 5,
        title: 'Shopping',
        percentage: 25,
        price: 420,
        icon: "/icons/Shopping.svg",
        date: "17 May 2023",
        breakdown: [
           {
               title: "shirt",
               price: 230
           },
           {
               title: "Jeans",
               price: 190
           },
        ]
        },

        
        {
        id: 6,
        title: 'Others',
        percentage: 23,
        price: 650,
        icon: "/icons/Others.svg",
        date: "17 May 2023",
        breakdown: [
           {
               title: "donation",
               price: 30
           },
           {
               title: "gift",
               price: 20
           },
        ]
        },
       
    ]

    return(
        <section>
            <Header hide/>
        <StatisticsBarchart/>

        {/* expenseBreakdown begins */}
        <div className="my-3">    
        <h3 className='text-[#919191] text-lg mb-2'>Expenses Breakdown</h3>
        
        {/* <div className="rounded-lg"> */}
        <div className='md:grid grid-cols-3 grid-rows-2 gap-5'>
        {expenses.map((expense) => {

            const {id, title, percentage, price, icon, date, breakdown} = expense

            return(
            <div key={id} className="mb-5 md:mb-0"> 
            
            <div className="bg-[#E8E8E8] rounded-t-lg p-4 flex justify-between items-center">
                {/* first column */}
                <div className="flex gap-2">

                <div className="bg-[#D1D1D1] rounded-lg p-2">
                <Image
                src={icon}
                width={30}
                height={30}
                alt={title}
                />
                </div>

                <div>
                <h3 className="text-[#979797] capitalize">{title}</h3> 
                <p className="font-extrabold text-[#191919]">${price}.00</p>
                </div>

                </div>
                {/* first column */}

                {/* second column */}
                <div className="text-right">
                <p className='text-[#9F9F9F] text-xs'>{percentage}%*</p>
                <p className='text-xs text-[#9F9F9F]'>Compare to last month</p>
                </div>
                {/* second column */}

            </div>
            <div>
            {breakdown.map((item, index) => {
  return (
    <div
      className="bg-[#ffffff] p-4 flex justify-between items-center border-b border-gray-200 last:border-none"
      key={index}
    >
      <h3 className="text-[#6C6C70] capitalize font-bold">{item.title}</h3>

      <div>
        <h3 className="text-[#6C6C70] font-bold">${item.price}</h3>
        <p className="text-[#BFBFBF] text-xs">{date}</p>
      </div>
    </div>
  );
})}

            </div>
            
            </div>
            )
        })}

{/* </div> */}
       
        </div>

        </div>

        </section>
    )
}

export default Expenses;