import HomeLayout from '@/layouts/HomeLayout';
import HomeHeader from '@/layouts/partials/HomeHeader';
import HomeSkills from '@/components/HomeSkills';
import HomeTools from '@/components/HomeTools';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeLayout>
        <HomeSkills />
      </HomeLayout>
      <Cta
        bgColor="bg-black"
        title="Reach out!"
        url="/contact"
        description="Do you need help with an awesome project of yours or need some of my skills at your company? Come talk to me!"
        buttonText="Contact me now!"
      />
      <HomeTools />
    </>
  );
}
