/**
 * Created by angelgonzalez on 6/4/15.
 */
var Reflux = require('reflux');

var gridStore = Reflux.createStore({
    init: function() {
        this.listenTo(gridUpdate, this.output);
    },
    output: function(flag) {
        var status = flag ? 'ONLINE' : 'OFFLINE';
        this.trigger(status);
    }
});

