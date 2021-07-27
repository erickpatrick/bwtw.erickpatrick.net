type H3Params = {
  children: React.ReactNode;
};

export default function H3({ children }: H3Params) {
  return <h3 className="font-black">{children}</h3>;
}
