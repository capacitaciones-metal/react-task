class EventSystem{

    constructor(){
        this.events =  [];
    }

    emit(event,data){
        this.events[event].forEach((callback) => {
                callback(data)
        });
    }

    subscribe(event,callback){
        if (typeof this.events[event] === 'undefined') {
            this.events[event] = [];
        }
        this.events[event].push(callback)
    }

    unsubscribe(event, callback) {

        if (typeof this.events[event] !== 'undefined') {
                this.events[event] = this.events[event].filter(function(value) {
                    return value !== callback;
                })

        }
    }


}
const eventSystem =  new EventSystem();

export default eventSystem;