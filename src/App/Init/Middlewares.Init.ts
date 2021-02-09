/**
 * Register your middleware types and properties here
 */
import {LOGGED_USER, NON_LOGGED_USER} from "../../Vendor/MIddlewares/Auth/Auth.Middleware";

interface IMiddlewares {
    NON_LOGGED_USER: typeof NON_LOGGED_USER,
    LOGGED_USER: typeof LOGGED_USER,
}

const Middlewares: IMiddlewares = {
    /**
     * Register your middleware providers here
     */
    NON_LOGGED_USER: NON_LOGGED_USER,
    LOGGED_USER: LOGGED_USER,
};

export {Middlewares as MIDDLEWARES}