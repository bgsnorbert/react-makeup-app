import ProductCard from "../productCard/ProductCard";

const handleSortByPrice = (items) =>
  items.map((item) => {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={item.id}>
        <ProductCard
          width="10rem"
          img={item.api_featured_image}
          alt={item.name}
          title={item.name}
          description={item.brand}
          price={item.price}
          link={item.id}
        />
      </div>
    );
  });

export default handleSortByPrice;
