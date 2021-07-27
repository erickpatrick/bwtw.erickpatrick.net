type LiParams = {
  children: React.ReactNode;
};

const style = {
  paddingLeft: '0.5rem',
};

export default function Li({ children }: LiParams) {
  return (
    <li className="p-0" style={style}>
      {children}
    </li>
  );
}
