import classes from './navBar.module.css';

const NavBar = (props) => (
    <div>
        <nav class="navbar">
            <div class="container">
                <a class="navbar-brand" href="/">My Portfolio</a>
                <button type="button" class="mr-2 navbar-toggler">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="d-sm-inline-flex flex-sm-row-reverse collapse navbar-collapse">
                    <ul class="navbar-nav flex-grow">
                        <li class="nav-item"><a class="text-dark nav-link" href="/jobs"><i class="fas fa-user-tie icons"></i>Jobs</a></li>
                        <li class="nav-item"><a class="text-dark nav-link" href="/education"><i class="fas fa-school icons"></i>Education</a></li>
                        <li class="nav-item"><a class="text-dark nav-link" href="/projects"><i class="fas fa-briefcase icons"></i>Projects</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default NavBar;