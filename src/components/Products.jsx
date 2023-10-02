import React from 'react'
import istock from '../assets/istockphoto.jpg'
import istock2 from '../assets/istockphoto2.webp'
import istock3 from '../assets/istockphoto3.jpg'

const Products = () => {
  return (
    <>
    <div class="container">
        <div class="card">
            <img src={istock} alt=""/>
            <div class="text">Design</div>
            <h4 class="textLink">Lorem ipsum dolor sit amet consectetur elit.</h4>
            <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p class=" conti"><a href="#">Continue reading</a></p>
          </div>

        <div class="card">
            <img src={istock2} alt=""/>
            <div class="text">Design</div>
            <h4 class="textLink">Lorem ipsum dolor sit amet consectetur elit.</h4>
            <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p class=" conti"><a href="#">Continue reading</a></p>
          </div>

        <div class="card">
            <img src={istock3} alt=""/>
            <div class="text">Design</div>
            <h4 class="textLink">Lorem ipsum dolor sit amet consectetur elit.</h4>   
            <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p class="conti"><a href="#">Continue reading</a></p>
          </div>

    </div>
    </>
  )
}

export default Products
