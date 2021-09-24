import Navbar from "components/Navbar";
import Header from "components/Header";
import Categories from "components/Categories";
import Campaigns from "components/Campaigns";
import Favorites from "components/Favorites";
import Mobile from "components/Mobile";
import Cards from "components/Cards";
import Footer from "components/Footer";
import { useWindowWidth } from '@react-hook/window-size'

function App() {
  const onlyWidth = useWindowWidth()
  return (
    <>
      <Navbar/>
      {onlyWidth < 768 && <Campaigns/>}
      <Header/>
      <Categories/>
      {onlyWidth > 768 && <Campaigns/>}
      <Favorites/>
      <Mobile/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default App;
