import '../Components/NavBar.css';
import CartWidget from './CartWidget';
import Logo from './Logo';
import BotonConsolas from './BotonConsolas';
import BotonJuegos from './BotonJuegos';
import BotonAccesorios from './BotonAccesorios';

function NavBar() {
  return (
    <div className="NavBar">
            <Logo />
            <div className="MenuPadre">
              <BotonConsolas />
              <BotonAccesorios />
              <BotonJuegos />
            </div>
            <CartWidget />
    </div>
  );
}

export default NavBar;