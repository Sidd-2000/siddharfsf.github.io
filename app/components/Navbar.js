import React from 'react'
import styles from "@/app/Stylepages/page.module.css"
const Navbar = () => {
  return (
    <div>
      <div class="container-fluid position-absolute custom-margin">
      <div class="row fixed-top">
        <div class="col">
          <nav class="navbar navbar-expand navbar-light bg-light">
            <a href="/" class="navbar-brand">
              <img className={styles.namImages} src="./DreamXpertlogo1.png" />
            </a>
            <ul class="navbar-nav m-sm-auto d-flex ">
              <li class="nav-item">
                <a href="/" class="nav-link ml-3">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ml-3" href="/contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ml-3" href="/about">
                  About Us
                </a>
              </li>
            </ul>
            <form
              class="form-inline search m-auto"
              className={styles.search}
              action=""
            >
              <input
                type="search"
                className={styles.searchInput}
                placeholder="Search"
              />
              <button class="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
            <a
              name=""
              id=""
              class="btn btn-outline-primary"
              href="/AfterLogin/MainPage"
              role="button"
            >
              Continue to GET Team
            </a>
          </nav>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
