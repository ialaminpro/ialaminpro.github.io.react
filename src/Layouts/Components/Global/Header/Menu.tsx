import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import FontAwesome from "react-fontawesome";
import {APP} from "../../../../App/Init/App.Init";

class Menu extends Component {

    constructor(props: any) {
        super(props);
    }

    public componentDidMount(): void {

    }

    render(): any {
        
        return(
            <React.Fragment>
                {/* navigation menu*/}
                <div className="nav-holder">
                    <div className="nav-holder-wrap but-hol">
                        <div className="nav-container fl-wrap">
                            {/* nav */}
                            <nav className="nav-inner" id="menu">
                                <ul>
                                    <li>
                                    <Link to={APP.ROUTES.GLOBAL.ROOT} title={"Home"} className="ajax">Home</Link>
                                        {/* <a href={"APP.CONFIG.API_CONFIG.APP_ROOT"} >Home</a> */}
                                        </li>
                                    <li><a href="about.html" className="ajax">About</a></li>
                                    <li><a href="portfolio4.html" className="ajax">Portfolio</a></li>
                                    <li><a href="contacts.html" className="ajax">Contacts</a></li>
                                    <li><a href="blog.html" className="ajax">Blog</a></li>
                                </ul>
                            </nav>
                            {/* nav end*/}
                        </div>
                        <div className="nav-footer"><span>&#169; Al Amin 2021  /  All rights reserved. </span></div>
                        <div className="nav-holder-wrap_line"></div>
                        <div className="nav-holder-wrap_dec"></div>
                    </div>
                </div>
                <div className="nav-overlay"></div>
                 {/* navigation menu end */}
            </React.Fragment>

        );
    }

}

export default Menu;
