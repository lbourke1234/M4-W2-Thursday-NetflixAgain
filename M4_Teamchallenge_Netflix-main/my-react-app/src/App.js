import "./App.css";
import MyNav from "./components/MyNav";
import HeadingNavbar from './components/HeadingNavbar'
import MyCarousel from "./components/MyCarousel";
import MyFooter from './components/MyFooter'

function App() {
  return (

    <div className="dark-netflix">
      <MyNav />
      <HeadingNavbar />
      <MyCarousel heading="Harry Potter" movie="Harry Potter" />
      <MyCarousel heading="James Bond" movie="James Bond" />
      <MyCarousel heading="The Lord of the Rings" movie="The Lord of The Rings" />
      <MyFooter />

    </div>
  );
}

export default App;



