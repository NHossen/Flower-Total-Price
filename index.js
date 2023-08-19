let total = 0;

function handleCLikBtn(target) {
  const selectedItemContainer = document.getElementById("selected-items");//select card by target
  //console.log(selectedItemContainer)

  const itemName = target.parentNode.childNodes[1].innerText;//innertext chack
  console.log(itemName);

  const li = document.createElement("li");//create new element for adding in price section
  li.innerText = itemName;//set innertext
  selectedItemContainer.appendChild(li);//set new child another div by id selected
  //console.log(newItem);

  const price = target.parentNode.childNodes[5].innerText.split(" ")[1];//take only number by spilt text - seleting item by parentNode ChildNodes

  total = parseInt(total) + parseInt(price);
  document.getElementById("total").innerText = total;//set value total by selection id
}

// document.getElementById("").addEventListener("click", function (e) {
//     e.target
// })