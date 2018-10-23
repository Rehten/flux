import {Store} from "./Store";
import {UPDATE_FONT_SIZE_PREFERENCE, UPDATE_USERNAME} from "./actions";

export class UserPrefsStore extends Store {
    getInitialState() {
        return {
            userName: 'Jim',
            fontSize: 'small'
        }
    }

    __onDispatch(action) {
        switch(action.type) {
            case UPDATE_USERNAME:
                this.__state.userName = action.value;
                this.__emitChange();
                break;
            case UPDATE_FONT_SIZE_PREFERENCE:
                this.__state.fontSize = action.value;
                this.__emitChange();
                break;

        }
    }

    getUserPreferences() {
        return this.__state;
    }
}
