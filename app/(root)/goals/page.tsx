import { BsChevronDown } from "react-icons/bs";
import GoalsBox from "@/components/Goals";
import Header from "@/components/Header";
import Charts from "@/components/Charts";
import Button from "@/components/Button";
import { CiEdit } from "react-icons/ci";
import ArearChartComp from "@/components/AreaChart";
import ExpensesGoalsCategory from "@/components/ExpensesGoalsCategory";
import PagesHeader from "@/components/PagesHeader";

const Goals = () => {
    return(
      <section>
        <Header hide/>
        <PagesHeader pageTitle="Goals"/>
        <div className="md:grid grid-cols-3 gap-4">
        {/* First column */}
        <div className="bg-[#ffffff] rounded-lg p-4 col-span-1">

        <div className="flex justify-between items-center pb-3 border-b">
          <h3 className="text-[#525256] text-md font-bold">Savings Goal</h3>
          <div className="flex items-center gap-2 bg-[#F4F4F4] p-2 rounded-sm">
            <p>01 May - 31 May</p> 
            <BsChevronDown/>
          </div>
        </div>

        <div className="flex justify-between items-center mt-3">
        
        <div>
        <GoalsBox/>
        </div>
        <Charts/>
        </div>

      <Button text='Adjust Goal' icon={<CiEdit color="#47ABA0" size={20}/>} className="block font-bold text-[#47ABA0] border-2 border-[#47ABA0] bg-transparent px-8 py-2 mx-auto"/>
        </div>
        {/* First column */}

        {/* Second column */}
        <div className="col-span-2">
        <ArearChartComp/>
        </div>
        {/* Second column */}
        </div>

        
        <ExpensesGoalsCategory/>

      </section>
    )
}

export default Goals;