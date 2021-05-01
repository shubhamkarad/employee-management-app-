import React, { Component } from 'react';
import{Link} from "react-router-dom";
class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="nav navbar-expand-md navbar-light bg-light">
                    <Link to="/"><a class="navbar-brand">Employee Management System</a></Link>
                    <div>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                             <Link to="/add-employee"><a class="nav-link">Home<span class="sr-only">(current)</span></a></Link>
                             </li>
                        </ul>
                    </div>
                    </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;