import React from 'react'
import '../style/nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <nav>
            <div className="logo">
<h1>WEB DEVLOPER</h1>

</div>
            <div className="navInner">

<ul className="Ulnav" >
<Link className="LinkNav" to="/" > HOME</Link>
{/* <Link className="LinkNav" to="/More details">MORE</Link> */}
</ul>

            </div>


        </nav>
    )
}

export default Nav
