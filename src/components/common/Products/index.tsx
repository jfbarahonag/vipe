import ReactOwlCarousel from "react-owl-carousel"

type ProductCardType = {
  imgUrl: string,
  price: String,
  title: string
}
const ProductCard = ({ imgUrl = 'img/product-1.jpg', price, title }: ProductCardType) => (
  <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
    <div className="bg-primary mt-n5 py-3" style={{ width: '80px' }}>
      <h4 className="font-weight-bold text-white mb-0">{`$${price}`}</h4>
    </div>
    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: '150px', height: '150px' }}>
      <img className="rounded-circle w-100 h-100" src={imgUrl} style={{ objectFit: 'cover' }} />
    </div>
    <h5 className="font-weight-bold mb-4">{title}</h5>
    <a href="" className="btn btn-sm btn-secondary">Ordenar Ahora</a>
  </div>
)

import productsData from "../../../../json/products"

const options = {
  autoplay: false,
  smartSpeed: 1500,
  margin: 30,
  dots: false,
  loop: true,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
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
          <h1 className="section-title position-relative mb-5">
            Best Prices We Offer For Ice Cream Lovers
          </h1>
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