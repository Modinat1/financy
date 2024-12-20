import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) 
    {
    return (
      <main className="relative flex w-full font-inter">

        <div className="hidden md:flex">
          <Sidebar/>
        </div>

          <div className="w-full min-h-screen bg-[#F4F5F7] md:w-[80%] md:ml-[20%] flex flex-col p-4">
          {children}
          </div>

      </main>
    );
  }