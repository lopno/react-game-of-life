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
                grid:GridUtil.emptyGrid(width,height),
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
                active: !this.state.active
            })
        },

        _flip: function(row,column,alive){
            if(!this.state.active){
                var newGrid = this.state.grid;
                newGrid[row][column] = !alive;
                this.setState({
                    grid: newGrid
                });
            }
        },

        _randomize: function(){
            if(!this.state.active){
                this.setState({
                    grid: GridUtil.initializeGrid(width,height)
                })
            }
        },

        _clear: function(){
            if(!this.state.active){
                this.setState({
                    grid: GridUtil.emptyGrid(width,height)
                })
            }
        },

        render: function () {
            return (<div>
                    <button onClick={this._start}>{this.state.active ? "pause" : "start"}</button>
                    <button onClick={this._randomize}>Randomize</button>
                    <button onClick={this._clear}>Clear</button>
                    {this.state.grid.map(function(row, i){
                        return (<div style={{height:10}}>{row.map(function(cell, j){
                            if(cell){
                                return <div style={style.cellAlive} onClick={this._flip.bind(this,i,j,true)}></div>
                            }else{
                                return <div style={style.cellDead} onClick={this._flip.bind(this,i,j,false)}></div>
                            }
                        }.bind(this))}</div>)
                    }.bind(this))}
                </div>
            );
        }
    }
);

React.render(<GameApp/>, document.getElementById('main'));

