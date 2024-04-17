import React from 'react'
import log from '../../assets/images/icons/logo-sm.png'
import search from '../../assets/images/icons/search-icon-sm.png'
import cart from '../../assets/images/icons/cart-sm.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=" malede nav-wrapper fixed-top">
    <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                ☰
            </button>
          <li className='malede'>  <Link className="navbar-brand mx-auto" to={"/main"}><img src={log}/></Link></li>

            <div className="navbar-collapse collapse">
                    <ul className="navbar-nav nav-justified w-100 nav-fill">
                        {/* <HeaderLink url="/mac" name="Mac" />
                        <HeaderLink url="/mac" name="iphone" />
                        <HeaderLink url="/mac" name="ipad" />
                        <HeaderLink url="/mac" name="watch" />
                        <HeaderLink url="/mac" name="tv" />
                        <HeaderLink url="/mac" name="Music" />
                        <HeaderLink url="/mac" name="Support" /> */}
                       
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/mac/">Mac</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/iphone">iphone</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/ipad">ipad</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/watch">watch</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/tv">tv</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/Music">Music</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/Support">Support</Link></li>
                <li className="nav-item" ><Link className="nav-link js-scroll-trigger" to='/search'><img src={search}/></Link></li>
                    <li className="nav-item"><Link  className="nav-link js-scroll-trigger" to="/cart"><img src={cart}/></Link></li>
                </ul>
            </div>
        </nav>
    </div>
</div>
  )
}

export default Nav