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

var width = 75;
var height = 75;

var GameApp = React.createClass({
        getInitialState: function(){
            return {
                grid:GridUtil.initializeGrid(width,height),
                active: false
            }
        },

        componentDidMount: function(){
            setInterval(this._updateGrid, 1);
        },

        _updateGrid: function(){

            if(this.state.active){
                this.setState({
                    grid: GridUtil.calculateNextGenerationForGrid(this.state.grid)
                });
            }
        },

        _start: function(){
            this.setState({
                active: true
            })
        },

        render: function () {
            return (<div>
                    <button onClick={this._start}>Start</button>
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

