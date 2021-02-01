import '../Components/NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <div className="NavBar">
            <div className="Menu"><p>Opcion 01</p></div>
            <div className="Menu"><p>Opcion 02</p></div>
            <div className="Menu"><p>Opcion 03</p></div>
            <CartWidget />
    </div>
  );
}

export default NavBar;