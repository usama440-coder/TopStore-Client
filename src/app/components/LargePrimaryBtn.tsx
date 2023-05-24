import style from "../styles/largePrimaryBtn.module.css";

type ButtonProps = {
  text: string;
};

const LargePrimaryBtn = ({ text }: ButtonProps) => {
  return <button className={style.primaryBtnLarge}>{text}</button>;
};

export default LargePrimaryBtn;
