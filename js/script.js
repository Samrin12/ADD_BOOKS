const innercontent = document.querySelector('#book')
const add = document.querySelector('.add')
const books = document.querySelector('ul')
const btn = () => {
    if (innercontent.value != "") {

        const lists = document.createElement('li');
        lists.innerText = innercontent.value;
        books.appendChild(lists);

    }
}
