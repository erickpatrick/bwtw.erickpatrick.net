import BlogHeader from '@/layouts/partials/BlogHeader';
import BlogLayout from '@/layouts/BlogLayout';
import { BlogLayoutParams } from '@/layouts/BlogLayout';

export default function BlogPage({ meta, children }: BlogLayoutParams) {
  return (
    <>
      <BlogHeader />
      <BlogLayout meta={meta}>{children}</BlogLayout>
    </>
  );
}
