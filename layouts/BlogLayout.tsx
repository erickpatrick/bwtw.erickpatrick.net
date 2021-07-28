import Meta from '@/components/Meta';
import Footer from '@/layouts/partials/Footer';

type BlogLayoutParams = {
  size?: string;
  meta?: {
    title?: string;
    description?: string;
    date?: string;
    categories?: Array<string>;
    feature?: Boolean;
  };
  children: React.ReactNode;
};

export type { BlogLayoutParams };

export default function BlogLayout({ meta, children }: BlogLayoutParams) {
  return (
    <>
      <Meta title={meta?.title ?? 'Blog'} description={meta?.description} />
      <div className="sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto px-4 py-8 md:px-0 font-thin prose-2xl flex flex-wrap">
        {children}
      </div>
    </>
  );
}
