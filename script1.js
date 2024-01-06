// store data in local storage
// show data on screen

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('my-form');
    form.addEventListener('submit', saveToLocalStorage);
    function saveToLocalStorage(e) {
        e.preventDefault();
        const expenseAmount = e.target.expenseAmount.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const obj = {
            expenseAmount,
            description,
            category,
        };
        form.reset();
        localStorage.setItem('expenseData', JSON.stringify(obj));
        showOnScreen(obj);
    }
    function showOnScreen(obj) {
        const parElmnt = document.getElementById('expense');
        const childElnt = document.createElement('li');
        childElnt.textContent = obj.expenseAmount + ' ' + obj.description + ' ' + obj.category;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            localStorage.removeItem('expenseData');
            parElmnt.removeChild(childElnt);
        };
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => {
            localStorage.removeItem('expenseData');
            parElmnt.removeChild(childElnt);
            document.getElementById('expenseAmount').value = obj.expenseAmount;
            document.getElementById('description').value = obj.description;
            document.getElementById('category').value = obj.category;
        };
        childElnt.appendChild(deleteBtn);
        childElnt.appendChild(editBtn);
        parElmnt.appendChild(childElnt);
    }
});