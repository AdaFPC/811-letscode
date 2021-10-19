class Person{
    constructor(firstName,lastName, age, gender,interests){
      this.name = [firstName, lastName]
      this.age = age
      this.gender = gender
      this.interests = interests  
      
    }
    bio(){
        console.log(`${this.name} is ${this.age} years old. They like ${this.interests}`)
    }
    greeting(){
        console.log(`Hi! I'm ${this.name}`)
    }
    
}
class Teacher extends Person{
    constructor(firstName, lastName, age, gender,interests, subject){
        super(firstName,lastName, age, gender, interests)
        this.subject = subject
        
    }
    greeting(){
        console.log(`Hello. My name is ${this.name[1]}, and I teach ${this.subject}. `)
    }
}

class Student extends Person{
    constructor(firstName, lastName, age, gender, interests){
        super(firstName, lastName, age, gender, interests)
    }
    
    greeting(){
        console.log(`Yo! I'm ${this.name[0]}`)
    }
}

const aluno = new Student("Charlinhos", "Meneses", "8", "M", "batata")
console.log(aluno, aluno.bio(), aluno.greeting() )
console.log("----------------------------------------------------")
const professor = new Teacher("Ronald", "Rios", 40, "M", "Cerveja", "História")
console.log(professor, professor.greeting(), professor.bio())
console.log("----------------------------------------------------")
const pessoa = new Person("Cristal" ,"Araujo", 20, "Fluid", "Olivia Rodrigo")
console.log(pessoa, pessoa.bio(), pessoa.greeting())


