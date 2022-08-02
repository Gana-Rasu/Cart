import React from "react";

function Navbar() {
  return (
    <>
      <div className="top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/#">
                        All products
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Popular items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <button
                type="button"
                class="btn bg-dark text-light position-relative"
              >
                Cart
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </button>
            </div>
          </div>
        </nav>

        <div className="pagebar">
          <h1>Shop in style</h1>
          <p>With this shop homepage template</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
