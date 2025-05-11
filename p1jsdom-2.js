// Get html references
// declare the things you know you need 
// (an input box, an add button, a shopping list things can be appended to)


const inputBox = document.getElementById("input-box")

const addButton = document.getElementById("add-item-button");
const shoppingList = document.getElementById("shopping-list");

addButton.addEventListener("click", function () {
    addItem(inputBox.value);
    inputBox.value = "";
});

function addItem(itemText) {
    const listItem = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.textContent = itemText;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    //append items
    listItem.appendChild(textSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);
    shoppingList.appendChild(listItem);

    //remove items
    removeButton.addEventListener("click", function () {
        shoppingList.removeChild(listItem);
    });

    //Edit items 

    editButton.addEventListener("click", function () {
        if (editButton.textContent === "Edit") {
          const input = document.createElement("input");
          input.type = "text";
          input.value = textSpan.textContent;
          listItem.insertBefore(input, textSpan);
          listItem.removeChild(textSpan);
          editButton.textContent = "Save";
        } else {
          const newSpan = document.createElement("span");
          newSpan.textContent = listItem.querySelector("input").value;
          listItem.insertBefore(newSpan, listItem.querySelector("input"));
          listItem.removeChild(listItem.querySelector("input"));
          editButton.textContent = "Edit";
        }
      });
      }


// Listen for button click
// grab the button variable and have it tell the browser via the document (DOM)
// that there's a click function to listen for
// 


// Call function that builds everything


// function that builds list item


//build <li>, buttons, etc