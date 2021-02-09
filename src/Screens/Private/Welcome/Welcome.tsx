import React from 'react';
import '../../../Static/Styles/style.css';
import '../../../Static/Styles/plugins.css';
import '../../../Static/Styles/color.css';
// import '../../../Static/Fonts/fonts/fa-brands-400.woff2';
// import '../../../Static/Fonts/fonts/fa-light-300.woff2';
// import '../../../Static/Fonts/fonts/fa-regular-400.woff2';
// import '../../../Static/Fonts/fonts/fa-solid-900.woff2';

const Welcome = () => {
    return (
        <div>
            {/* loader   */}
        <div className="loader">
            <div className="loading-text-container "><span className="loading-text">Load<strong>ing</strong></span> <span className="loader_count">0</span></div>
            <div className="loader-anim"></div>
            <div className="loader-anim2 color-bg"></div>
        </div>
        {/* loader  end*/}
        {/* main start  */}
        <div id="main">
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
                        <li><a href="https://www.facebook.com/ialaminpro" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.twitter.com/ialaminpro" target="_blank"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/ialaminpro" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://stackoverflow.com/users/4603858/al-amin" target="_blank"><i className="fab fa-stack-overflow"></i></a></li>
                    </ul>
                </div>
            </aside>
            {/* left-header end*/}
            {/* share button*/}
            <div className="share-btn showshare color-bg"><span>Share <i className="fal fa-plus"></i></span></div>
            {/* share button end*/}
            {/* right header*/}
            <div className="hc_dec_color">
                <div className="page-subtitle"><span></span></div>
            </div>
            {/* right header end*/}
            {/* wrapper  */}
            <div id="wrapper">
                {/* navigation menu*/}
                <div className="nav-holder">
                    <div className="nav-holder-wrap but-hol">
                        <div className="nav-container fl-wrap">
                            {/* nav */}
                            <nav className="nav-inner" id="menu">
                                <ul>
                                    <li><a href="index.html" className="ajax">Home</a></li>
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
                {/* navigation menu end  */}
                {/* content*/}
                <div className="content full-height" data-pagetitle="Home">
                    <div className="fl-wrap full-height hero-conatiner">
                        <div className="hero-wrapper fl-wrap full-height hidden-item">
                            <span className="hc_dec"></span>
                            {/* fs-slider-wrap  */}
                            {/* hero-slider-wrap */}
                            <div className="hero-slider-wrap home-half-slider fl-wrap full-height">
                                <div className="hero-slider fs-gallery-wrap fl-wrap full-height">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper" >
                                            {/* swiper-slide*/}
                                            <div className="swiper-slide">
                                                <div className="half-hero-wrap">
                                                    <div className="hhw_header">Welcome to my Website</div>
                                                    <h1>Sandy Plegas  - <br></br><span> Web  developer</span> and designer<br></br>   form <span>USA</span></h1>
                                                    <h4>Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. </h4>
                                                    <div className="clearfix"></div>
                                                    <a href="portfolio.html" className="btn ajax  fl-btn color-bg"><span>My portfolio</span></a>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide*/}
                                            <div className="swiper-slide">
                                                <div className="half-hero-wrap">
                                                    <div className="hhw_header">12 december 2020</div>
                                                    <h1>Old  and  Modern  <br></br> cars  on the   <span>Newyork</span>  <br></br> streets</h1>
                                                    <h4>Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. </h4>
                                                    <div className="clearfix"></div>
                                                    <a href="portfolio-single.html" className="btn ajax  fl-btn color-bg"><span>View project</span></a>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide*/}
                                            <div className="swiper-slide">
                                                <div className="half-hero-wrap">
                                                    <div className="hhw_header">25 may 2019</div>
                                                    <h1>Design  and <br></br>development <br></br>   of <span>  Corporate website</span> </h1>
                                                    <h4>Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. </h4>
                                                    <div className="clearfix"></div>
                                                    <a href="portfolio.html" className="btn  ajax  fl-btn color-bg"><span>View project</span></a>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* hero-slider-wrap  end*/}
                            {/* hero-slider-img*/}
                            <div className="hero-slider-img hero-slider-wrap_halftwo hidden-item">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper" >
                                        {/* swiper-slide*/}
                                        <div className="swiper-slide">
                                            <div className="bg"  data-bg="images/bg/10.jpg" data-swiper-parallax="20%"></div>
                                            <div className="overlay"></div>
                                        </div>
                                        {/* swiper-slide end*/}
                                        {/* swiper-slide*/}
                                        <div className="swiper-slide">
                                            <div className="bg"  data-bg="images/bg/7.jpg" data-swiper-parallax="20%"></div>
                                            <div className="overlay"></div>
                                        </div>
                                        {/* swiper-slide end*/}
                                        {/* swiper-slide*/}
                                        <div className="swiper-slide">
                                            <div className="bg"  data-bg="images/bg/8.jpg" data-swiper-parallax="20%"></div>
                                            <div className="overlay"></div>
                                        </div>
                                        {/* swiper-slide end*/}
                                    </div>
                                </div>
                                <div className="hero-corner-dec"></div>
                                <div className="hero-corner-dec2"></div>
                            </div>
                            {/* hero-slider-img  end*/}
                            {/* slider-controls */}
                            <div className="slider-progress-bar">
                                <span>
                                    <svg className="circ" width="50" height="50">
                                        <circle className="circ2" cx="25" cy="25" r="23" stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none"/>
                                        <circle className="circ1" cx="25" cy="25" r="23" stroke="#fff" stroke-width="2" fill="none"/>
                                    </svg>
                                </span>
                            </div>
                            <div className="clone-counter">
                                <div className="current">01</div>
                            </div>
                            <div className="swiper-counter hs_counter">
                                <div className="current">01</div>
                                <div className="total"></div>
                            </div>
                            <div className="hero-slider_control-wrap">
                                <div className="hsc hsc-prev"><span><i className="fal fa-angle-left"></i></span> </div>
                                <div className="hsc hsc-next"><span><i className="fal fa-angle-right"></i></span></div>
                            </div>
                            {/* slider-controls end*/}
                            <a href="about.html" className="ajax start-btn"><span> Start explore <i className="fal fa-long-arrow-right"></i></span></a>
                            <div className="play-pause_slider hsc_pp auto_actslider"><i className="fas fa-play"></i></div>
                        </div>
                        {/* hero-container end*/}
                        <div className="hero-decor-numb"><span>40.7143528  </span><span>-74.0059731 </span> <a href="https://www.google.com.ua/maps/" target="_blank" className="hero-decor-numb-tooltip">Based In NewYork</a></div>
                        <div className="hero-slider-wrap_pagination"></div>
                        <div className="hero-scroll-down-notifer">
                            <div className="scroll-down-wrap ">
                                <div className="mousey">
                                    <div className="scroller"></div>
                                </div>
                            </div>
                            <i className="far fa-angle-down"></i>
                        </div>
                    </div>
                </div>
                {/* content end */}
                {/* share-wrapper*/}
                <div className="share-wrapper">
                    <div className="close-share-btn"><i className="fal fa-long-arrow-left"></i></div>
                    <div className="share-container fl-wrap  isShare"></div>
                </div>
                {/* share-wrapper  end */}
            </div>
            {/* wrapper end */}
            {/* cursor*/}
            <div className="element">
                <div className="element-item"></div>
            </div>
            {/* cursor end*/}
        </div>
        {/* Main end */}
        </div>
    );
};

export default Welcome;
