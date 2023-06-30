const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

// execute function on keyup
input.addEventListener("keyup", (e) => {
  //first gunna loop through the sorted array

  //add remove elements function here to clear the lower list when something is added or removed
  removeElem();

  for (let i of fruits) {
    // allow any case to work and compare with each string

    if (
      i.toLowerCase().includes(input.value.toLowerCase()) &&
      input.value !== ""
    ) {
      let liItem = document.createElement("li");
      liItem.classList.add("li-items");
      //just adding the hand pointer style like the example shows
      liItem.style.cursor = "pointer";
      //set the selected fruit to the one you click on and display it
      liItem.setAttribute("onclick", "displayFruits('" + i + "')");

      //Display matched part in bold
      let fruit = "<b>" + i.substr(0, input.value.length) + "</b>";
      fruit += i.substr(input.value.length);
      // console.log(fruit);
      // display values within the array
      // append the items below the ul list class suggestions
      liItem.innerHTML = fruit;
      document.querySelector(".suggestions").appendChild(liItem);
    }
  }
});

function displayFruits(value) {
  input.value = value;
  // bottom list wasnt removing until I added this remove elemnet function
  removeElem();
}

function removeElem() {
  //clear all the items inside the text box
  let items = document.querySelectorAll(".li-items");
  items.forEach((items) => {
    items.remove();
  });
}
