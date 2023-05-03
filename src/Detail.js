import { useState,useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom"
import axios from 'axios';
import { AiFillStar } from "react-icons/ai";
import { FaTag } from "react-icons/fa";
import { Nav, Navbar, Container, NavDropdown,Row,Col, Button,Form } from 'react-bootstrap';


function  Detail() {
    let [val ,seta] =useState()
    let [status ,setstatus] =useState(false);
    // let [img ,setimg] =useState([]);
    const[subimg,setsubimg]=useState();


    const {id} = useParams();
  useEffect (() => {
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(function (response) {
          // handle success
          seta(response.data);
        //   setimg(response.data);
          setsubimg(response.data.image);
          // console.log(response.data);
          // console.log(response.data.title);
          setstatus(true);
         })
        .catch(function (error) {
        // handle error
        console.log(error);
        })            
  },[])

  if(status){
    return(
        <>
            <div className="row p-4 pb-0">
                <div className="d-flex">
                    <div className="col-1 border align-items-center">
                        <img src={subimg} className="img d-block pb-2" width='100px'></img>
                     </div>
                  <div className=" p-2 col-5 border">
                    <img src={subimg} width='400px' height='300px' className="m-2"></img>
                    <div className=" m-3 ps-3"><span className="add1 add text-center me-4 h6">ADD TO CART</span><span className="add2 add text-center h6">BUY NOW</span></div>
                    
                  </div>
                  
                  <div className="col-6 p-2">
                    <div className="h5">{val.title}</div>
                    <div className="h4">₹{val.price}</div>
                    <span className="reting">{val.rating.rate}<AiFillStar ></AiFillStar></span><a>494 Ratings & 30 Reviews</a>
                    <span className="h6">Available offers</span>
                    <div className="size"><span className="h6"><FaTag style={{color:'#13BE48'}}></FaTag>Bank Offer</span>10% off on ICICI Bank Credit Cards, up to ₹1,250, on orders of ₹5,000 and above  <span className="textsky ">T&C</span></div>
                    <div className="size"><span className="h6"><FaTag style={{color:'#13BE48'}}></FaTag>Bank Offer</span>10% off on ICICI Bank Credit Card EMI Transactions, up to ₹2,000, on orders of ₹5,000 and above  <span className="textsky ">T&C</span></div>
                    <div className="size"><span className="h6"><FaTag style={{color:'#13BE48'}}></FaTag>Bank Offer</span>10% off on ICICI Bank Debit Card EMI Transactions, up to ₹2,000, on orders of ₹5,000 and above  <span className="textsky ">T&C</span></div>
                    <div className="size"><span className="h6 "><FaTag style={{color:'#13BE48'}}></FaTag>Special PriceGet</span>at flat ₹149T <span className="textsky ">T&C</span></div>
                    <div className=""><span className="h6">Description: </span>{val.description}</div>
                  </div>
                </div>
            </div>
            
        </>
     )
    
     }
     else{
        return(
            <></>
        )
     }
   
}
export default Detail;