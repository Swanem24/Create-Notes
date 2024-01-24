async function printNote() {
  // create a new div element
  const newDiv = document.createElement("div");

  // create the inputs
  const newInp = document.createElement("textarea");
  const newBtn = document.createElement("button");

  //  creates the attribute of the input
  const inpAttribRows = document.createAttribute("rows");
  const inpAttribCols = document.createAttribute("cols");
  inpAttribRows.value = "30";
  inpAttribCols.value = "30";

  newInp.setAttributeNode(inpAttribRows);
  newInp.setAttributeNode(inpAttribCols);

  //  Add text to the button
  const newText = document.createTextNode("Close");
  newBtn.appendChild(newText);

  // add the text node to the newly created div
  newDiv.appendChild(newInp);
  newDiv.appendChild(newBtn);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("container");
  document.body.appendChild(newDiv);

  newBtn.addEventListener("click", hide, false);
}

//  deletes the note
function hide(evt) {
  // finds the button and then deletes its parent element
  evt.target.parentElement.remove();
}