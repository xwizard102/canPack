function canPack(bigCount, smallCount, goal) {

    // If any of the parameters are negative, return false.
    if (bigCount < 0 || smallCount < 0 || goal < 0)
        return false;

    // the sum of the kilos of bigCount and smallCount must be at least equal to the value of goal
    if (bigCount*5 + smallCount * 1 < goal)
        return false;

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
execute(2, -1, 9);
execute(-2, 0, 9);
execute(2, 0, -9);

execute(1, 0, 9);

execute(2, 0, 9);
execute(1, 5, 9);