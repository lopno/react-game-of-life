var Reflux = require('reflux');

var gridUpdate = Reflux.createAction();

var GridUtil = {
    calculateNextGenerationForGrid: function(grid){
        var newGrid;

        for(var i = 0; i < grid.length; i++) {
            var column = grid[i];
            for(var j = 0; j < column.length; j++) {
                var neighbours = 0;
                //left
                if(i > 0){
                    if (grid[i - 1][j]){
                        neighbours++;
                    }
                }
                //up left
                if(i > 0 && j > 0){
                    if(grid[i - 1][j - 1]){
                        neighbours++;
                    }
                }
                //up
                if(j > 0){
                    if(grid[i][j - 1]){
                        neighbours++;
                    }
                }
                //up right
                if(j > 0 && i < i.length - 1){
                    if(grid[i + 1][j-1]){
                        neighbours++;
                    }
                }
                //right
                if(i < i.length - 1){
                    if(grid[i + 1][j]){
                        neighbours++
                    }
                }
                //down right
                if(i < i.length - 1 && j < j.length - 1){
                    if(grid[i + 1][j + 1]){
                        neighbours++;
                    }
                }
                //down
                if(j < j.length - 1){
                    if(grid[i][j + 1]){
                        neighbours++;
                    }
                }
                //down left
                if(i > 0 && j < j.length - 1){
                    if(grid[i - 1][j + 1]){
                        neighbours++;
                    }
                }

                //Check the 4 rules

                //dead cell
                if(!grid[i][j]){
                    if(neighbours === 3){
                        newGrid[i][j] = true;
                    }
                }
                //live cell
                else{
                    if(neighbours < 2 || neighbours > 3){
                        newGrid[i][j] = false;
                    } else{
                        newGrid[i][j] = true;
                    }
                }
            }
        }


        gridUpdate(newGrid);
        return newGrid;
    },

    initializeGrid: function(width, height) {
        var newGrid;

        for (var i = 0; i < grid.length; i++) {
            var column = grid[i];
            for (var j = 0; j < column.length; j++) {
                newGrid[i][j] = Math.random() % 2 == 0 ? true : false;
            }
        }
    }
};


module.exports = GridUtil;