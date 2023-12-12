import Footer from "../footer/Footer";
import Header from "../header";

function DefaultLayout({ children }) {
    return (
    <div>
      <Header/>
      <div className="container">
        {children}
      </div>
      <Footer/>
    </div>
    );
}

export default DefaultLayout;
