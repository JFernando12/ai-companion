import { Search } from "lucide-react"
import { Input } from "./ui/input"

export const SearchInput = () => {
  return (
    <div className="relative">
      <Search className="absolute top-3 left-4 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search..." className="pl-10 bg-primary/10" />
    </div>
  )
}