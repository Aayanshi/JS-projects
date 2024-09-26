// const paragraph = document.querySelector('p');

console.dir(window);
console.dir(window.document)
console.dir(document)
console.dir(document.body);
console.log(document.head)
console.log(document.body);

document.body.style.background = "grey";
document.body.childNodes[1].innerText = "Aaina Sharma";

//accessing elements in dom(by id)

// let heading = document.getElementById("heading"); //h2

let p = document.querySelector('#para')
p.innerText = "DOM AAINA "
console.log(p)

p.innerText = p.innerHTML + "chup raho"
// console.log(heading);

// // accessing element by class name

// let headin = document.getElementsByClassName("headin");

// console.dir(headin);
// console.log(headin);


// // accessing the element by tag name

// let pyara = document.getElementsByTagName("p");
// console.dir(pyara);


// // query selector (most important !)
// let firstPara = document.querySelector("p"); //will give first element of the patameter;
// console.dir(firstPara)


// let allPara = document.querySelectorAll("p"); // will give all para as a node
// console.dir(allPara);


// // lets apply the query selector to classes now 

// let myClass = document.querySelector(".headin"); // will give the first tag with class
// console.dir(myClass);

// let myAllClass = document.querySelectorAll(".headin"); //will return a node list of all atgs conatianing that class
// console.dir(myAllClass);








// // first element for id as they are unique no all thingy for ids

// let firstEl = document.querySelector("#mybut");
// console.dir(firstEl)


// // tagname 
// console.log(firstEl.tagName); // can be used to print the tagname of type

// // lets try tagname with paragraph tag
// let tagged = document.querySelector("p");
// console.log(tagged.tagName)


// // children-parent- sibling thingy

// // inside tag of parent tag which are inner level indentation 
// // are called as children and if we go more deep in this hirerachy 
// // the more inner tags will be called descendents and tags at same level are called 
// //siblings

// // first child last child
// //  text nodeis always the first child
// // commment node 
// // the element node (we do all the work in element node)

// // how we access children 

// let chillChild = document.querySelector("div").children;
// console.log(chillChild);


// let yellow = document.querySelector(".yellow");



