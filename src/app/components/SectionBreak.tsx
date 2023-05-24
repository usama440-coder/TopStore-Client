"use client";

import style from "../styles/sectionBreak.module.css";

type SectionBreakProps = {
  heading: string;
  description: string;
};

const SectionBreak = ({ heading, description }: SectionBreakProps) => {
  return (
    <div className={style.sectionBreak}>
      {heading !== "Visit Our Store" ? (
        <h3>{heading}</h3>
      ) : (
        <h2>
          Visit Our <span>Store</span>
        </h2>
      )}
      <p>{description}</p>
      <div></div>
    </div>
  );
};

export default SectionBreak;
