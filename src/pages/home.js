import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Villanos from './img/villanos.jpg';
import Heroes from './img/heroes.jpg';
import "./acercade.css";

const Home = () => {
    return <>
     <div className='general'>
     <CardGroup>
      <div className='separar'>
      <Card>
        <Card.Img variant="top" src={Villanos} />
        <Card.Body>
          <Card.Title>Villanos</Card.Title>
          <Card.Text>
          DC y Marvel
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='separar'>
      <Card>
        <Card.Img variant="top" src={Heroes} />
        <Card.Body>
          <Card.Title>Heroes</Card.Title>
          <Card.Text>
            Marvel y DC
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </CardGroup>
     </div>
    </>;
  };
  
  export default Home;