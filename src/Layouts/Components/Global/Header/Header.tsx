import React, {Component} from 'react';
import FontAwesome from "react-fontawesome";

class Header extends Component {

    constructor(props: any) {
        super(props);
    }

    public componentDidMount(): void {

    }

    render(): any {
        
        return(
            <React.Fragment>
                {/* header*/}
                <header className="main-header">
                    {/* logo  */}
                    <a href="index.html" className="ajax logo-holder"><img src="images/logo.png" alt=""/></a>
                    {/* logo end */}
                    {/* nav-button-wrap*/}
                    <div className="nav-button but-hol">
                        <span  className="ncs"></span>
                        <span className="nos"></span>
                        <span className="nbs"></span>
                        <div className="menu-button-text">Menu</div>
                    </div>
                    {/* nav-button-wrap end*/}
                    {/* header-contacts*/}
                    <div className="header-contacts">
                        <ul>
                            <li><span>01. Call </span> <a href="tel:+88(017)30716580">+88(017)30716580</a></li>
                            <li><span>02. Write </span> <a href="mailto:info@al-amin.pro">info@al-amin.pro</a></li>
                        </ul>
                        <a href="contacts.html" className="ajax contacts-btn">Get in touch</a>
                    </div>
                    {/* header-contacts end*/}
                </header>
                {/* header end*/}
                {/* left-header*/}
                <aside className="left-header">
                    <span className="lh_dec color-bg"></span>
                    <div className="left-header_social">
                        <ul>
                            <li><a href="https://www.facebook.com/ialaminpro" target="_blank"><FontAwesome name={"facebook"}/></a></li>
                            <li><a href="https://www.twitter.com/ialaminpro" target="_blank"><FontAwesome name={"twitter"}/></a></li>
                            <li><a href="https://www.linkedin.com/in/ialaminpro" target="_blank"><FontAwesome name={"linkedin"}/></a></li>
                            <li><a href="https://stackoverflow.com/users/4603858/al-amin" target="_blank"><FontAwesome name={"stack-overflow"}/></a></li>
                        </ul>
                    </div>
                </aside>
                {/* left-header end*/}            
                {/* share button*/}
                <div className="share-btn showshare color-bg"><span>Share <FontAwesome tag={"i"} name={"plus"}/></span> </div>
                {/* share button end*/}
                {/* right header*/}
                <div className="hc_dec_color">
                    <div className="page-subtitle"><span></span></div>
                </div>
                {/* right header end*/}
            </React.Fragment>

        );
    }

}

export default Header;
