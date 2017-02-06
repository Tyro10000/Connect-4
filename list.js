var rowheight = [0, 0, 0, 0, 0, 0, 0];
var lanes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var turn = true; // red first;
var streak = 0;
var redw = 0;
var yelw = 0;
var grid = []; // h x w



function add(lane) {
    switch (lane) {
        case "a":
            var selector = lane + rowheight[0];
            if (turn) {
                grid[rowheight[0]][0] = 1;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="red" /></svg>';
                turn = false;
            } else {
                grid[rowheight[0]][0] = 2;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="yellow" /></svg>';
                turn = true;
            }
            rowheight[0]++;
            break;
        case "b":
            var selector = lane + rowheight[1];

            if (turn) {
                grid[rowheight[1]][1] = 1;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="red" /></svg>';
                turn = false;
            } else {
                grid[rowheight[1]][1] = 2;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="yellow" /></svg>';
                turn = true;
            }
            rowheight[1]++;
            break;
        case "c":
            var selector = lane + rowheight[2];

            if (turn) {
                grid[rowheight[2]][2] = 1;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="red" /></svg>';
                turn = false;
            } else {
                grid[rowheight[2]][2] = 2;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="yellow" /></svg>';
                turn = true;
            }
            rowheight[2]++;
            break;
        case "d":
            var selector = lane + rowheight[3];

            if (turn) {
                grid[rowheight[3]][3] = 1;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="red" /></svg>';
                turn = false;
            } else {
                grid[rowheight[3]][3] = 2;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="yellow" /></svg>';
                turn = true;
            }
            rowheight[3]++;
            break;
        case "e":
            var selector = lane + rowheight[4];

            if (turn) {
                grid[rowheight[4]][4] = 1;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="red" /></svg>';
                turn = false;
            } else {
                grid[rowheight[4]][4] = 2;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="yellow" /></svg>';
                turn = true;
            }
            rowheight[4]++;
            break;
        case "f":
            var selector = lane + rowheight[5];

            if (turn) {
                grid[rowheight[5]][5] = 1;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="red" /></svg>';
                turn = false;
            } else {
                grid[rowheight[5]][5] = 2;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="yellow" /></svg>';
                turn = true;
            }
            rowheight[5]++;
            break;
        case "g":
            var selector = lane + rowheight[6];

            if (turn) {
                grid[rowheight[6]][6] = 1;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="red" /></svg>';
                turn = false;
            } else {
                grid[rowheight[6]][6] = 2;
                document.getElementById(selector).innerHTML = '<svg width="50" height="50"><circle cx="25" cy="25" r="22"  fill="yellow" /></svg>';
                turn = true;
            }
            rowheight[6]++;
            break;
    }


    if (turn) {
        document.getElementById("score").style.borderBottom = "3px solid #D13313";
        check(2);
        diag(2);
    } else {
        document.getElementById("score").style.borderBottom = "3px solid #C1CF06";
        check(1);
        diag(1);
    }


}

function spread() {
    document.getElementById("win").innerHTML = "";
    for (h = 0; h < 6; h++) {
        document.getElementById("win").innerHTML += "<p>"
        for (w = 0; w < 7; w++) {
            if (grid[h][w] == 1) document.getElementById("win").innerHTML += "X";
            else if (grid[h][w] == 2) document.getElementById("win").innerHTML += "O";
            else document.getElementById("win").innerHTML += "-";



        }
    }
}

function check(side) {
    for (h = 0; h < 6; h++) {
        streak = 0;
        for (w = 0; w < 7; w++) {
            if (grid[h][w] == side)
                streak += 1;
            else
                streak = 0;
            if (streak == 4) {
                win(side);
                break;
            }

        }

    }
    for (w = 0; w < 7; w++) {
        streak = 0;
        for (h = 0; h < 6; h++) {
            if (grid[h][w] == side)
                streak += 1;
            else
                streak = 0;
            if (streak == 4) {
                win(side);
                break;
            }

        }

    }



    // for(h = 6; h > 0; h--){
    //     streak = 0; var tally = 1;
    //     for(w = 7; w > 0;w--){
    //         if(grid[w][w] == side)
    //             streak += 1;
    //         else
    //             streak = 0;
    //             x--;
    //         if(streak == 4){
    //             win(side);
    //             break;
    //         }
    //     }  
    //     tally += 1; 
    // }
}

function diag(side) {

    var p = 0;
    for (h = 0; h < 3; h++) {
        for (w = 0; w < 4; w++) {
            streak = 0;
            for (i = 0; i < 4; i++) {
                if (grid[h + i][w + i] == side)
                    streak += 1;
                else
                    streak = 0;
                if (streak == 4) {
                    win(side);
                    break;
                }
            }

        }
    }
    for (h = 5; h > 2; h--) {
        for (w = 0; w < 4; w++) {
            streak = 0;
            for (i = 0; i < 4; i++) {
                if (grid[h - i][w + i] == side)
                    streak += 1;
                else
                    streak = 0;
                if (streak == 4) {
                    win(side);
                    break;
                }
            }

        }
    }

}


function win(side) {
    if (side == 1) {
        document.getElementById("win").innerHTML = "Red Wins!";
        redw++;
    }
    if (side == 2) {
        document.getElementById("win").innerHTML = "Yellow Wins!";
        yelw++;
    }

    document.getElementById("score").innerHTML = "Red:" + redw + " Yellow:" + yelw;
}

function main(total) {
    rowheight = [0, 0, 0, 0, 0, 0, 0];
    lanes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    turn = true; // red first;
    streak = 0;
    if (total == 1) {
        redw = 0;
        yelw = 0;
    }

    document.getElementById("container").innerHTML = "";
    document.getElementById("score").innerHTML = "Red:" + redw + " Yellow:" + yelw;
    document.getElementById("win").innerHTML = "";

    for (x = 0; x < 6; x++) {
        grid[x] = [];
    }

    for (height = 5; height >= 0; height--) {
        document.getElementById("container").innerHTML += '<div class="row">'
        for (x = 0; x < 7; x++) {
            document.getElementById("container").innerHTML += '<div class="frame" id="' + lanes[x] + height + '" onclick="add(&quot;' + lanes[x] + '&quot)"></div>';
        }
        document.getElementById("container").innerHTML += '</div>';
    }

}


main();