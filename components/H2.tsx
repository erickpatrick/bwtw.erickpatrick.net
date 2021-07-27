type H2Params = {
  children: React.ReactNode;
};

export default function H2({ children }: H2Params) {
  return <h2 className="font-black">{children}</h2>;
}
