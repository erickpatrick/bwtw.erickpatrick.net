type SectionHeaderParams = {
  id: string;
  subtitle: string;
  title: string;
  description: string;
};

export default function SectionHeader({
  id,
  subtitle,
  title,
  description,
}: SectionHeaderParams) {
  return (
    <>
      <div className="sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto px-4 py-8 md:px-0">
        <div className="py-12 sm:text-center" id={id}>
          <small className="text-lg md:text-xl font-light">{subtitle}</small>
          <h2 className="text-4xl lg:text-6xl 2xl:text-8xl mb-8 font-black">
            <span>{title}</span>
          </h2>
          <p className="text-xl md:text-2xl sm:max-w-lg m-auto font-thin">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
