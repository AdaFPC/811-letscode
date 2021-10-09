/*Dada uma série de eleitores em potencial, retorne um objeto que represente os resultados da votação. 
Inclua quantos eleitores potenciais tinham entre 18 e 25 anos, quantos eram de 26 a 35, quantos de 36 a 55 anos e quantos de cada uma dessas faixas etárias realmente votaram. 
O objeto resultante contendo esses dados deve ter 6 propriedades. */


const voters = [ 
    {name:'Bob' , age: 30, voted: true}, 
    {name:'Jake' , age: 32, voted: true}, 
    {name:'Kate' , age: 25, voted: false}, 
    {name:'Sam' , age: 20, voted: false}, 
    {name:'Phil' , age: 21, voted: true}, 
    {name:'Ed' , age:55, voted:true}, 
    {name:'Tami' , age: 54, voted:true}, 
    {name: 'Mary', age: 31, voted: false}, 
    {name: 'Becky', age: 43, voted: false}, 
    {name: 'Joey', age: 41, voted: true}, 
    {name: 'Jeff', age: 30, voted: true}, 
    {name: 'Zack', age: 19, voted: false} 
    ]
    
    const votersCountSeed =  {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
    }

    const countVotes = (votesCount, peopleCount, total, voter ) =>({
        ...total, 
        [votesCount]: voter.voted ? total[votesCount] + 1 : total[votesCount],
        [peopleCount]: total[peopleCount] + 1
    })

    const isBetween = (age, lowerAge, higherAge) => age >= lowerAge && age <= higherAge

    let results = voters.reduce((totals, currentVoter) => {
        if(isBetween(currentVoter.age, 18, 25))
            return countVotes("numYoungVotes", "numYoungPeople", totals, currentVoter)
        if(isBetween(currentVoter.age, 26, 35))
            return countVotes("numMidVotesPeople", "numMidsPeople", totals, currentVoter)
        if(isBetween(currentVoter.age, 36, 55))
            return countVotes("numOldVotesPeople", "numOldsPeople", totals, currentVoter)

        return totals
    }, 
        votersCountSeed
   )
    
    console.log(results)