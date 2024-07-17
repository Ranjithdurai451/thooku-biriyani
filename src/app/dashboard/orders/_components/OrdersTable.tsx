'use client';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import { orderType } from '../page';
import { convertDateFormat, formatNumberWithCommas } from '@/Utils/utils';
import { AppDispatch, RootState } from '@/Store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderCount, setSelectedOrder } from '@/Store/Slices/dashboardSlice';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const OrdersTable = ({ data }: { data: orderType[] }) => {
  const selectedOrderId = useSelector(
    (state: RootState) => state.dashboard.selectedOrder.id
  );
  const dispatch: AppDispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  useEffect(() => {
    dispatch(setSelectedOrder(currentItems[0]));
  }, [currentPage]);
  useEffect(() => {
    dispatch(setOrderCount(data.length));
  }, []);
  return (
    <Card x-chunk="dashboard-05-chunk-3">
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden sm:table-cell">Date</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">
                Total Items
              </TableHead>
              <TableHead className="text-right">Total Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((item) => (
              <TableRow
                key={item.id}
                onClick={() => dispatch(setSelectedOrder(item))}
                className={` cursor-pointer ${
                  selectedOrderId === item.id &&
                  'bg-primary/10 hover:bg-primary/10'
                }`}
              >
                <TableCell>
                  <div className="font-medium">{item.name}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {item.email}
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {/* {convertDateFormat(item.date)} */}
                  {convertDateFormat(item.date)}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge
                    className="text-xs"
                    variant={
                      item.status === 'inprocess' || item.status === 'completed'
                        ? 'secondary'
                        : 'outline'
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell text-center">
                  {item.totalItems}
                </TableCell>
                <TableCell className="text-right">
                  ${formatNumberWithCommas(item.totalAmount || 0)}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between mt-4">
          <span>
            Showing {indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, data.length)} of {data.length} products
          </span>
          <div className="flex gap-6 items-center">
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span className="sr-only">Previous Order</span>
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="sr-only">Previous Order</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrdersTable;
