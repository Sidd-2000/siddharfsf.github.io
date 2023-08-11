import React from 'react'
import Style from '@/app/Stylepages/AfterLoginMain.css'
import Image from 'next/image'
const page = () => {
  return (
    <>
    <div class='container-fluid'>
      <div className="row">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand text-sm" href="#"><Image className={Style.navbarimg} height={70} width={70} src='/DreamXpertlogo1.png'></Image></a>
    <h3>Hello siddharth</h3>
    <a class = "navbar-logo" href="#"><Image className={Style.navbarimg} height={70} width={70} src='/DreamXpertlogo1.png'></Image></a>
  </div>
</nav>
</div>
    <div className="row mt-5">
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/background.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/fantasy-basketball-club-logo-template-for-sports-team-and-tournament-vector.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
    </>
  )
}

export default page
