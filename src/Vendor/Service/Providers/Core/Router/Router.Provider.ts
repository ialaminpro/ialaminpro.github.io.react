import {Link, Route, BrowserRouter, HashRouter, Switch, withRouter, RouteGroup, RouterLayout} from './Router';
import RouteMatched from '../../../../Functions/Core/RouteMatched';

interface IRouterProvider {
    Route: typeof Route,
    BrowserRouter: typeof BrowserRouter,
    HashRouter: typeof HashRouter,
    Switch: typeof Switch,
    Link: typeof Link,
    withRouter: typeof withRouter,
    RouteMatched: typeof RouteMatched,
    RouteGroup: typeof RouteGroup,
    RouterLayout: typeof RouterLayout,
}

export const RouterProvider: IRouterProvider = {
    Route,
    BrowserRouter,
    HashRouter,
    Switch,
    Link,
    withRouter,
    RouteMatched,
    RouteGroup,
    RouterLayout,
};