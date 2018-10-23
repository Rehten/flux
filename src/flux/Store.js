export class Store {
    constructor(dispatcher) {
        this.__listeners = [];
        this.__state = this.getInitialState();
        dispatcher.register(this.__onDispatch.bind(this));
    }

    __onDispatch() {
        throw new Error("Must be override");
    }

    getInitialState() {
        throw new Error("Must override");
    }

    addListener(listener) {
        this.__listeners.push(listener);
        this.__emitChange();
    }

    __emitChange() {
        this.__listeners.forEach(listener => listener(this.__state));
    }
}
