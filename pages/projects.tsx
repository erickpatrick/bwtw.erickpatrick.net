import BlogHeader from '@/layouts/partials/BlogHeader';
import BlogLayout from '@/layouts/BlogLayout';
import SectionHeader from '@/components/Section/Header';
import Footer from '@/layouts/partials/Footer';
import { SectionData } from '@/components/Sections';
import Sections from '@/components/Sections';

const content: SectionData[] = [
  {
    title: 'RPG do Mestre',
    description:
      "Blog about Roleplaying Games. There I show my skills as game designer, storyteller and writer by keeping Alter Ego, a three-in-one content: RPG System, RPG Scenario and Sci-Fi novel. Apart from that, I also share some of my hand-made drawings, mainly focused in RPG games. There's also a newsletter, called Weekly (guess its periodicy ;D), which I share curated RPG articles from around the world.",
    link: 'https://www.rpgdomestre.com/',
  },
  {
    title: 'Jigsaw + NetlifyCMS template',
    description:
      'This website uses a static site generator called Jigsaw. It also used to use NetlifyCMS, a Git based CMS, to manage the creation, update and delition of contents. As many and many more people are willing to go down the same route I went, I decided to share the setup I used.',
    link: 'https://github.com/erickpatrick/jigsaw-blog-netlify-netlifycms-template',
  },
  {
    title: 'Show subscriber-only publications on Medium (Chrome Extension)',
    description:
      "Though it's not the best code in the world, it does the job. It will paint the background of all the publications on Medium that are subscriber-only. It is not published on the Chrome-store but you can see the code and verify that it does only that and adds nothing to disturb your browsing.",
    link: 'https://github.com/erickpatrick/medium-extension',
  },
];

export default function Projects({ description }: { description: string }) {
  const meta = {
    title: 'Projects',
    description: description,
    categories: [],
    feature: false,
    date: '',
  };
  return (
    <>
      <BlogHeader />
      {content.length === 0 && (
        <BlogLayout meta={meta}>No projects up until now =/</BlogLayout>
      )}

      {content.length !== 0 && (
        <>
          <SectionHeader
            id="all-projects"
            title="Projects"
            subtitle="hands on showcase"
            description="Check the current projects I've been working on. They range from programming related ones to gaming and more."
          />
          <BlogLayout
            meta={{
              title: 'All blog posts',
              description:
                'Here you see a list of all publications, without filter, that I wrote to this blog. Feel free to read and mention them on Twitter.',
              date: '',
              feature: false,
              categories: [],
            }}
          >
            <Sections content={content} />
          </BlogLayout>
        </>
      )}
      <Footer />
    </>
  );
}
