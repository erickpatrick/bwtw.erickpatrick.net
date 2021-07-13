import Section from '@/components/Section';
import SectionHeader from './Section/Header';

export default function HomeSkills() {
  return (
    <>
      <SectionHeader
        id="skills-of-the-trade"
        title="Expertise"
        subtitle="skills of the trade"
        description="A few of the most important skills in my toolbelt which I've acquired throughout years study and practice"
      />
      {/* e-Commerce Arch & Dev */}
      <Section className="sm:w-1/2 sm:float-left">
        <div className="w-full pb-8 sm:p-4">
          <h3 className="max-w-md lg:max-w-lg text-3xl lg:text-4xl 2xl:text-6xl font-black mb-4">
            e-Commerce
            <br />
            Architecture <span className="font-semibold italic">&amp;</span>
            <br />
            Implementation
          </h3>
          <div className="w-full text-xl md:text-2xl xl:text-3xl leading-normal sm:leading-normal md:leading-normal xl:leading-normal">
            <p className="mb-8">
              Taking the tough decisions for your platform out of the equation.
              I can also get into code and code reviews.
            </p>
          </div>
        </div>
      </Section>

      {/* Headless e-Commerce */}
      <Section className="sm:w-1/2 sm:float-left">
        <div className="w-full pb-8 sm:p-4">
          <h3 className="max-w-md lg:max-w-lg text-3xl lg:text-4xl 2xl:text-6xl font-black mb-4">
            Headless
            <br />
            e-Commerce
            <br />
            Solutions
          </h3>
          <div className="w-full text-xl md:text-2xl xl:text-3xl leading-normal sm:leading-normal md:leading-normal xl:leading-normal">
            <p className="mb-8">
              Going headless shouldn&apos;t drive us crazy. I&apos;ll help you
              leverage the best and avoid the worst of this approach.
            </p>
          </div>
        </div>
      </Section>

      {/* Third Party Systems Integration */}
      <Section className="sm:w-1/2 sm:float-left">
        <div className="w-full pb-8 sm:p-4">
          <h3 className="max-w-md lg:max-w-lg text-3xl lg:text-4xl 2xl:text-6xl font-black mb-4">
            Third Party
            <br />
            Systems
            <br />
            Integration
          </h3>
          <div className="w-full text-xl md:text-2xl xl:text-3xl leading-normal sm:leading-normal md:leading-normal xl:leading-normal">
            <p className="mb-8">
              Let&apos;s ensure all your existing and required systems work
              properly together for optimal results.
            </p>
          </div>
        </div>
      </Section>

      {/* Performance Analysis & Tunning */}
      <Section className="sm:w-1/2 sm:float-left">
        <div className="w-full pb-8 sm:p-4">
          <h3 className="max-w-md lg:max-w-lg text-3xl lg:text-4xl 2xl:text-6xl font-black mb-4">
            Performance
            <br />
            Analysis <span className="font-semibold italic">&amp;</span>
            <br />
            Tunning
          </h3>
          <div className="w-full text-xl md:text-2xl xl:text-3xl leading-normal sm:leading-normal md:leading-normal xl:leading-normal">
            <p className="mb-8">
              Happy customers and a fast shop will make the{' '}
              <abbr title="Return of Ivestiment">RoI</abbr> go through the roof.
              I&apos;ll help you with key metrics to follow.
            </p>
          </div>
        </div>
      </Section>

      <div className="clear-both"></div>
    </>
  );
}
