import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";

const font = Poppins({
  weight: '600',
  subsets: ['latin']
});

export const Navbar = () => {
  return (
    <div className='fixed h-16 w-full flex justify-between items-center px-4 py-2 bg-secondary border-b border-primary/10'>
      <div className='flex items-center'>
        <MobileSidebar />
        <Link href='/'>
          <h1 className={cn('hidden md:block font-bold text-xl md:text-3xl text-primary', font.className)}>
            companiion.ia
          </h1>
        </Link>
      </div>
      <div className='flex items-center gap-x-3'>
        <Button variant='premium' size='sm'>
          Upgrade
          <Sparkles className='h-4 w-4 fill-white ml-2' />
        </Button>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  )
}