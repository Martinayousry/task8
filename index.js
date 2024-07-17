let input = prompt("Please enter score:");
score = Number(input);

if (isNaN(score)) {
    document.write("Not a Number.");
} else if (score < 100 && score >= 85) {
    document.write("You got an A.");
} else if (score < 85 && score >= 75) {
    document.write("You got a B.");
} else if (score < 75 && score >= 65) {
    document.write("You got a C.");
} else if (score < 65 && score >= 50) {
    document.write("You got a D.");
} else if (score < 50 && score >= 0) {
    document.write("You got an F.");
} else if (score === 100) {
    document.write("Perfect score.");
} else {
    document.write("Invalid score.");
}


// switch (true) {
//     case isNaN(score):
//         document.write("Not a Number.");
//         break;
//     case (score < 100 && score >= 85):
//         document.write("You got an A.");
//         break;
//     case (score < 85 && score >= 75):
//         document.write("You got a B.");
//         break;
//     case (score < 75 && score >= 65):
//         document.write("You got a C.");
//         break;
//     case (score < 65 && score >= 50):
//         document.write("You got a D.");
//         break;
//     case (score < 50 && score >= 0):
//         document.write("You got an F.");
//         break;
//     case (score === 100):
//         document.write("Perfect score.");
//         break;
//     default:
//         document.write("Invalid score.");
//         break;
// }
