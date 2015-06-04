var React = require('react');

var GameApp = React.createClass({
        render: function () {
            return (
                <div>
                Game of life!
                </div>
            );
        }
    }
);

React.render(<GameApp/>, document.getElementById('main'));

