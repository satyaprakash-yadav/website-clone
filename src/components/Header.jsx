import React from 'react'

const Header = () => {
  return (
    <>
    <p id='para'>Visit our online shop for the latest merchandise and products for sale <b><u><a style={{ marginLeft: "15px" }} href="#para">Visit the shop</a></u></b></p>
    <nav>
        <NavContent />
    </nav>
    </>
  )
}

const NavContent = () =>(
    <>
      <img decoding="async" id='img1' src="https://avada.website/digital-agency/wp-content/uploads/sites/160/2021/08/logo.svg" srcSet="https://avada.website/digital-agency/wp-content/uploads/sites/160/2021/08/logo.svg 1x" retina_url="" className="img-responsive fusion-standard-logo disable-lazyload" alt="Digital Agency Logo" />

    <div>
        <a href="#home">Home</a>
        <a href="#studio">The Studio</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#products">Products</a>
        <a href="#magazine">The Magazine</a>
        <a href="#contact"><button>Contact Us</button></a>
    </div>
    </>
)

export default Header
