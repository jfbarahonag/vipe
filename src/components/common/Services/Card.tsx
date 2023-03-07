import { Link } from "react-router-dom"

interface Image {
  path: string,
  text: string,
}

interface cardData {
  title: string,
  description: string,
  img: Image,
  more: {
    link: string,
    text: string,
  }
}

type cardProps = {
  data: cardData
}

const Card = ({ data }: cardProps) => {
  return (
    <div className="service-item">
      <div className="service-img mx-auto">
        <img 
          src={data.img.path} 
          alt={data.img.text} 
          className="rounded-circle w-100 h-100 bg-light p-3"
          style={{objectFit: 'cover'}}
        />
      </div>
      <div 
        className="position-relative text-center bg-light rounded p-4 pb-5"
        style={{marginTop: '-75px'}}
      >
        <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">
          {data.title}
        </h5>
        <p>{data.description}</p>
        <Link to={data.more.link}
          className="border-bottom border-secondary text-decoration-none text-secondary"
        >
          {data.more.text}
        </Link>
      </div>
    </div> 
  )
}

export default Card