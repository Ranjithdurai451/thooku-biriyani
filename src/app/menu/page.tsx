import CategorySelector from './_components/CategorySelector';

const Menu = () => {
  return (
    <>
      <section className="flex flex-col w-full gap-5 px-5 py-10 overflow-x-hidden overflow-y-auto text-white bg-black pt-[85px] sm:py-15 min-h-dvh">
        <h1 className="md:text-3xl text-2xl font-[900] text-center underline text-customGreen underline-offset-8">
          ThooKu Biriyani Menu
        </h1>
        <CategorySelector />
      </section>
    </>
  );
};

export default Menu;
