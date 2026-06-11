# Desafío: Ruleta Sin Repetir

## El Objetivo
Actualmente, nuestra ruleta es completamente al azar. Esto significa que un estudiante puede salir seleccionado dos o tres veces seguidas mientras otros no juegan. 

El desafío es modificar el código para que cada participante salga una sola vez. Cuando un alumno sea seleccionado, debemos sacarlo de la lista de espera. Si la lista se queda vacía (es decir, ya pasaron todos), debemos mostrar el mensaje ¡Todos participaron! y reiniciar el juego.

---

## Conceptos Clave que Necesitas Saber

Para resolver este problema, vas a necesitar una herramienta para eliminar elementos y una propiedad para saber cuántos quedan.

### 1. El método splice
Este método de los arreglos nos permite eliminar un elemento a partir de su posición o índice. 

La sintaxis es: arreglo.splice(indice, cantidad)

Por ejemplo, si tenemos un arreglo de frutas:
```js 
let frutas = ["manzana", "platano", "frutilla"]; 
```

Si queremos eliminar "platano", que está en el índice 1, hacemos:
```js 
frutas.splice(1, 1);  
```

Ahora el arreglo frutas solo contiene: 
```js 
["manzana", "frutilla"]
```

### 2. La propiedad length
Recuerda que `.length` nos dice cuántos elementos tiene un arreglo en un momento dado. Si un arreglo se queda completamente vacío, su `.length` será exactamente 0.

---

## Pistas Paso a Paso

No intentes escribir todo el código de un tirón. Ve resolviendo estas pequeñas preguntas en tu script:

### Pista 1: ¿De dónde sacamos el índice?
En tu función actual, ya estás calculando la posición del participante ganador dentro del evento click. Revisa la variable index o cómo recuperas al participante. Necesitas ese número de índice para poder usar el método splice más adelante.

### Pista 2: Modifica el arreglo
Justo después de guardar el nombre del participante seleccionado en una variable, usa el método splice para eliminarlo del arreglo participantes. 

Pregunta para pensar: Si eliminas un elemento, ¿qué le pasará al tamaño (`.length`) del arreglo participantes la próxima vez que hagas clic?

### Pista 3: ¿Qué pasa cuando no queda nadie?
Antes de elegir un participante al azar, debes asegurarte de que todavía quede alguien en la lista. 

Crea una estructura condicional (`if`):
- Si el largo del arreglo es igual a 0: significa que ya jugaron todos. Muestra el mensaje "¡Todos participaron!" en la pantalla.
- Si no (`else`): continúa con la lógica habitual de elegir al azar y mostrar el nombre.

### Pista 4: El gran truco para reiniciar (Fácil)
Como eliminamos elementos directamente del arreglo original, cuando llegue a cero la ruleta se detendrá. Para cumplir con el requerimiento de reiniciar la lista de forma simple, puedes usar un comando que recarga la página web por completo, lo que vuelve a dejar el arreglo con sus 25 alumnos originales:

```js
window.location.reload();
```

Puedes hacer que esto ocurra automáticamente un par de segundos después de mostrar el mensaje de éxito o que cuando no hayan más participantes se agregue un botón que ejecute esta línea de código.