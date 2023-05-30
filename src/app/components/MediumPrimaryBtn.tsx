import style from "../styles/mediumPrimaryBtn.module.css";

type ButtonProps = {
  text: string;
};

const MediumPrimaryBtn = ({ text }: ButtonProps) => {
  return <button className={style.primaryBtnMedium}>{text}</button>;
};

export default MediumPrimaryBtn;
