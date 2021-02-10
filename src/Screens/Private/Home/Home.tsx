import React from 'react';
import '../../../Static/Styles/style.css';
import '../../../Static/Styles/plugins.css';
import '../../../Static/Styles/color.css';
import FontAwesome from "react-fontawesome";


class Home extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);
    }

    public componentDidMount(): void {
  
        //Scroll to the top of the document
        window.scrollTo(0, 0);
        document.title = "Home";
    }

    public render(): any {
        return (
            <React.Fragment>
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
                                                    <div className="hhw_header">Home to my Website</div>
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
                                <div className="hsc hsc-prev"><span><FontAwesome tag={"i"} name={"angle-left"}/></span> </div>
                                <div className="hsc hsc-next"><span><FontAwesome tag={"i"} name={"angle-right"}/></span></div>
                            </div>
                            {/* slider-controls end*/}
                            <a href="about.html" className="ajax start-btn"><span> Start explore <FontAwesome tag={"i"} name={"long-arrow-right"}/></span></a>
                            <div className="play-pause_slider hsc_pp auto_actslider"><FontAwesome tag={"i"} name={"fa-play"}/></div>
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
                            <FontAwesome tag={"i"} name={"angle-down"}/>
                        </div>
                    </div>
                </div>
                {/* content end */}
            </React.Fragment>        
    );
    };
}
export default Home;
