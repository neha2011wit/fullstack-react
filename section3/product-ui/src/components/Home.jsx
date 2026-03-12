import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import products from "../data/products";

export default function Home() {
  return (
    <div className="home-container">
     <PageHeading   title="Explore My Products!">
         <p className="page-heading-paragraph">
          Add a touch of creativity to your space with our wide range of fun and
        unique products. Perfect for any occasion!
         </p>
     </PageHeading>
     <ProductListings products={products} />
    </div>
  );
}