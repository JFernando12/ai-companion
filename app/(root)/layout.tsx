import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="fixed mt-16 w-20 hidden md:flex flex-col inset-y-0">
        <Sidebar />
      </div>
      <main className='md:pl-20 pt-16 h-full'>
        {children}
      </main>
    </div>
  )
}

export default RootLayout;