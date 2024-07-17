'use client';
import {
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import BreadcrumbNavigation from './BreadcrumbNavigation';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/store';

const MobSideBar = () => {
  const dashboardLinks = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <Home className="h-4 w-4" />,
    },
    {
      name: 'Orders',
      path: '/dashboard/orders',
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    {
      name: 'Menus',
      path: '/dashboard/menus',
      icon: <Package className="h-4 w-4" />,
    },
    {
      name: 'Customers',
      path: '/dashboard/customers',
      icon: <Users className="h-4 w-4" />,
    },
  ];
  const pathname = usePathname();

  const ordersCount = useSelector(
    (state: RootState) => state.dashboard.ordersCount
  );

  return (
    <header className="flex h-[60px] items-center gap-4 border-b border-white border-opacity-40 bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col ">
          <nav className="grid gap-5 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only text-white">Thooku Biriyani</span>
            </Link>

            {dashboardLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary ${
                  pathname === link.path
                    ? 'text-primary bg-muted'
                    : 'text-muted-foreground '
                }`}
              >
                {link.icon}
                {link.name}
                {link.name === 'Orders' && (
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {ordersCount}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>

          {/* <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div> */}
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <BreadcrumbNavigation />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default MobSideBar;
