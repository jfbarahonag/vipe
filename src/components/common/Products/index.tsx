import ReactOwlCarousel from "react-owl-carousel"

import ProductCard from "./Card"

import productsData from "../../../../json/products"

const options = {
  autoplay: false,
  smartSpeed: 1500,
  margin: 30,
  dots: false,
  loop: true,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left owl-prev" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right owl-next" aria-hidden="true"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    }
  }
}

const Products = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="section-title position-relative mb-5">
              Best Prices We Offer For Ice Cream Lovers
            </h1>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0" />
        </div>
        <div className="row">
          <div className="col-12">
            <ReactOwlCarousel
              className="owl-carousel product-carousel"
              {...options}
            >
              {
                productsData.map(({ id, ...data }) => (
                  <ProductCard
                    key={id}
                    {...data}
                  />
                ))
              }
            </ReactOwlCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products