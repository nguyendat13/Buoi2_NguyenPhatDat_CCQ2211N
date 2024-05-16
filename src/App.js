import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from "./assets/images/logo.webp";   
// import Cate1 from "./assets/images/cate_1.webp";
// import Cate2 from "./assets/images/cate_2.webp";
// import Cate3 from "./assets/images/cate_3.webp";
import "./layoutStyle.css";
import { IoBagHandle } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FcAddressBook } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import ProductItem from "./components/ProductItem";
import Slider from "./components/Slider";
import Database from "./data_fake.json";
function App() {
  const hoten= "Nguyen Phat Dat";
  const listproduct=Database.products; 
  return (
    <>
    <body className="web">
    <header className="header">
      <div className="container">
          <div className="row">
          <div className="col-md-1">
            <img className="hinh" src={Logo} alt="logo"/>
          </div>
            <div className="col-md-6"> 
            <nav className="nav nav-pills flex-column flex-sm-row ">
                  <a className=" nav-link" href="#">Active</a>
                  <a className=" nav-link" href="#">Longer nav link</a>
                  <a className=" nav-link" href="#">Link</a>
                  <a className=" nav-link " >Disabled</a>
              </nav></div>
            <div class="search col-md-2"> 
            <CiSearch />
                  <input type="text" id="searchInput" placeholder="Tìm kiếm sản phẩm"/>
            </div>
            <div className="icon col-md-5">
                  <i><FaUser /></i>
                  <i>|</i>
                  <i><IoBagHandle /> </i>
            </div>
        </div>
    </div>
    </header>
    <main>      
         <Slider/>
         <div className="section-cate">
               <h2>Các dòng <br></br> sản phẩm <br></br>nổi bật</h2>
                  {/* <div class="cate-container">
                  <div class="cate1"><img className="cate" src={Cate1} alt="Cate1"/></div>
                  <div class="cate2"><img className="cate" src={Cate2} alt="Cate1"/></div>
                  <div class="cate3"><img className="cate" src={Cate3} alt="Cate1"/></div>
                  </div>
                  <div className="cate-nav">
                     <button type="button" class="prev">&laquo;</button>
                     <button type="button" class="next">&raquo;</button>
                  </div>               */}
         </div> 

         <div class="section-coll">
               <h2 >Bộ sưu tập</h2>
            <div className="container">
               <div className="row">
                  {listproduct.map((ig,pt,index)=>{
                     return(
                        <div className="col-md" key={index}>
                           <ProductItem product={pt} image={ig}/>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>

         <div class="section-blog">
         <h2 >Blog chia sẻ</h2>
   </div>
    </main>
    <footer>
         <div class="container">
            <div class="row">
               <div class="col-sm-4">
               <h2>Thông tin liên hệ</h2>
               <ul>
                  <li><a>Công ty cổ phần OH!Decor</a></li>
                  <li><FcAddressBook /> <a>Tầng 6, Tòa Ladeco, 266 Đội Cấn, Quận Ba Đình, TP Hà Nội</a></li>
                  <li><FaPhoneAlt /> <a href="#">1800.6750</a></li>
                  <li><a>support@sapo.vn</a></li>
               </ul>
               </div>
               <div class="col-sm-4 support">
               <h2>Chăm sóc khách hàng</h2>
               <ul>
                  <li><a ><i class="sup"></i> Thời gian hỗ trợ
                      24/7 không kể ngày lễ</a></li>
                  <li><a ><i class="sup"></i> Hotline: </a>
                  <a href="#">1800.6750</a></li>
               </ul>
               </div>
               <div class="col-sm-4">
               <h2>Hướng dẫn</h2>
               <ul>
                  <li><a href="#">Chính sách mua bán</a></li>
                  <li><a href="#">Hệ thống kiểm duyệt</a></li>
                  <li><a href="#">Chính sách bảo mật</a></li>
                  <li><a href="#">Quy định đối với người bán</a></li>
                  <li><a href="#">Hướng dẫn mua hàng</a></li>

               </ul>
               </div>

               <div class="col-sm-4 social-media">
               <h2>Kết nối</h2>
               <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"><FaFacebookSquare /> </i> Facebook</a></li>
                  <li><a href="#"><i class="fab fa-instagram"><FaSquareInstagram /> </i> Instagram</a></li>
               </ul>
               
               </div>
            </div>
         </div>

         <div class="copyright">
            <p>© Bản quyền thuộc về OH!Team.(Nguyễn Phát Đạt)</p>
         </div>
</footer>

    </body>
    </>
  );
}

export default App;
