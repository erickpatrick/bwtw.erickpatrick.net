type PreParams = {
  children: React.ReactNode;
  className: any;
};

export default function Pre({ children, className }: PreParams) {
  return (
    <pre
      style={{ margin: '0 !important' }}
      className="text-white bg-black w-full p-4 overflow-auto"
    >
      {children}
    </pre>
  );
}
