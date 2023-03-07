import service1 from "../public/img/services/service-1.jpg"
import service2 from "../public/img/services/service-2.jpg"
import service3 from "../public/img/services/service-3.jpg"
import service4 from "../public/img/services/service-4.jpg"

const servicesData = {
  title: 'Best Services We Provide For Our Clients',
  cards: [
    {
      id: 1,
      title: 'Quality Mantain',
      description: 'Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo',
      img: {
        path: service1,
        text: 'Service 1',
      },
      more: {
        link: '/',
        text: 'Learn More'
      }
    },
    {
      id: 2,
      title: 'Individual Approach',
      description: 'Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo',
      img: {
        path: service2,
        text: 'Service 2',
      },
      more: {
        link: '/',
        text: 'Learn More'
      }
    },
    {
      id: 3,
      title: 'Celebration Ice Cream',
      description: 'Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo',
      img: {
        path: service3,
        text: 'Service 3',
      },
      more: {
        link: '/',
        text: 'Learn More'
      }
    },
    {
      id: 4,
      title: 'Delivery To Any Point',
      description: 'Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo',
      img: {
        path: service4,
        text: 'Service 4',
      },
      more: {
        link: '/',
        text: 'Learn More'
      }
    },
  ]
}

export default servicesData;