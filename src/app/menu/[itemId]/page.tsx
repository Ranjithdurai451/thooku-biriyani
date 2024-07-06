import Link from 'next/link';
import { appwriteConfig, databases } from '../../../../backend/config';
import { MenuItemType } from '@/Utils/types';
import MenuItemOperations from './_components/MenuItemOperations';
export const dynamic = 'force-static';

export const generateStaticParams = async () => {
  const menuItems = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.menuCollectionId
  );

  return menuItems.documents.map((doc) => ({
    itemId: doc.$id,
  }));
};
const ItemPage = async ({ params }: { params: { itemId: string } }) => {
  const { itemId } = params;
  const res = await databases.getDocument(
    appwriteConfig.databaseId,
    appwriteConfig.menuCollectionId,
    itemId
  );

  const item: MenuItemType = {
    id: res.$id,
    ...res,
  };

  return (
    <section className="flex w-full flex-col gap-6 px-5 py-10 pt-[100px] text-white bg-black md:px-16 md:py-15 min-h-dvw">
      <div className="flex items-center gap-2 ">
        <Link
          href="/"
          className="uppercase hover:text-customGreen md:text-[16px] text-[14px]"
        >
          Home
        </Link>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            fill="white"
            className="w-3 h-3"
          >
            <path d="M69.844 43.388L33.842 13.386a6.003 6.003 0 00-7.688 9.223L56.624 48l-30.47 25.39a6.003 6.003 0 007.688 9.223l36.002-30.001a6.01 6.01 0 000-9.223z"></path>
          </svg>
        </span>
        <Link
          href={`/menu/${item?.name}`}
          className="uppercase text-customGreen md:text-[16px] text-[14px]"
        >
          {item?.name}
        </Link>
      </div>
      <MenuItemOperations item={item} />
      <h1 className="text-xl font-bold underline md:text-2xl underline-offset-4 text-customGreen">
        Description
      </h1>
      <div className="font-light text-white">{item?.description}</div>
      <div className="font-light text-white">
        {item?.items?.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      {item?.serves && <p> Serves {item?.serves} people.</p>}
    </section>
  );
};

export default ItemPage;
