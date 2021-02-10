import React, {lazy, Suspense} from 'react';
import {APP} from "../App/Init/App.Init";
import Home from "../Screens/Private/Home/Home";
import Header from '../Layouts/Components/Global/Header/Header';
import Menu from '../Layouts/Components/Global/Header/Menu';
import FourZeroFour from "../Screens/Errors/FourZeroFour/FourZeroFour";
import FontAwesome from "react-fontawesome";

const Routes = () => {
    const ROUTES = APP.ROUTES;
    const RouterProvider: any = APP.SERVICES.CORE.ROUTER;

    return (
        <RouterProvider.BrowserRouter>
            <RouterProvider.Switch>
                <React.Fragment>
                {/* loader   */}
                <div className="loader">
                    <div className="loading-text-container "><span className="loading-text">Load<strong>ing</strong></span> <span className="loader_count">0</span></div>
                    <div className="loader-anim"></div>
                    <div className="loader-anim2 color-bg"></div>
                </div>
                {/* loader  end*/}   
                {/* main start  */} 
                <div id="main">
                    <Header/>
                    {/* wrapper  */}
                    <div id="wrapper">
                        <Menu/>
                        
                        <RouterProvider.Route exact path={ROUTES.GLOBAL.ROOT} component={Home}/>

                        {/* 404 */}
                        {/* <RouterProvider.Route exact path={"*"} component={FourZeroFour}/> */}
                        {/* share-wrapper */}
                        <div className="share-wrapper">
                            <div className="close-share-btn"><FontAwesome tag={"i"} name={"long-arrow-left"}/></div>
                            <div className="share-container fl-wrap  isShare"></div>
                        </div>
                        {/* share-wrapper  end */}
                    </div>
                    {/* wrapper end  */}
                    {/* cursor */}
                    <div className="element">
                        <div className="element-item"></div>
                    </div>
                    {/* cursor end */}
                </div>
                {/* Main end  */}
                </React.Fragment>
            </RouterProvider.Switch>
        </RouterProvider.BrowserRouter>
    );
};

export default Routes;
