//6 DZ
//CARD SWITCHER
const card = document.querySelector('.card');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

let count = 1;

const fetchData = (num) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            card.innerHTML = `
                <p>${data.title}</p>
                <span>${data.id}</span>
                <p style="color:${data.completed ? 'green' : 'red'}">${data.completed}</span>
            `;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

btnNext.onclick = () => {
    count++;
    if (count === 201) {
        count = 1
    }
    fetchData(count)

};

btnPrev.onclick = () => {
    count--
    if (count === 0) {
        count = 200
    }

    fetchData(count)
}

fetchData(count);


fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error)
})
