type CodeParams = {
  children: React.ReactNode;
  className: any;
};

export default function Code({ children, className }: CodeParams) {
  return <code className="text-white bg-black">{children}</code>;
}
