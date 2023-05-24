import style from "../styles/service.module.css";
import { FaTruck, FaHeadphonesAlt, FaShieldAlt } from "react-icons/fa";

type ServiceProps = {
  icon: string;
  description: string;
};

const Service = ({ icon, description }: ServiceProps) => {
  return (
    <div className={style.serviceContainer}>
      {icon === "delivery" ? (
        <FaTruck className={style.serviceIcon} />
      ) : icon === "customer" ? (
        <FaHeadphonesAlt className={style.serviceIcon} />
      ) : (
        <FaShieldAlt className={style.serviceIcon} />
      )}
      <p>{description}</p>
    </div>
  );
};

export default Service;
