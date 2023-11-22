function sayHello (name?: string): string | null {

  if (name === "") {
    return null
  }

  return "Hola " + name
}


const sumTwoNumbers = (a: number, b: number): number => a+b

const fetching = async (): Promise<any> => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1")
  const data = await respuesta.json()

  return data.name
}

fetching()
  .then(res => res.slice)

