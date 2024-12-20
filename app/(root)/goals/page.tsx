import { BsChevronDown } from "react-icons/bs";
import GoalsBox from "@/components/Goals";

const Goals = () => {
    return(
      <section>

        <div className="bg-[#ffffff] flex justify-between items-center">
          <h3>Savings Goal</h3>
          <div className="flex items-center gap-2 bg-[#F4F4F4] p-2 rounded-sm">
            <p>01 May - 31 May</p> 
            <BsChevronDown/>
          </div>
        </div>

        <GoalsBox/>

      </section>
    )
}

export default Goals;