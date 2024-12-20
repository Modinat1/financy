import Header from "@/components/Header";
import TotalBalance from "@/components/TotalBalance";
import RecentTransactions from "@/components/RecentTransactions";
import Statistics from "@/components/Statistics";
import ExpenseBreakdown from "@/components/ExpenseBreakdown";


const Home = () => {
    return(
        <>
        <main>
            <Header/>

            <section className="md:grid grid-cols-3 gap-3 items-center">

            <TotalBalance title="Total Balance" price={240399}/>
            <TotalBalance title="Goals" price={20000}/>
            <TotalBalance title="Upcoming Bills"/>

            </section>

            
            <section className="grid grid-rows-2 grid-cols-5 my-5 gap-4">

            <div className="col-span-2 row-span-3"> <RecentTransactions /> </div>

            <div className="col-span-3"> <Statistics /> </div>

            <div className="row-span-2 col-span-3"> <ExpenseBreakdown /> </div>
            
            </section>

        </main>
        </>
    )
}

export default Home;