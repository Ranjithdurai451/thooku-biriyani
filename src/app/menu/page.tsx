import { MenuItemType } from '@/Utils/types';
import { appwriteConfig, databases } from '../../../backend/config';
import CategorySelector from './_components/CategorySelector';
export const dynamic = 'force-static';

export const generateMetadata = () => {
  return {
    title: 'ThooKu Biriyani Menu',
    description: 'Best biryani in India',
  };
};
const Menu = async () => {
  let menuItems: MenuItemType[] = [];

  const res = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.menuCollectionId
  );
  menuItems = res.documents.map((doc) => ({
    id: doc.$id,
    ...doc,
  }));

  return (
    <>
      <section className="flex flex-col w-full gap-5 px-5 py-10 overflow-x-hidden overflow-y-auto text-white bg-black pt-[85px] sm:py-15 min-h-dvh">
        <h1 className="md:text-3xl text-2xl font-[900] text-center underline text-customGreen underline-offset-8">
          ThooKu Biriyani Menu
        </h1>
        <CategorySelector menuItems={menuItems} />
      </section>
    </>
  );
};

export default Menu;
