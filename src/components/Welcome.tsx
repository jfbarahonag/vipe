import Sammy from './../img/sam.jpeg';
import '../css/main.css'

const Welcome = () => {
  return (
    <>
    <div className='wrapper'>
      <h1>Welcome to my App</h1>
      <p>This is going to be the best market place</p>
      <img src={Sammy} alt="Sammy Image" width={200} height={200} />
    </div>
    </>
  )
}

export default Welcome;
