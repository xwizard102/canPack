function canPack(bigCount, smallCount, goal) {

    let kilosPerBig = 5;

    // If any of the parameters are negative, return false.
    if (bigCount < 0 || smallCount < 0 || goal < 0)
        return false;

    // the sum of the kilos of bigCount and smallCount must be at least equal to the value of goal
    if (bigCount * kilosPerBig + smallCount < goal)
        return false;

    // when remainder is NOT covered by small count
    var rem = goal % kilosPerBig;
    if (rem > 0 && rem > smallCount) return false;

    // otherwise remainder is covered
    // and quotient is covered by big count
    var quot = Math.floor(goal / kilosPerBig);
    if (quot <= bigCount) return true;
    
    // otherwise quotient is NOT covered by big count
    // and remaining kilos is NOT covered by small count
    var kilosToGoal = quot - (bigCount*kilosPerBig);
    if (kilosToGoal > smallCount) return false;

    return true;
}

function execute(bigCount, smallCount, goal){
    console.log(
        "bigCount:", bigCount,
        "smallCount:", smallCount,
        "goal:", goal,
        "result:", canPack(bigCount, smallCount, goal));
}

// test cases

console.log("\nNegative Numbers:\n");
execute(2, -1, 9); // false
execute(-2, 0, 9); // false
execute(2, 0, -9); // false

console.log("\nSum less than goal:\n");
execute(1, 0, 9); // false

console.log("\nProvided Test Cases:\n");
execute(2, 0, 9); // false
execute(1, 5, 9); // true