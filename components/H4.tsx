type H4Params = {
  children: React.ReactNode;
};

export default function H4({ children }: H4Params) {
  return <h4 className="italic font-black">{children}</h4>;
}
