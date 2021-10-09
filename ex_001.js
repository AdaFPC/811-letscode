//Faça uma série de strings dos nomes dizendo se eles podem ou não ir para The Matrix(> 18 anos).

const artists = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const canGoToMatrix = (artist) => artist.age > 18 ? `${artist.name} can go to Matrix` : `${artist.name} is under age!!`
console.log(canGoToMatrix(artists[0]))

const results = artists.map(canGoToMatrix)
console.log(results)

artists.forEach(artist => console.log(canGoToMatrix(artist)))