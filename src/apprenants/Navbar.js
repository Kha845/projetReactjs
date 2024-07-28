import { BrowserRouter as Link } from 'react-router-dom';

function Navbar(){
    return (
    <div>
        <nav class="navbar navbar-expand-lg" style={{"background-color": "orange"}}>
            <div class="container-fluid">
              <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                <ul class="navbar-nav ">
                  <li class="nav-item mx-2">
                    <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/About" className='nav-link'>About</Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
        </div>

    )
}

export default Navbar