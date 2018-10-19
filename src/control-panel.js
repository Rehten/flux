import {Dispatcher} from "./flux/dispatcher";

let controlPanelDispatcher = new Dispatcher();

document.getElementById('userNameInput').addEventListener('input', ({target}) => {
    const name = target.name;
    console.log('Dispatching...', name);
    controlPanelDispatcher.dispatch('TODO_NAMEPUTACTION');
});

document.forms.fontSizeForm.fontSize.forEach(element => {
    element.addEventListener('change', ({target}) => {
        controlPanelDispatcher.dispatch('TODO_FONTUPDATEACTION');
    });
});

controlPanelDispatcher.register(action => console.info('Received action...', action));
