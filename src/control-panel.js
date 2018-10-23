import {Dispatcher} from "./flux/dispatcher";
import {UserPrefsStore} from "./flux/UserPrefsStore";
import {fontSizePreferenceUpdateAction, userNameUpdateAction} from "./flux/actions";
import {render} from "./flux/render";

let controlPanelDispatcher = new Dispatcher();
let userPrefsStore = new UserPrefsStore(controlPanelDispatcher);

userPrefsStore.addListener((state) => console.info('The state is... ', state));
userPrefsStore.addListener((state) => render(state));

document.getElementById('userNameInput').addEventListener('input', ({target}) => {
    const name = target.name;
    console.log('Dispatching...', name);
    controlPanelDispatcher.dispatch(userNameUpdateAction(target.value));
});

document.forms.fontSizeForm.fontSize.forEach(element => {
    element.addEventListener('change', ({target}) => {
        console.log('Dispatching...', target.value);
        controlPanelDispatcher.dispatch(fontSizePreferenceUpdateAction(target.value));
    });
});

controlPanelDispatcher.register(action => console.info('Received action...', action));
