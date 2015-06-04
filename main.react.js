var React = require('react');
var GridUtil = require('./gridUtil');

var style = {
    cell:{
        width:10,
        height:10,
        backgroundColor: 'black',
        float:'left'
    }
};

var GameApp = React.createClass({
        getInitialState: function(){
            return {
                grid:GridUtil.initializeGrid(10,10)
            }
        },
        render: function () {
            return (<div>
                    {this.state.grid.map(function(row){
                        return (<div style={{height:10}}>{row.map(function(cell){
                            return <div style={style.cell}></div>
                        })}</div>)
                    })}
                </div>
            );
        }
    }
);

React.render(<GameApp/>, document.getElementById('main'));

