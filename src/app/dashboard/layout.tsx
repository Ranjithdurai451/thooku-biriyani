import Link from 'next/link';

import MobSideBar from './_components/MobSideBar';
import NavBar from './_components/NavBar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-dvh w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]  ">
      <div className="hidden border-r border-white border-opacity-40 bg-muted/40 md:block  ">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b border-white border-opacity-40 px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              {/* <Package2 className="h-6 w-6" /> */}
              <span className=" ">Thooku Biriyani</span>
            </Link>
          </div>
          <div className="flex-1">
            <NavBar />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <MobSideBar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6   max-h-[calc(100vh-60px)] overflow-y-auto custom ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default layout;
