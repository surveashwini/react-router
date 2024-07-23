import { Outlet, NavLink } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumb";
const AppLayout = () => {
    return <div className="root-layout">
        <header>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='help'>Help</NavLink>
                <NavLink to='careers'>Careers</NavLink>
            </nav>
            <Breadcrumbs />
        </header>
       <main>
        <Outlet> </Outlet>
       </main>
    </div>
}
 
export default AppLayout;