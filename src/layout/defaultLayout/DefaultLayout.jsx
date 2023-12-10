import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import Header from "../header";
function DefaultLayout({ children }) {
    return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
    );
}

export default DefaultLayout;
