const removeFromArray = function(array, ...args) {
    const result = [];

    array.forEach((item) => {
        // If the item is not in our list of things to remove, keep it
        if (!args.includes(item)) {
            result.push(item);
        }
    });

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
