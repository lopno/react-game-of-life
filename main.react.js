var React = require('react');
var GridUtil = require('./gridUtil');

var GameApp = React.createClass({
        getInitialState: function(){
            return {
                grid:GridUtil.initializeGrid(10, 10)
            }
        },
        render: function () {
            return (
                <div>
                    {  }
                </div>
            );
        }
    }
);

React.render(<GameApp/>, document.getElementById('main'));

