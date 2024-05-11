import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from "./assets/images/logo.webp";
import "./layoutStyle.css";
import { IoBagHandle } from "react-icons/io5";
function App() {
  const hoten= "Nguyen Phat Dat";
  return (
    <>
    <header className="header">
    <div className="container">
      <div className="row">
      <div className="col-md-2">
        <img className="hinh" src={Logo} alt="logo"/>
      </div>
        <div className="col-md-6"> 
        <nav className="nav nav-pills flex-column flex-sm-row ">
  <a className=" nav-link" href="#">Active</a>
  <a className=" nav-link" href="#">Longer nav link</a>
  <a className=" nav-link" href="#">Link</a>
  <a className=" nav-link " >Disabled</a>
  </nav></div>
        <div className="col-md-2">
             <div class="search-container">
              <input type="text" id="searchInput" placeholder="Tìm kiếm sản phẩm"/>
              </div>
              <IoBagHandle />
        </div>
      </div>
    </div>
    </header>
    <main></main>
    <footer></footer>
    </>
  );
}

export default App;
