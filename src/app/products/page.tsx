import style from "./productsPage.module.css";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <>
      <Navbar />
      <SectionTitle title="Products" />
      <div className={style.productsContainer}>
        <div className={style.productsHeader}>
          <input type="text" placeholder="Search Product" />
          <p>Showing 9/50 Products</p>
          <select name="" id="">
            <option value="default">default</option>
            <option value="default">low to high</option>
            <option value="default">hight to low</option>
          </select>
        </div>

        <div className={style.categoriesSection}>
          <div className={style.categoriesSectionLinks}>
            <h4>Category</h4>
            <Link className={style.link} href="/products">
              Men Clothing
            </Link>
            <Link className={style.link} href="/products">
              Women Clothing
            </Link>
            <Link className={style.link} href="/products">
              Bags
            </Link>
            <Link className={style.link} href="/products">
              Fragrances
            </Link>
            <Link className={style.link} href="/products">
              Wallet
            </Link>
          </div>
          <div className={style.categoriesSectionPrice}>
            <h4>Search by Price</h4>
            <input className={style.priceSlider} type="range" />
          </div>
        </div>

        <div className={style.productsList}>
          <ProductCard
            link="/products/654"
            imgRef="/img/product_1.png"
            name="Blue Sweater"
            price="2000"
          />
          <ProductCard
            link="/"
            imgRef="/img/product_1.png"
            name="Blue Sweater"
            price="2000"
          />
          <ProductCard
            link="/"
            imgRef="/img/product_1.png"
            name="Blue Sweater"
            price="2000"
          />
          <ProductCard
            link="/"
            imgRef="/img/product_1.png"
            name="Blue Sweater"
            price="2000"
          />
          <ProductCard
            link="/"
            imgRef="/img/product_1.png"
            name="Blue Sweater"
            price="2000"
          />
          <ProductCard
            link="/"
            imgRef="/img/product_1.png"
            name="Blue Sweater"
            price="2000"
          />
          <ProductCard
            link="/"
            imgRef="/img/product_1.png"
            name="Blue Sweater"
            price="2000"
          />
          <ProductCard
            link="/"
            imgRef="/img/product_1.png"
            name="Blue Sweater"
            price="2000"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
