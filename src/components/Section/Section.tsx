import css from './Section.module.css';

type SectionProps = {
  title: string;
  children: JSX.Element;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className={css.wrap}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
