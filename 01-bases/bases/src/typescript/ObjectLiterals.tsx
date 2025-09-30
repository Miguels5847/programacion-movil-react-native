interface Adress {
    country: string;
    city: string;
    houseNumber: string;
}
interface Person {
    age: number;
    firstname: string;
    lastname?: string;
    // El ? es para hacer un campo opcional
    address: Adress;
}
//Herencias
interface Student extends Person {
    course: string;
}


export const ObjectLiterals = () => {
    // objeto basico
    const person: Person = {
        age: 26,
        firstname: 'Luis',
        lastname: 'Alvarez',
        address: {
            country: 'Ecuador',
            city: 'Cuenca',
            houseNumber: '1-12'
        }
    }
    const Student: Student = {
        course: '7B',
        ...person
        //el 3 puntos sirve para hacer una copia del objeto
        //El 3 puntos , si dentro de las dos clases es igual , si algun atributo tiene distintos valores toma el ultimo
    }
    return (
        <>
            <h3>Objetos Literales</h3>
            <pre>
                {JSON.stringify(Student, null, 2)}
            </pre>
        </>
    )
}
