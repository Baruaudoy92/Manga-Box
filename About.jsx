import React from 'react'
import "./about.css";

function About() {
  return (
    <>
    <div class="hero">
      <p>👋 Hello, I am</p>
      <h1>Barua Udoy</h1>
      <h2 class="mb-5">Front-end developer based in France</h2>
      <div>
        <a href="#" class="btn btn-branding">Contact me</a>
      </div>
    </div>
    <p class="text-center m-5">
      Featured Project which my best projects be choice to show -Mangas
    </p>
    <div class="container">
      <div class="row mb-5">
        <div class="col d-none d-lg-block">
          <img src="images/yogurt.png" class="img-fluid" alt="" />
        </div>
        <div class="col">
          <div class="project-desciption">
            <h2 class="mb-5">Home</h2>
            <p class="mb-5 text-muted">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by
            </p>
            <a href="" class="btn btn-branding-outline"> Mangas </a>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col">
          <div class="project-desciption">
            <h2 class="mb-5">Blog</h2>
            <p class="mb-5 text-muted">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by
            </p>
            <a href="" class="btn btn-branding-outline"> Sell your Books </a>
          </div>
        </div>
        <div class="col d-none d-lg-block">
          <img src="images/weather.png" class="img-fluid" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col d-none d-lg-block">
          <img src="images/dictionary.png" class="img-fluid" alt="" />
        </div>
        <div class="col">
          <div class="project-desciption">
            <h2 class="mb-5">Shop</h2>
            <p class="mb-5 text-muted">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by
            </p>
            <a href="http://localhost:3000/mangas" class="btn btn-branding-outline"> Mangas </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About;