import OrdersTable from './_components/OrdersTable';
import { fetchOrders } from '../../../../backend/Actions/actions';
import OrderDetail from './_components/OrderDetail';
import { cartItemType } from '@/Utils/types';

export type orderType = {
  id: string;
  status?: string;
  date: string;
  cartItems?: cartItemType[];
  totalItems?: number;
  totalAmount?: number;
  phoneNumber?: number;
  address?: string;
  name?: string;
  email?: string;
  profileImg?: string;
  role?: string;
};
const page = async () => {
  console.log('ISR page rendering...'); // Log when the page is being rendered

  let orders: orderType[] = [];
  const res = await fetchOrders();

  orders = (res ?? []).map((order) => {
    return {
      id: order.$id,
      date: order.$createdAt,
      totalAmount: order.totalAmount,
      totalItems: order.totalItems,
      cartItems: JSON.parse(order?.cartItems),
      phoneNumber: order.phoneNumber,
      address: order.address,
      name: order.user.username,
      email: order.user.email,
      profileImg: order.user.profileImg,
      role: order.user.role,
      status: order.status,
    };
  });

  console.log('ISR completed for this render.'); // Log when ISR completes for this render

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        {/* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Your Orders</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Introducing Our Dynamic Orders Dashboard for Seamless Management
                and Insightful Analysis.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Create New Order</Button>
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>This Week</CardDescription>
              <CardTitle className="text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from last week
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-05-chunk-2">
            <CardHeader className="pb-2">
              <CardDescription>This Month</CardDescription>
              <CardTitle className="text-4xl">$5,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +10% from last month
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={12} aria-label="12% increase" />
            </CardFooter>
          </Card>
        </div> */}
        <div>
          {orders && <OrdersTable data={orders} />}
          {!orders && (
            <div
              className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm min-h-[380px] min-w-[300px]"
              x-chunk="dashboard-02-chunk-1"
            >
              <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">
                  You have no orders
                </h3>
                <p className="text-sm text-muted-foreground">Right Now !!</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <OrderDetail />
      </div>
    </main>
  );
};
export const revalidate = 60;

export default page;
