import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {  FaFacebookF,FaTwitter,FaGooglePlusG,FaLinkedinIn,FaBehance} from "react-icons/fa";
import { Nav, Navbar, Container, NavDropdown,Row,Col, Button,Form } from 'react-bootstrap';
import { FaAngleDown,FaShoppingCart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { amount } from './app/counter/CounterSlice';
import { useSelector, useDispatch,dispatch} from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Products() {
    
        const [char,setchar] = useState([]);
        const [search,searchdata] = useState([]);
        const count = useSelector((state) => state.counter.value)
        const dispatch = useDispatch()
        useEffect (()=>{
          axios.get('https://fakestoreapi.com/products')
        .then(function (response) {
          // handle success
          setchar(response.data)
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })            
        },[])

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const categorydata = (category)=>{
          axios.get(`https://fakestoreapi.com/products/category/${category}`)
          .then(function (response) {
            // handle success
            setchar(response.data.products)
            console.log(response.data.products);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })  
        }
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className='headercolor'>
      <Container>
     
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{}}>
          <Button variant="primary" onClick={handleShow} className='ms-4' style={{fontSize:'16px',backgroundColor:'black'}}>
            category
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Product</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Button onClick={()=>categorydata("jewelery")} className='me-2'>jewelery</Button>
              <Button onClick={()=>categorydata("men's clothing")} className='me-2'>laptops</Button>
              <Button onClick={()=>categorydata("women's clothing")} className='me-2'>skincare</Button><br></br><br></br>
             
            </Offcanvas.Body>
          </Offcanvas>
          <Navbar.Brand href="#home" style={{color:'white',fontSize:'20px'}}>PRODUCT</Navbar.Brand>
          </Nav>
          <Nav>
         
            <h1><input type='search'className='me-2 rounded-3' onChange={(e)=>{searchdata(e.target.value)}}style={{width:'350px',height:'40px',fontSize:'16px'}} ></input></h1>
            <Button variant="outline-success" className=' me-5 mt-3' onChange={(e)=>{searchdata(e.target.value)}} style={{backgroundColor:'white',color:'black',width:'70px',height:'35px',fontSize:'16px'}}>Search</Button>
            <Nav.Link href='/'className='pt-3' style={{color:'white',fontSize:'15px'}}>HOME</Nav.Link>
            <Nav.Link href='about' className='pt-3' style={{color:'white',fontSize:'15px'}}>ABOUT</Nav.Link>
            <Nav.Link href="events" className='pt-3' style={{color:'white',fontSize:'15px'}}>MORE<FaAngleDown></FaAngleDown></Nav.Link>
            <Nav.Link href="" className='pt-3 me-4' style={{color:'white',fontSize:'15px'}}><FaShoppingCart></FaShoppingCart>CART</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='container'>
    <div className='row'>
    {
      char.map((a) => {
        return (
          <>            
            <div className="col-3 mb-2">
            <Link to={`/Detail/${a.id}`} onClick={()=>dispatch(amount(a.id))}><img src={a.image} className="img-fluid rounded boder p-3 mb-3" style={{width:'240px',height:'250px'}}></img></Link>
            <h6><span className='fw-bold' style={{color:'grey'}}>Title:-</span>{a.title}</h6>
            <h6><span className='rounded' style={{color:'white',backgroundColor:'green',padding:'2px',fontSize:'12px'}}>{a.rating.rate}<AiFillStar></AiFillStar></span></h6>
            <h6><span className='h5 fw-bold'>₹{a.price}</span></h6>            
            <h6><span className='fw-bold' style={{color:'grey'}}>category:-</span>{a.category}</h6>
            <Link to={`/Detail/${a.id}`} className='shop fw-bold'style={{backgroundColor:'black',color:'white',margin:'5px'}}>shop now</Link>
            </div> 
          </>  
        );
      })
    }
    </div>
    </div>
    <div>
     <div className=' text-white text-center py-5' style={{backgroundColor:'black'}}>
         <Container>
             <Row>
                 <div className='d-flex'>
                     <Col><FaFacebookF className='my-3 mx-3 f_1'></FaFacebookF>
                     <FaTwitter className='my-3 mx-3 f_1'></FaTwitter>
                     <FaGooglePlusG className='my-3 mx-3 f_1'></FaGooglePlusG>
                    <FaLinkedinIn className='my-3 mx-3 f_1'></FaLinkedinIn>
                     <FaBehance className='my-3 mx-3 f_1'></FaBehance></Col>
                 </div>
                 <p className='py-3 fs-5'>All Right Reserved © 2021<span> Products</span></p>
             </Row>
         </Container>
     </div>
 </div>
    </div>
    
    );
 
}

  export default Products;