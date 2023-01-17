### Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?: Es un espacio en memoria que permite almacenar un dato
- ¿Cuál es la diferencia entre declarar e inicializar una variable?: Declarar se refiere a establecer el tipo de variable y su nombre. Inicializar hace referencia al hecho de asignarle un valor
- ¿Cuál es la diferencia entre sumar números y concatenar strings?: Sumar números es igual a realizar la operación sumar. Concatenar se refiere al hecho de unir dos strings en uno solo.
- ¿Cuál operador me permite sumar o concatenar?: el operador más(+)

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido:string
- Nombre de usuario en Platzi: string
- Edad: number
- Correo electrónico: string
- Mayor de edad: booleano
- Dinero ahorrado: number
- Deudas:number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```js
let nombre;
let apellido;
let userName;
let edad;
let email;
let mayordeedad;
let savemoney;
let debts;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```js
let nombre = "Julio";
let apellido = "chavez";
let savemoney = 400;
let debts = 0;
console.log(`${nombre} ${apellido}`);
console.log(savemoney - debts);
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?: Es un trozo de código que podemos reutilizar llamando.
- ¿Cuándo me sirve usar una función en mi código?: cuando tenemos una acción que es repetitiva.
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?: Los parámetros son las variables declaras y solicitadas en nuestra función, al momento de realizar el llamado de nuestra funciones nos exigirá declarar nuestras variables que vendrían a ser nuestros argumentos de la función.

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
function print(name, lastname, nickname) {
  console.log(
    "Mi nombre es " +
      completeName +
      ", pero prefiero que me digas " +
      nickname +
      "."
  );
}

const name = "Juan David";
const lastname = "Castro Gallego";

const nickname = "juandc";

print(name, lastname, nickname);
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?: Es una palabra clave que en función de si cierta acción es cierta o falsa ejecutará un trozo de código difente.
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?: If, switch. Sitch evalua diferentes casos. e if else realiza una opción o no dependiendo del resultado de la expresión que queremos evaluar.
- ¿Puedo combinar funciones y condicionales?: Claro

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}

const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion == "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
} else {
  console.log("No tienes ninguna suscripción");
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?: Es una forma de repetir cierto trozo de código mientras se cumplan ciertas condiciones.
- ¿Qué tipos de ciclos existen en JavaScript? for y while
- ¿Qué es un ciclo infinito y por qué es un problema?: Es un ciclo que nunca termina, y el problema está en el porque el programa nunca puede salir de él.
- ¿Puedo mezclar ciclos y condicionales?: claro

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}
//solution
let i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}
let i = 10;
while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```js
var input = 0;
while (input != 4) {
  alert("No es correcto, vuelve a intentarlo");
  input = prompt(" Cuanto es la suma 2+2");
}
aler("Respondiente bien");
```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?: es un tipo de datos que permite almacenar difentes tipos de datos ordenados por un indice
- ¿Qué es un objeto?: es un tipo de dato que permite guardar en un mismo objeto diferentes datos, que están caracterizados por sus llaves
- ¿Cuándo es mejor usar objetos o arrays?: Arrays cuando queremos trabajar con datos ordenados. Objetos para modelar algo de la vida real que tiene diferentes caracteristcas.
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?: Podemos crear arrys que contengan objetos dentro. Y un atributo de un objeto puede ser perfectamente un array.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js
function arrayfunction(array) {
  console.log(array[0]);
}
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
function arrayfunction(array) {
  for (let item in array) {
    console.log(item);
  }
}
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js
function imprimirElementoPorElementoObjeto(obj) {
  const arr = Object.values(obj);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```
