import {AuthProvider} from "../../Service/Providers/Core/Auth/Auth.Provider";
import {ROUTE_PATHS} from "../../../Routes/RoutePaths";

/**
 * Used only for the public routes
 * @return {boolean}
 */
export function NON_LOGGED_USER(props: any) {
    if (new AuthProvider().check()) {
        return props.history.replace(ROUTE_PATHS.PRIVATE.ROOT);
    }

    return true;
}

/**
 * Used only for the private routes
 * @return {boolean}
 */
export function LOGGED_USER(props: any) {
    if (!new AuthProvider().check()) {
        return props.history.replace(ROUTE_PATHS.PUBLIC.LOGIN);
    }

    return true;
}
