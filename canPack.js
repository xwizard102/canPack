function canPack(bigCount, smallCount, goal) {
    return false;
}

function execute(bigCount, smallCount, goal){
    console.log(
        "bigCount:", bigCount,
        "smallCount:", smallCount,
        "goal:", goal,
        "result:", canPack(bigCount, smallCount, goal));
}

execute(2, 0, 9);
execute(1, 5, 9);