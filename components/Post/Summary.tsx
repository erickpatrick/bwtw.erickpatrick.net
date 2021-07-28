import Section from '@/components/Section';
import Link from 'next/link';
import { Post } from 'types';

export default function PostSummary(key: number, post: Post) {
  return (
    <>
      <Section className="sm:w-1/2 sm:float-left" key={key}>
        <div className="w-full pb-8 sm:p-4">
          <h3
            className="max-w-md lg:max-w-lg text-3xl lg:text-4xl 2xl:text-6xl font-black"
            style={{ marginBottom: 0 }}
          >
            <Link href={post.link}>
              <a className="hover:underline">{post.title}</a>
            </Link>
          </h3>
          <p className="p-0 text-lg italic">
            {new Date(post.date).toDateString()}
          </p>
          <div className="w-full text-xl md:text-2xl xl:text-3xl leading-normal sm:leading-normal md:leading-normal xl:leading-normal">
            <p className="mb-8">{post.description}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
