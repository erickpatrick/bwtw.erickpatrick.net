type BlockquoteParams = {
  children: React.ReactNode;
  className: any;
};

export default function Blockquote({ children, className }: BlockquoteParams) {
  return (
    <blockquote className="border-l-4 border-black ">{children}</blockquote>
  );
}
