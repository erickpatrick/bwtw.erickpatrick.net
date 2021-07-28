import { ReactNode } from 'react';

export type SectionProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
};

export default function Section({ title, children, className }: SectionProps) {
  return (
    <section className={className}>
      {title && <h3 className="text-3xl">{title}</h3>}
      <div className="sm:flex">{children}</div>
    </section>
  );
}
