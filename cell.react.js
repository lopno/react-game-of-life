var React = require('react');

var style = {
    cellDead:{
        width:10,
        height:10,
        backgroundColor: 'white',
        float:'left'
    },
    cellAlive:{
        width:10,
        height:10,
        backgroundColor: 'black',
        float:'left'
    }
};

var Cell = React.createClass({

    propTypes:{
        click: React.PropTypes.func.isRequired,
        alive: React.PropTypes.bool.isRequired
    },

    render: function(){
        return <div onClick={this.props.onClick} style={this.props.alive ? style.cellAlive : style.cellDead}></div>
    }
});

module.exports = Cell;
