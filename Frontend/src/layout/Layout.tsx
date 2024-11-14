import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import RegisterPage from "../pages/RegisterPage";

export default function Layout() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Main />
        <Footer />
        {/* <RegisterPage/> */}
      </div>
    </>
  );
}
