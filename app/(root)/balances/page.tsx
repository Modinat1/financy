import BankCards from "@/components/BankCards";
import PagesHeader from "@/components/PagesHeader";
import Header from "@/components/Header";

const Balances = () => {
    return(
       <section>
        <Header hide/>

        <PagesHeader
        pageTitle="Balances"
        />
        
        <BankCards/>
       </section>
    )
}

export default Balances;