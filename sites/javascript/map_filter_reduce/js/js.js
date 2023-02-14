const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 0.01
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 0.01
    }
]

document.write("<br>Animais<br>")

pets.forEach((nome) => {
    document.write("Nome:  " + nome.name + "<br>")
    document.write("Tipo:  " + nome.type + "<br>")
    document.write("Idade: " + nome.age + "<br>")
    document.write("Weight: " + nome.weight + "<br>")
})

document.write("<br>Animais com idade menor de 5 anos<br>")
const newPets = pets.filter((pet) => {
    return pet.age < 5
})

newPets.forEach((nome) => {
    document.write("Nome:  " + nome.name + "<br>")
    document.write("Tipo:  " + nome.type + "<br>")
    document.write("Idade: " + nome.age + "<br>")
    document.write("Weight: " + nome.weight + "<br>")
})

document.write("<br>Animais com idade maior de 5 anos.<br>")
const eMenorQueCinco = (numero) => {
    return numero > 5;
}

const newPets1 = pets.filter(({age}) => eMenorQueCinco(age))

newPets1.forEach((nome) => {
    document.write("Nome:  " + nome.name + "<br>")
    document.write("Tipo:  " + nome.type + "<br>")
    document.write("Idade: " + nome.age + "<br>")
    document.write("Weight: " + nome.weight + "<br>")
})

document.write("<br>Animais nome.<br>")

const petNames = pets.map((pet) => {
    return pet.name
})

petNames.forEach((nome) => {
    document.write("Nome:  " + nome + "<br>")
})

document.write("<br>Soma de weight.<br>")

const totalWeigth = pets.reduce((total, pet) => {
    return total += pet.weight
}, 0)

document.write("O total é " + totalWeigth)

document.write("<br>Soma de age e weight.<br>")
const totalWeigthAge = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, { totalAge: 0, totalWeight: 0})

document.write("Total da age " + totalWeigthAge.totalAge )

document.write("<br>Total da weight " + totalWeigthAge.totalWeight )

document.write("<br>Soma de weight dos dogs.<br>")

const totalWeigthDogs = pets.reduce((total, pet) => {
    if (pet.type !== 'dog') return total
    return total + pet.weight 
}, 0 )

document.write("Total da weigth de dogs " + totalWeigthDogs )

document.write("<br>Soma de weight dos cats.<br>")

const totalWeigthCats = pets.filter((pet) => {
    return pet.type === 'cat'
}).reduce((total, pet) => {
    return total + pet.weight
} , 0)

document.write("Total da weigth de cats " + totalWeigthCats + "<br>")

const items = ['a','b','c','d']

;(async function (){
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) =>{
            return resolve(`${element} - promise`)
        })
    }
    const itemMappedPromises = items.map(promiseFunction)
    
    const itemMapped = await Promise.all(itemMappedPromises)
    document.write(await itemMapped)
    }
)()

