import OrdersTable from './_components/OrdersTable';
import { fetchOrders } from '../../../../backend/Actions/actions';
import OrderDetail from './_components/OrderDetail';
import { cartItemType } from '@/lib/types';

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
    <main className="flex flex-col xl:flex-row gap-5">
      <div className="w-full">
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

      <div className="w-full xl:w-auto  xl:min-w-[400px]">
        <OrderDetail />
      </div>
    </main>
  );
};
export const revalidate = 60;

export default page;
