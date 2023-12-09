import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
function DefaultLayout({ children }) {
    return (
    <div>
      <Search/>
      {children}
      <Footer/>
    </div>
    );
}

export default DefaultLayout;
