import style from "../styles/productCard.module.css";
import Link from "next/link";

type ProductCardProps = {
  link: string;
  imgRef: string;
  name: string;
  price: string;
};

const ProductCard = ({ link, imgRef, name, price }: ProductCardProps) => {
  return (
    <div className={style.productCard}>
      <Link href={link}>
        <div className={style.productImage}>
          <img src={imgRef} alt="product-1" />
        </div>
        <div className={style.productDescription}>
          <p>{name}</p>
          <p>Rs. {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
