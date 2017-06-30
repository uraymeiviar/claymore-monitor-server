var App = {
    server : null,
	config : null,

    init : function(server, done){
    	var self = this;
        this.server = server;
        this.config = server.config;

        if(typeof done === 'function'){
        	done(this);
        }
    },

    destroy : function(){ 
    }
}

module.exports = App;