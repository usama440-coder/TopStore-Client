import style from "../styles/sectionTitle.module.css";

type titleProps = {
  title: string;
};

const SectionTitle = ({ title }: titleProps) => {
  return (
    <div className={style.sectionTitle}>
      <h3>{title}</h3>
    </div>
  );
};

export default SectionTitle;
