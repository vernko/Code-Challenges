let isBracketsMatching = (str) => {
    let stack = [];

    let open = {
        '{': '}'
    };

    let closed = {
        '}': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}

console.log(isBracketsMatching("{}")); // should return true
console.log(isBracketsMatching("}{")); // should return false
console.log(isBracketsMatching("{abc...xyz}")); // should return true
console.log(isBracketsMatching("{{}")); // should return false
console.log(isBracketsMatching("")); // should return true
console.log(isBracketsMatching("}{{}()")); // should return false
console.log(isBracketsMatching("}{}abc{}()")); // should return false