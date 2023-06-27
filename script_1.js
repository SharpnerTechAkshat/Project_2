var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);

// Add item
function addItem(e) {
    // to prevent default;
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;
    var propertyItem = document.getElementById('property').value;
    //create a new element (li)
    var li = document.createElement('li');

    // giving class name
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "+propertyItem));
  
    //-------------------------------------------------------------------//

    // create delete button element
     var delButton = document.createElement('button');
    // Add classes to delete button
     delButton.className = 'btn btn-danger btn-sm float-right delete';
     // Append TextNode
    delButton.appendChild(document.createTextNode('X'));
     // adiing btn to Li
     li.appendChild(delButton);
    // for adding item in list or Append Li to list
    itemList.appendChild(li);

}