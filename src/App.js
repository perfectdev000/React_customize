import logo from './logo.svg';
import './App.css';
import TheHeader from './components/TheHeader/TheHeader';
import Carousel from 'react-bootstrap/Carousel'
const boxshadow={
  width:'100vh',
  boxShadow: "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
}
function App() {
  return (
    <div className="App">
      <TheHeader login={false}/>
      <header className="App-header" style={{ backgroundColor: "mediumslateblue"}}>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12"  style={{justifyContent:'center', display:'flex', color:'darkblue'}}>
                <img src={logo} className="App-logo" alt="logo"  style={{width:'20rem', height:'30rem', position:'absolute',zIndex:'1'}}/>
              </div>
              <div className="col-12" style={{justifyContent:'center',alignItems:'center', display:'flex'}}>
                <Carousel variant="dark" style={boxshadow}>
                  <Carousel.Item interva={1000}>
                    <img
                      className="d-block w-100"
                      src="1.png"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h5>First slide label</h5>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interva={1000}>
                    <img
                      className="d-block w-100"
                      src="2.png"
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h5>Second slide label</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interva={1000}>
                    <img
                      className="d-block w-100"
                      src="3.png"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h5>Third slide label</h5>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interva={1000}>
                    <img
                      className="d-block w-100"
                      src="4.png"
                      alt="Fourth slide"
                    />
                    <Carousel.Caption>
                      <h5>Fourth slide label</h5>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h5>This is my <b>React</b> exercises.</h5>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
