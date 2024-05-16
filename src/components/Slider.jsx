import Slider from "../App";
import { CiShoppingCart } from "react-icons/ci";
import Model from "../assets/images/slider_text_image.webp";

const slider = () =>{
    return( 
        <div className="box-model">  
                <div className="box-left">
                <h2 className="line-1 "><b>Nội thất</b> nâng tầm không gian sống</h2>
                <h4 className="line-2 ">Khám phá nội thất thiết kế đương đại mang đến cảm giác thoải mái, sang trọng. 
                Cá nhân hoá trong từng sản phẩm phù hợp với mọi không gian sống.</h4> 
                
                <button type="button" class="btn btn-outline-warning"><CiShoppingCart/>     Mua sắm ngay</button>
                <div class="d-flex text-center">
                    <div class="item"><b class="d-block"><span class="count">15.000</span>+</b>Sản phẩm đa dạng</div>
                    <div class="item"><b class="d-block"><span class="count">10</span>+</b>Hệ thống cửa hàng</div>
                    <div class="item"><b class="d-block"><span class="count">2020</span>+</b>Giải thưởng</div>
                </div>
            </div>
            <div className="box-right">
            <img className="model" src={Model} alt="Model"/>
            </div>  
</div> );
}
export default slider ;