// code your solution here
function superbowlWin(arr){
    let win =  arr.find(bowl=>bowl.result === "W")
    if(win)
        return win.year
}