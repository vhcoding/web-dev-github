// document.body.children[1].children[0].href = "https://google.com";

// console.dir(document);
// alert();
// window.alert();

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com"; 

anchorElement = document.querySelector("p a"); // p a { color: red; }
anchorElement.href = "https://academind.com";

// 1. Create new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://www.google.com";
newAnchorElement.textContent = "This leads to google";

// 2. Get access to the parent element

firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

// Remove Elements
// 1. Select the element that should be removed.

firstH1Element = document.querySelector("h1");

// 2. Remove it.

firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element);

// Moving Elements

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>"    