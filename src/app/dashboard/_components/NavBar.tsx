'use client';
import { Badge } from '@/components/ui/badge';
import { RootState } from '@/Store/store';
import { Home, ShoppingCart, Package, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

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

  const ordersCount = useSelector(
    (state: RootState) => state.dashboard.ordersCount
  );

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
              {ordersCount}
            </Badge>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
