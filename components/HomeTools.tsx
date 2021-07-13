import Image from 'next/image';
import SectionHeader from './Section/Header';

export default function HomeTools() {
  const toolsLogos = [
    {
      logo: 'https://res.cloudinary.com/erickpatrick/image/upload/c_pad,h_200,w_200/v1625259460/erickpatrick.net/bw-logo-php',
      key: 'php',
    },
    {
      key: 'magento',
      logo: 'https://res.cloudinary.com/erickpatrick/image/upload/c_pad,h_200,w_200/v1625259459/erickpatrick.net/bw-logo-magento',
    },
    {
      key: 'nodejs',
      logo: 'https://res.cloudinary.com/erickpatrick/image/upload/c_pad,h_200,w_200/v1625259460/erickpatrick.net/bw-logo-nodejs',
    },
    {
      key: 'react',
      logo: 'https://res.cloudinary.com/erickpatrick/image/upload/c_pad,h_200,w_200/v1625259459/erickpatrick.net/bw-logo-react',
    },
    {
      key: 'nextjs',
      logo: 'https://res.cloudinary.com/erickpatrick/image/upload/c_pad,h_200,w_200/v1625259459/erickpatrick.net/bw-logo-nextjs.jpg',
    },
    {
      key: 'sfcc',
      logo: 'https://res.cloudinary.com/erickpatrick/image/upload/c_pad,h_200,w_200/v1625259459/erickpatrick.net/bw-logo-sfcc',
    },
  ];

  return (
    <div className="my-12 px-4">
      <div className="sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto font-thin">
        <SectionHeader
          id="tools-of-the-trade"
          title="Toolbelt"
          subtitle="tools of the trade"
          description="Through the years many tools came and gone, but these are some that stayed with me up until today"
        />
        <div className="flex flex-wrap py-12 sm:max-w-3xl m-auto justify-between items-center">
          {toolsLogos.map(({ logo, key }) => (
            <div className="w-full sm:max-w-max p-4 text-center" key={logo}>
              <Image
                className="flex-none p-4"
                src={logo}
                width="200"
                height="200"
                alt={`logo for ${key}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
