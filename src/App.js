import Products from './components/products/Products.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footter from './components/footter/Footter.jsx';


export default function App(){
  return (
    <>
<Navbar />
<Products />
<Footter />

<p style={{color :'black',fontFamily :'sans-serif', fontSize:'25px',textAlign:'center'}} className=" alert alert-danger  " >Thara' Jehad Shehadeh </p>
</>
  );
}