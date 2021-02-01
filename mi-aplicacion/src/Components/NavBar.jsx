import '../Components/NavBar.css';
import CartWidget from './CartWidget';
import Logo from './Logo';
import Consolas from './Consolas';
import Juegos from './Juegos';
import Accesorios from './Accesorios';

function NavBar() {
  return (
    <div className="NavBar">
            <Logo />
            <div className="MenuPadre">
              <Consolas />
              <Accesorios />
              <Juegos />
            </div>
            <CartWidget />
    </div>
  );
}

export default NavBar;