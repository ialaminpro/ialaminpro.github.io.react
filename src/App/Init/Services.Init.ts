import {RouterProvider} from "../../Vendor/Service/Providers/Core/Router/Router.Provider";
import {AuthProvider} from "../../Vendor/Service/Providers/Core/Auth/Auth.Provider";
import {HttpRequestProvider} from "../../Vendor/Service/Providers/Core/HttpRequest/HttpRequest.Provider";
import {ToastProvider} from "../../Vendor/Service/Providers/Core/Toast/Toast.Provider";
import {MiddlewareProvider} from "../../Vendor/Service/Providers/Core/Middleware/Middleware.Provider";

/**
 * @interface of the Service Providers
 * @includes all the inherited types and properties
 *
 * You can register your types and properties here for type checking
 */
interface IServices {
    CORE: {
        /**
         * You can register your core services types here
         */

        ROUTER: {
            Link: typeof RouterProvider.Link,
            Route: typeof RouterProvider.Route,
            BrowserRouter: typeof RouterProvider.BrowserRouter,
            HashRouter: typeof RouterProvider.HashRouter,
            Switch: typeof RouterProvider.Switch,
            withRouter: typeof RouterProvider.withRouter,
            RouteMatched: typeof RouterProvider.RouteMatched,
            RouterLayout: typeof RouterProvider.RouterLayout,
        },
        MIDDLEWARE: typeof MiddlewareProvider,
        TOAST: typeof ToastProvider,
        GLOBAL_DATA: {
            STORES: Array<any>,
        },
    },

    /**
     * Other Service Provider Types
     */
    AUTH: typeof AuthProvider,
    HTTP_REQUEST: typeof HttpRequestProvider,
}


const Services: IServices = {
    /**
     * You can register your service providers here
     */

    CORE: {
        ROUTER: RouterProvider,
        MIDDLEWARE: MiddlewareProvider,
        TOAST: ToastProvider,
        GLOBAL_DATA: {
            STORES: [],
        }
    },
    AUTH: AuthProvider,
    HTTP_REQUEST: HttpRequestProvider,
};

export {Services as SERVICES};