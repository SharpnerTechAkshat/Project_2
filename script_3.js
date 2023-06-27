// Filter the items
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');

filter.addEventListener('keyup', filterItems);

// filter items
function filterItems(e) {
    // convert to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');

    // turning collection into an array'
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        var surName = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || surName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    });
}