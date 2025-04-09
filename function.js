function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Vinay", sayGoodbye);

const getInitials = (firstName, lastName) =>
    firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

console.log(getInitials("Roger", "Waters"));