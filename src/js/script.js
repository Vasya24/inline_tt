let cards = document.querySelectorAll('.card');

for (let card of cards) {
    let nodes = card.children[2].children
    console.log(nodes)
    for (let i=0;i<nodes.length;i++) {
        card.addEventListener('mouseenter', () => {

        })
    }
}
