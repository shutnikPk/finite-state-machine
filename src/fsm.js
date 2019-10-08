class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        if (config==undefined){throw new Error}
        this.config=config;
        this.histo=[];
        this.curr_state=this.config.initial;

    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {          
        return this.curr_state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if(this.config.states[state] == null) throw new Error;
       
        this.curr_state=state;
       this.histo.push(state);        
        return this.curr_state;
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        
        let state_event=this.config.states[this.curr_state].transitions[event];
        if(state_event!=undefined){
            this.curr_state=state_event;
            this.histo.push(this.curr_state);  
        }else{throw new Error;}

    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.curr_state=this.config.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        
        let arr=[];

        if(!event){
            for(let state in this.config.states)
            arr.push(state)            
            return arr;
        }

        
    }

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
    clearHistory() {
       
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
