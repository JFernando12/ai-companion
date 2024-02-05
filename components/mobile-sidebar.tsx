import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Sidebar } from "./sidebar"

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left' className="p-0 bg-secondary w-32 pt-10">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}