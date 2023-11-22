type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

const fetchingList = async (): Promise<User[]> => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await respuesta.json()

  return data
}

const fetchingOne = async (id: number): Promise<User> => {
  const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await respuesta.json()

  return data
}

fetchingList()
  .then(res => {
    console.log(res[0].username)
  })

type Person = {
  name: string
  age: number
}

type Programmer = {
  language: string
}

const programador: Person & Programmer = {
  name: "Carlos",
  age: 25,
  language: "JavaScript"
}

const programador2: Partial<Person> & Programmer = {
  age: 25,
  language: "JavaScript",
}

