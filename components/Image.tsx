import Image from 'next/image';

export default function MyImage(props: any) {
  return (
    <Image
      className="flex-none p-4 aspect-w-16 aspect-h-9"
      {...props}
      width="300"
      height="300"
      alt={``}
    />
  );
}
