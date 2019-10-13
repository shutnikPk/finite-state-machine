class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        if (config == undefined) {
            throw new Error
        }
        this.config = config;
        this.histo = [];
<<<<<<< HEAD
        this.und = [];
        this.curr_state = this.config.initial;
        this.histo[0] = this.curr_state;
=======
        this.und =[];
        this.curr_state = this.config.initial;
        this.histo[0]=this.curr_state;
>>>>>>> 01eee9e60045b74091aa0ab37d93d0f8aff505af

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
        //console.log('change', '__',this.curr_state); 
        if (this.config.states[state] == null) throw new Error;
        //this.histo.push(this.curr_state);
        this.curr_state = state;
        this.histo.push(this.curr_state);
<<<<<<< HEAD
        this.und = [];
=======
        this.und =[];
>>>>>>> 01eee9e60045b74091aa0ab37d93d0f8aff505af
        return this;
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {

        let state_event = this.config.states[this.curr_state].transitions[event];
        if (state_event != undefined) {

            this.changeState(state_event);
            //this.curr_state = state_event;
<<<<<<< HEAD
            // this.histo.push(this.curr_state); 
           // console.log('trigger', '  ', this.curr_state);
            this.und = [];
            // this.histo.push(this.curr_state); 
        } else {
            throw new Error;
        } return this;
=======
           // this.histo.push(this.curr_state); 
           console.log('trigger','  ',this.curr_state);          
            this.und =[];
            // this.histo.push(this.curr_state); 
        } else {
            throw new Error;
        }return this;
>>>>>>> 01eee9e60045b74091aa0ab37d93d0f8aff505af

    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.histo.push(this.config.initial);
        this.curr_state = this.config.initial;
<<<<<<< HEAD
       // console.log('reset', '_____', this.histo);
        return this;

=======
        console.log('reset','_____',this.histo);
        return this;
        
>>>>>>> 01eee9e60045b74091aa0ab37d93d0f8aff505af
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {

        let arr = [];
        if (event == undefined) {
            for (let state in this.config.states) {
                arr.push(state.toString())
            }
            return arr
        } else {
            for (let state in this.config.states) {
                if (this.config.states[state].transitions[event]) {
                    arr.push(state.toString());
                }
            }
<<<<<<< HEAD
            // console.log(arr);
=======
           // console.log(arr);
>>>>>>> 01eee9e60045b74091aa0ab37d93d0f8aff505af
            return arr;

        }


    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
<<<<<<< HEAD

        if (this.histo.length < 2) {
            this.histo.pop();
            return false;
        } else {
           // console.log('undo2', '+++', this.curr_state); console.log('undo2', '__', this.histo);
            this.und.push(this.curr_state);
            this.histo.pop();
            this.curr_state = this.histo[this.histo.length - 1];

=======
        
        if (this.histo.length <2) {this.histo.pop(); 
            return false;
        } else {console.log('undo2', '+++',this.curr_state);console.log('undo2', '__',this.histo);
            this.und.push( this.curr_state);
            this.histo.pop();
            this.curr_state=this.histo[this.histo.length-1];      
               
>>>>>>> 01eee9e60045b74091aa0ab37d93d0f8aff505af
            return true;
        }
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
        console.log(this.und);
        if (this.und.length<1){
            return false;
        }else{
            this.curr_state = this.und[this.und.length-1];
            this.und.pop();
            return true;
        }
     }

    /**
     * Clears transition history
     */
    clearHistory() {
<<<<<<< HEAD
        this.histo=[]
=======
        if(){
            
        }
>>>>>>> 01eee9e60045b74091aa0ab37d93d0f8aff505af
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/