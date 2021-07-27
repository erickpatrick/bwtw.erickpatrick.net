type UlParams = {
  children: React.ReactNode;
};

const style = {
  paddingLeft: '4rem',
};

export default function Ul({ children }: UlParams) {
  return (
    <ul className="list-disc" style={style}>
      {children}
    </ul>
  );
}
