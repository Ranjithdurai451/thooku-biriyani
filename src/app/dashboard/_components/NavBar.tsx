'use client';

import { Badge } from '@/components/ui/badge';
import { Home, ShoppingCart, Package, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
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
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
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
              6
            </Badge>
          )}
        </Link>
      ))}
      {/* <Link
        href="/dashboard"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <Home className="h-4 w-4" />
        Dashboard
      </Link>
      <Link
        href="/dashboard/orders"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <ShoppingCart className="h-4 w-4" />
        Orders
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </Link>
      <Link
        href="/dashboard/menus"
        className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
      >
        <Package className="h-4 w-4" />
        Menus
      </Link>
      <Link
        href="/dashboard/customers"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <Users className="h-4 w-4" />
        Customers
      </Link> */}
    </nav>
  );
};

export default NavBar;
