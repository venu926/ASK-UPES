const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Bootstrap demo</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <nav class="navbar bg-dark" data-bs-theme="dark">
        <nav class="navbar navbar-expand bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Sap helper</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about.html">About</a>
                </li>
  
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Topics
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">PLACEMENT</a></li>
                    <li><a class="dropdown-item" href="#">Internship</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                      <a class="dropdown-item" href="#">Mentor for projects</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact.html">Contact Us</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </nav>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="images/UPES_Logo_without_Tagline.jpg"
              class="d-block w-100"
              height="450"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5></h5>
              <p>.</p>
              <button type="button" class="btn btn-primary">Mentor Help</button>
              <button type="button" class="btn btn-secondary">
                Project Help
              </button>
              <button type="button" class="btn btn-success">
                Placement Help
              </button>
              <button type="button" class="btn btn-danger">
                Internship Help
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src=" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="container my-4" >
          <div class="row mb-2">
              <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">support</strong>
                    <h3 class="mb-0">Mentor help</h3>
                    <div class="mb-1 text-muted">Nov 12</div>
                    <p class="card-text mb-auto">Connect to mentor easily for guidance support</p>
                    <a href="#" class="stretched-link">Continue reading</a>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                      <img src="images/mentor.jpeg"class="bd-placeholder-img" width="200" height="250">
                  
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-success">support</strong>
                    <h3 class="mb-0">Internship support</h3>
                    <div class="mb-1 text-muted">Nov 11</div>
                    <p class="mb-auto">Connect for better help for internship updates and guidance</p>
                    <a href="#" class="stretched-link">Continue reading</a>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                      <img src="images/download (1).jpeg"class="bd-placeholder-img" width="200" height="250">
                 
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div class="container my-4" >
          <div class="row mb-2">
              <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">support</strong>
                    <h3 class="mb-0">Project guidance</h3>
                    <div class="mb-1 text-muted">Nov 12</div>
                    <p class="card-text mb-auto">>Connect for better help for internship updates and guidance</p>
                    <a href="#" class="stretched-link">Continue reading</a>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                   <img src="images/project.png"class="bd-placeholder-img" width="200" height="250">
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-success">support</strong>
                    <h3 class="mb-0">Placement guidance</h3>
                    <div class="mb-1 text-muted">Nov 11</div>
                    <p class="mb-auto">>Connect for better help for internship updates and guidance + more on-campus and off-campus opportunity.</p>
                    <a href="#" class="stretched-link">Continue reading</a>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                      <img src="images/placement1.png"class="bd-placeholder-img" width="200" height="250">
                  
                  </div>
                </div>
              </div>
            </div>
      </div>
      <footer class="blog-footer">
          <p>WEBAPP <a href="https://getbootstrap.com/">SAP HELPER</a> by <a href="https://twitter.com/mdo">@TeamCloud</a>.</p>
          <p>
            <a href="#">Back to top</a>
          </p>
        </footer>
    </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
