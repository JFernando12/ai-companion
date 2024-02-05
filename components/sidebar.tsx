'use client'

import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react"
import { usePathname, useRouter } from "next/navigation";


const routes = [
  {
    icon: Home,
    href: '/',
    label: 'Home',
    pro: false,
  },
  {
    icon: Plus,
    href: '/companion/new',
    label: 'Create',
    pro: true,
  },
  {
    icon: Settings,
    href: '/settings',
    label: 'Settings',
    pro: false,
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onNavigation = (href: string, pro: boolean) => {
    router.push(href)
  }

  return (
    <div className='bg-secondary text-primary h-full'>
      <div className="p-1 mt-2">
        <div className='space-y-3'>
          {routes.map((route) => (
            <div onClick={() => onNavigation(route.href, route.pro)} key={route.label} className={cn('rounded-md text-xs text-muted-foreground p-3 flex flex-col items-center gap-y-2 cursor-pointer hover:text-primary hover:bg-primary/10', pathname === route.href && 'text-primary bg-primary/10')}>
              <route.icon className='h-5 w-5' />
              {route.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}