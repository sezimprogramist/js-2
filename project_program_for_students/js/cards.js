//7 DZ 
const cardsBlock = document.querySelector(".cards")

const createCards = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data)
    data.forEach(item => {
        const card = document.createElement("div")
        card.setAttribute("class", "card")

        const title = document.createElement("h2")
        title.setAttribute("class", "cardTitle")
        title.innerText = item.title


        const desc = document.createElement("p")
        desc.setAttribute("class", "cardDesc")
        desc.innerText = item.body

        card.append(title, desc)
        cardsBlock.append(card)
    })
}


createCards()