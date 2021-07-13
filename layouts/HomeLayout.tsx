import Meta from '@/components/Meta';

type HomeLayoutParams = {
  size?: string;
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutParams) => {
  return (
    <>
      <Meta />
      <div className="sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 py-8 md:px-0 font-thin">
        {children}
      </div>
    </>
  );
};

export default HomeLayout;
