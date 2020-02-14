function s(w1, w2) {
    return w1.concat(w2);
}

var result = s('code', 'your');
console.log(result);

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used ot understand them.
// R: The function concatenates two strings
// - How many parameters does the function take?
// R: Two
// - What is the function name?
// R: s
// - Where is the function called? with what parameters?
// R: var result = s('code', 'your');
// - What does the function return?
// R: codeyour
// - How can this function be improved?
//R: Adding a space between strings, maybe return w1 + " " + w2 ;