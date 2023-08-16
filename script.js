let grocery = document.getElementById('grocery');
grocery.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    let data = this.elements.writelist.value;
    let list = document.querySelector('ol');
    let item = document.createElement('li');
    let text = document.createElement('p');

    text.textContent = data;
    this.elements.writelist.value = "";
    item.append(text);
    list.append(item);

    let rmvBtn = document.createElement('button'); // Change from span to button
    rmvBtn.classList.add('remove');
    rmvBtn.textContent = 'X'; 
    item.append(rmvBtn);
    rmvBtn.addEventListener('click', deleteItem);
    item.addEventListener('click', doneItem);
}

function deleteItem(e) {
    this.parentElement.remove();
}

function doneItem(e) {
    this.classList.toggle('done');
}
