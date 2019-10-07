class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        if (config == undefined) throw new Error;    
        this.config = config;
        this.state=null;
       this.states= [];
       
       
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
      let start_state = this.config.initial;
      this.states[0] = start_state;
        return this.states[0];
    
        
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {    
        this.stateConfig = this.config.states;
         if (this.stateConfig[state] == null) throw new Error;
        this.state = state;
        this.states.push(this.state);
        console.log(this.state);
        return this.state;
       
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {}

    /**
     * Resets FSM state to initial.
     */
    reset() {}

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
