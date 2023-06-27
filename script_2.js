var itemList = document.getElementById('items');

itemList.addEventListener('click', removeItem);

// Function to remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Do you really want to delete this item ?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
