/**
 * Created by angelgonzalez on 6/4/15.
 */
var Reflux = require('reflux');


var board;

var gridStore = Reflux.createStore({
    init: function() {
        this.listenTo(gridUpdate, this.output);
    },

    output: function(grid) {
        board = grid;
        this.trigger(status);
    }
});

