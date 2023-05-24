import style from "./page.module.css";

import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import SectionBreak from "./components/SectionBreak";
import Service from "./components/Service";
import ProductCard from "./components/ProductCard";
import Testimonial from "./components/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <SectionBreak
        heading="High Quality, Low Markup"
        description="Here is how we do it!"
      />

      <div className={style.services}>
        <Service icon="delivery" description="Free Delivery" />
        <Service icon="customer" description="Customer Service" />
        <Service icon="payment" description="Secure Payment" />
      </div>

      <SectionBreak heading="Featured Products" description="We Recommend" />

      <div className={style.featuredProducts}>
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

      <SectionBreak
        heading="Testimonials"
        description="What our valuable customers say"
      />
      <div className={style.testimonialsContainer}>
        <Testimonial />
      </div>

      <SectionBreak
        heading="Top Products"
        description="See what people like the most"
      />

      <div className={style.featuredProducts}>
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

      <div
        style={{ backgroundImage: `url(/img/schedule_background.jpg)` }}
        className={style.scheduleContainer}
      >
        <SectionBreak heading="Visit Our Store" description="Opening hours" />
        <div className={style.sheduleOverlay}></div>
        <table>
          <tbody>
            <tr>
              <td>Mon - Fri</td>
              <td>8:00 am - 6:30 pm</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>8:00 am - 6:00 pm</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
