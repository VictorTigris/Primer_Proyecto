document.querySelector('h1').addEventListener('click', ()=> {
    document.body.style.background = 'lightblue';
})

const mar = (a,b) => {
    if (a < b) {
        return (a + b)
    }
    else if (a > b) {
        return (a - b)
    }
    else {
        return (a * b)
    }
}
console.log(mar(3,5))
console.log(mar(15,10))
console.log(mar(5,5))

