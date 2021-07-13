import BlogHeader from '@/layouts/partials/BlogHeader';
import BlogLayout from '@/layouts/BlogLayout';
import { Post, Posts } from 'types';
import PostSummary from '@/components/Post/Summary';
import SectionHeader from '@/components/Section/Header';
import Footer from '@/layouts/partials/Footer';

const content: Posts = require('./posts.json');

export default function Blog({ description }: { description: string }) {
  const meta = { title: 'Blog', description: description };
  return (
    <>
      <BlogHeader />
      {content.posts.length === 0 && (
        <BlogLayout meta={meta}>No posts until now =/</BlogLayout>
      )}

      {content.posts.length !== 0 && (
        <>
          <SectionHeader
            id="all-posts"
            title="Publications"
            subtitle="from my experience"
            description="Here you see a list of all publications, without filter, that I wrote to this blog. Feel free to read and mention them on Twitter."
          />
          <BlogLayout
            meta={{
              title: 'All blog posts',
              description:
                'Here you see a list of all publications, without filter, that I wrote to this blog. Feel free to read and mention them on Twitter.',
            }}
          >
            {content.posts.map((post: Post, key: number) => {
              return PostSummary(key, post);
            })}
          </BlogLayout>
        </>
      )}
      <Footer />
    </>
  );
}
