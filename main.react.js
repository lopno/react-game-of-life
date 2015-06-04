var React = require('react');
var GridUtil = require('./gridUtil');

var style = {
    cellDead:{
        width:10,
        height:10,
        backgroundColor: 'black',
        float:'left'
    },
    cellAlive:{
        width:10,
        height:10,
        backgroundColor: 'white',
        float:'left'
    }
};

var width = 10;
var height = 10;

var GameApp = React.createClass({
        getInitialState: function(){
            return {
                grid:GridUtil.initializeGrid(width,height)
            }
        },
        render: function () {
            return (<div>
                    {this.state.grid.map(function(row){
                        return (<div style={{height:10}}>{row.map(function(cell){
                            if(cell){
                                return <div style={style.cellAlive}></div>
                            }else{
                                return <div style={style.cellDead}></div>
                            }
                        })}</div>)
                    })}
                </div>
            );
        }
    }
);

React.render(<GameApp/>, document.getElementById('main'));

