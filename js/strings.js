//STEP 1
// let nombre = prompt("Enter your name");
// function nameLength(nombre){
//     window.alert(`Name length is: ${nombre.length}`);
// }
// nameLength(nombre);
//STEP 2
// let nombre = prompt("Enter your name");
// let position = parseInt(prompt("Enter a number"));
// function letterPosition(position){
//     if (position > nombre.length){
//         window.alert("Enter a number less than your name's length");
//     } else {
//     window.alert(nombre[position]);
//     }
// }
// letterPosition(position);
//STEP 3
// let firstName = prompt("Please enter your first name");
// let lastName = prompt("Please enter your last name");
// function joinNames(first, last) {
//     window.alert(`Your name is: ${first.concat(" ",last)}`);
// }
// joinNames(firstName,lastName);
//STEP 4
// let panagram = "The quick brown fox jumps over the lazy dog";
// function zorro (x){
//     window.alert(x.indexOf('fox'));
// }
// zorro(panagram);
//STEP 5
// let panagram = "The quick brown fox jumps over the lazy fox";
// function zorro (x){
//     window.alert(x.lastIndexOf('fox'));
// }
// zorro(panagram);
//STEP 6
// let panagram = "The quick brown fox jumps over the lazy dog";
// let fullName = prompt("Please enter your full name");
// function lazyDog(x){
//     window.alert(panagram.replace('the lazy dog', x));
// }
// lazyDog(fullName);

//STEP 7
// let panagram = "The quick brown fox jumps over the lazy dog";
// let userWord = prompt("Please enter a word in the panagram: 'The quick brown fox jumps over the lazy dog'");
// function zorro (x){
//     window.alert(panagram.search(x));
// }
// zorro(userWord);
//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog";
// let new_string = "";
// function nuevo(){
//     console.log(old_string.slice(31));
//     new_string = old_string.slice(31);
//     window.alert(new_string.toUpperCase());
// }
// nuevo();
//STEP 9
// let panagram = "        THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG      ";
// function zorroTrim(){
//     panagram = panagram.trim();
//     window.alert(panagram.toLowerCase());
// }
// zorroTrim();
//STEP 10
// let panagram = "the quick brown fox jumps over the lazy dog";
// function zorroCap(x){
//     x = x.charAt(0).toUpperCase() + x.slice(1);
//     window.alert(x);
// }
// zorroCap(panagram);