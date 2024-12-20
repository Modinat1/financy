import BankCards from "@/components/BankCards";
import PagesHeader from "@/components/PagesHeader";

const Balances = () => {
    return(
       <section>

        <PagesHeader
        pageTitle="Balances"
        />
        
        <BankCards/>
       </section>
    )
}

export default Balances;