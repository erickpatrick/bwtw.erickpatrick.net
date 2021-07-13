import Link from 'next/link';

type CtaProps = {
  bgColor?: string;
  title?: string;
  description: string;
  buttonText: string;
  url: string;
};

export default function Cta({
  bgColor,
  title,
  description,
  buttonText,
  url,
}: CtaProps) {
  const textColor = bgColor === 'bg-black' ? 'text-white' : 'text-black';
  const buttonColor = bgColor === 'bg-black' ? 'bg-white' : bgColor;
  const buttonTextColor =
    buttonColor === 'bg-black' ? 'text-white' : 'text-black';

  return (
    <div className={`my-12 px-4 py-8 ${bgColor} ${textColor}`}>
      <div className="sm:flex sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto font-thin">
        <div className="sm:w-4/6 mb-8 sm:mb-0">
          <h4 className="text-3xl font-semibold">{title}</h4>
          <p className="text-xl">{description}</p>
        </div>
        <div className="sm:flex sm:w-2/6 justify-end items-center">
          <Link href={url}>
            <a
              className={`inline-block px-2 py-4 ${buttonColor} ${buttonTextColor} font-semibold`}
            >
              {buttonText}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
