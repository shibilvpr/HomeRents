import Footer from "../../Compenents/Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import ProductPage from "../Product/ProductPage";
import "./Allpage.css"

function Allpage () {

    return(
<>
<div className="page">
      <Header />
      <Home />
      <ProductPage/>

      <Footer/>
      
    </div>


</>
    )
}
export default Allpage