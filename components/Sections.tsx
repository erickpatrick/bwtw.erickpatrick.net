import Section from '@/components/Section';
import Link from 'next/link';
import { ReactElement } from 'react';

export type SectionData = {
  title: string;
  description: string;
  link: string;
};

type SectionsProps = {
  content: SectionData[];
};

export default function Sections({ content }: SectionsProps): any {
  return content.map(({ title, description, link }, key) => (
    <Section key={key}>
      <div className="w-full pb-8">
        <h3 className="text-3xl lg:text-4xl 2xl:text-6xl font-black mb-4">
          <Link href={link}>
            <a className="underline">{title}</a>
          </Link>
        </h3>
        <div className="w-full text-xl md:text-2xl xl:text-3xl leading-normal sm:leading-normal md:leading-normal xl:leading-normal">
          <p className="mb-8">{description}</p>
        </div>
      </div>
    </Section>
  ));
}
