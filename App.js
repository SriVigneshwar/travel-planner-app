import logo from './logo.svg';
import './App.css';
import Place from './components/Place'

function App() {
  return (
    <>
    <div class="header-tab">
        <p>Sri Vigneshwar</p>
        <a href="#" class="tab-link">Home</a>
        <a href="#" class="tab-link">About</a>
        <a href="#" class="tab-link">Services</a>
        <a href="#" class="tab-link">Contact</a>
    </div>
    <div className="container">
      <Place name="Ooty" img="ooty.jpg" spots="10" description="Ooty is a gorgeous hill station in Tamil Nadu, and is considered a haven for nature lovers from all the country."/>
      <Place name="Kodaikanal" img="kodaikanal.jpg" spots="7" description="Kodaikanal is one of the very popular holiday destination hill resorts in South India."/>
      <Place name="Goa" img="goa.jpg" spots="11" description="The magical land of Goa is a land of celebrations and festivities. Snuggled in the Konkan Coast Belt, It has a long coastline of approx 100 kilometers."/>
      <Place name="Kashmir" img="kashmir.jpg" spots="15" description="Jammu & Kashmir, a piece of heaven on earth, is the 19th largest state in India and it is located mostly all in the Himalayan mountains"/>
    </div>
    </>
  );
}

export default App;
