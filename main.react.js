var React = require('react');
var GridUtil = require('./gridUtil');

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

var width = 50;
var height = 50;

var GameApp = React.createClass({
        getInitialState: function(){
            return {
                grid:GridUtil.initializeGrid(width,height)
            }
        },

        componentDidMount: function(){
            setInterval(this._updateGrid, 1000);
        },

        _updateGrid: function(){
            this.setState({
                grid: GridUtil.calculateNextGenerationForGrid(this.state.grid)
            })
        },

        render: function () {
            return (<div style={{border: "1px red"}}>
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

