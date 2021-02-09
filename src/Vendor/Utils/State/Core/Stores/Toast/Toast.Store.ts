import {StoreProvider} from "../../../../../Service/Providers/Core/Store/Store.Provider";
import {Dispatcher} from "../../Dispatcher/Dispatcher";
import {actionTypes} from "../../Actions/Toast/Toast.Actions";

class ToastStore extends StoreProvider {
    constructor() {
        super();

        this.state = {

        };
    }

    public registerDispatcher(): void {
        Dispatcher.register((action: any) => {
            switch (action.type) {
                default:
                    break
            }
        });
    }
}

const Store = new ToastStore();
export {Store as ToastStore}