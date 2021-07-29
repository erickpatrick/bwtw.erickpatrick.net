import BlogHeader from '@/layouts/partials/BlogHeader';
import Footer from '@/layouts/partials/Footer';
import BlogLayout from '@/layouts/BlogLayout';
import { BlogLayoutParams } from '@/layouts/BlogLayout';
import { MDXProvider } from '@mdx-js/react';
import Pre from '@/components/Pre';
import Code from '@/components/Code';
import H2 from '@/components/H2';
import H3 from '@/components/H3';
import H4 from '@/components/H4';
import Ul from '@/components/Ul';
import Li from '@/components/Li';
import Image from '@/components/Image';
import Link from '@/components/Link';
import Blockquote from '@/components/Blockquote';

const components = {
  img: function NextImage(props: any) {
    return (
      <Image alt="image alt" {...props} layout="responsive" loading="lazy" />
    );
  },
  h2: H2,
  h3: H3,
  h4: H4,
  ul: Ul,
  li: Li,
  a: Link,
  pre: Pre,
  code: Code,
  blockquote: Blockquote,
};

export default function BlogPage({ meta, children }: BlogLayoutParams) {
  return (
    <>
      <BlogHeader />
      <div className="sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto px-4 py-8 md:px-0">
        <h2 className="text-4xl lg:text-6xl 2xl:text-8xl font-black">
          {meta?.title}
        </h2>
        <p className="p-0 text-base lg:text-xl mb-8 italic">
          {meta.date && new Date(meta?.date).toDateString()}
          {meta?.categories.length
            ? `, in ` + meta?.categories?.join(', ')
            : ``}
        </p>
      </div>
      <BlogLayout meta={meta}>
        <MDXProvider components={components}>{children}</MDXProvider>
      </BlogLayout>
      <Footer />
    </>
  );
}
