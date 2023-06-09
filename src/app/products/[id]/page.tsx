import style from "./productPage.module.css";
import Navbar from "../../components/Navbar";
import SectionTitle from "../../components/SectionTitle";
import { FaStar } from "react-icons/fa";
import MediumPrimaryBtn from "../../components/MediumPrimaryBtn";
import SectionBreak from "../../components/SectionBreak";

const Product = () => {
  return (
    <>
      <Navbar />
      <SectionTitle title="Product" />
      <div className={style.productContainer}>
        <div className={style.productImages}>
          <div className={style.productImagesWrapper}>
            <div className={style.productImagesLarge}>
              <img src="/img/product_1.png" alt="product-1" />
            </div>
            <div className={style.productImagesSmallContainer}>
              <div className={style.productImagesSmall}>
                <img src="/img/product_1.png" alt="product-1" />
              </div>
              <div className={style.productImagesSmall}>
                <img src="/img/product_1.png" alt="product-1" />
              </div>
              <div className={style.productImagesSmall}>
                <img src="/img/product_1.png" alt="product-1" />
              </div>
              <div className={style.productImagesSmall}>
                <img src="/img/product_1.png" alt="product-1" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.productContent}>
          <p>Winter Sweater wool premium fabric</p>
          <p>Rs. 2000/-</p>
          <div className={style.productContentRating}>
            <div>
              <FaStar className={style.ratingIcon} />
              <FaStar className={style.ratingIcon} />
              <FaStar className={style.ratingIcon} />
              <FaStar className={style.ratingIcon} />
              <FaStar className={style.ratingIcon} />
            </div>
            <p>(300 Reviews)</p>
          </div>
          <p className={style.productDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            officiis provident adipisci soluta cum quo ex tenetur iure
            consequatur animi molestiae non numquam atque, perferendis quibusdam
            quia! Doloribus iste nobis accusantium velit, ipsam eos nesciunt
            architecto numquam eveniet aliquam quos libero pariatur ad
            aspernatur cum labore itaque veniam ipsa sequi.
          </p>
          <div className={style.line}></div>
          <div className={style.productContentBtn}>
            <div className={style.quantityBtn}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <MediumPrimaryBtn text="Shop Now" />
          </div>
          <p>
            <b>Category: </b>Women Clothing
          </p>
        </div>
      </div>
      <SectionBreak
        heading="Customer Reviews"
        description="What others think about this product"
      />
      <div className={style.reviewsContainer}>
        <div className={style.userReviews}>
          <h3 className={style.userReviewsHeading}>User Reviews</h3>
          <div className={style.userReviewsContent}>
            <div className={style.reviewBox}>
              <div>
                <h4>John Doe</h4>
                <div>
                  <FaStar className={style.ratingIcon} />
                  <FaStar className={style.ratingIcon} />
                  <FaStar className={style.ratingIcon} />
                  <FaStar className={style.ratingIcon} />
                  <FaStar className={style.ratingIcon} />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus, illo.
              </p>
            </div>
            <div className={style.reviewBox}>
              <div>
                <h4>John Doe</h4>
                <div>
                  <FaStar className={style.ratingIcon} />
                  <FaStar className={style.ratingIcon} />
                  <FaStar className={style.ratingIcon} />
                  <FaStar className={style.ratingIcon} />
                  <FaStar className={style.ratingIcon} />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus, illo.
              </p>
            </div>
            <div className={style.reviewBox}>
              <div>
                <h4>John Doe</h4>
                <div>
                  <FaStar className={style.ratingIcon} />
                  <FaStar className={style.ratingIcon} />
                  <FaStar className={style.ratingIcon} />
                  <FaStar className={style.ratingIcon} />
                  <FaStar className={style.ratingIcon} />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus, illo.
              </p>
            </div>
          </div>
        </div>
        <div className={style.reviewsForm}>
          <h3 className={style.userReviewsHeading}>Add Review</h3>
          <form className={style.reviewForm}>
            <div>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <FaStar className={style.ratingIcon} />
              <FaStar className={style.ratingIcon} />
              <FaStar className={style.ratingIcon} />
              <FaStar className={style.ratingIcon} />
              <FaStar className={style.ratingIcon} />
            </div>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your Review"
            ></textarea>
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
