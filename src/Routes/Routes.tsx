import React, {lazy, Suspense} from 'react';
import ReactSplash from '../Screens/Global/ReactSplash/ReactSplash';
import {APP} from "../App/Init/App.Init";
import Welcome from "../Screens/Private/Welcome/Welcome";
import FourZeroFour from "../Screens/Errors/FourZeroFour/FourZeroFour";

const Routes = () => {
    const ROUTES = APP.ROUTES;
    const RouterProvider: any = APP.SERVICES.CORE.ROUTER;

    return (
        <RouterProvider.BrowserRouter>
            <RouterProvider.Switch>

                <RouterProvider.Route exact path={ROUTES.GLOBAL.ROOT} component={Welcome}/>
                <RouterProvider.Route exact path={ROUTES.GLOBAL.REACT_SPLASH} component={ReactSplash}/>

                {/* 404 */}
                <RouterProvider.Route exact path={"*"} component={FourZeroFour}/>
            </RouterProvider.Switch>
        </RouterProvider.BrowserRouter>
    );
};

export default Routes;
