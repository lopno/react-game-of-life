var Reflux = require('reflux');

var gridUpdate = Reflux.createAction();

var GridUtil = {
    calculateNextGenerationForGrid: function(grid){
        var newGrid = [[]];

        for(var i = 0; i < grid.length; i++) {
            newGrid[i] = [];
            for(var j = 0; j < grid[i].length; j++) {
                var neighbours = 0;
                //left
                if(j > 0){
                    if (grid[i][j - 1]){
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
                if(i > 0){
                    if(grid[i - 1][j]){
                        neighbours++;
                    }
                }
                //up right
                if(i > 0 && j < grid.length - 1){
                    if(grid[i - 1][j + 1]){
                        neighbours++;
                    }
                }
                //right
                if(j < grid.length - 1){
                    if(grid[i][j + 1]){
                        neighbours++
                    }
                }
                //down right
                if(j < grid.length - 1 && i < grid[i].length - 1){
                    if(grid[i + 1][j + 1]){
                        neighbours++;
                    }
                }
                //down
                if(i < grid[i].length - 1){
                    if(grid[i + 1][j]){
                        neighbours++;
                    }
                }
                //down left
                if(j > 0 && i < grid[i].length - 1){
                    if(grid[i + 1][j - 1]){
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
        var newGrid = [];

        for (var i = 0; i < width; i++) {
            newGrid[i] = [];
            for (var j = 0; j < height; j++) {
                newGrid[i][j] = (parseInt(Math.random() * 10000) % 2) == 1 ? true : false;
            }
        }
        return newGrid;
    }
};


module.exports = GridUtil;