//3 DZ 1 ЧАСТЬ
//TAB SLIDER
const tabsContent = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');
let currentTab = 0

const hideTabsContent = () => {
    tabsContent.forEach(tabContent => {
        tabContent.style.display = 'none';
    });
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active');
    });
};

const showTabsContent = (index = 0) => {
    tabsContent[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
};

const switchTab = () => {
    hideTabsContent()
    currentTab =  (currentTab + 1) % tabs.length
    showTabsContent(currentTab)
} 

hideTabsContent();
showTabsContent();
setInterval(switchTab, 3000)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tabElement, tabIndex) => {
            if (event.target === tabElement) {
                hideTabsContent();
                currentTab =tabIndex

                showTabsContent(currentTab);
            }
        });
    }
};

//5 DZ
const usd = document.querySelector('#usd');
const som = document.querySelector('#som');
const eur = document.querySelector('#eur');

const currencyConverter = (element, target1, target2, curr) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();

        request.onload = () => {
            const response = JSON.parse(request.response);
            if (curr === 'som') {
                target1.value = (element.value / response.som.usd).toFixed(2);
                target2.value = (element.value / response.som.eur).toFixed(2);
            } else if (curr === 'usd') {
                target1.value = (element.value * response.som.usd).toFixed(2);
                target2.value = (element.value * response.som.eur).toFixed(2);
            } else 
            if (curr === 'eur') {
                target1.value = (element.value * response.som.usd).toFixed(2);
                target2.value = (element.value * response.som.eur).toFixed(2);
            }
            element.value === '' && (target1.value = target2.value = '');
        };
    };
};

currencyConverter(som, usd, eur, 'som');
currencyConverter(usd, som, eur, 'usd');
currencyConverter(eur, som, usd, 'eur');



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



