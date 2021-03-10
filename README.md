# Bucles en Javascript

En Javascript existen diferentes variantes del bucle **for** en Javascript. Este repositorio esta destinado al estudio del tiempo de ejecución para los bucles **for**, **for-in**, **for-of**, **forEach**. Aunque estas cuatro sentencias sean parecidas, su comportamento no es exactamente el mismo.

___
## *for* y *for-in*
Estos bucles le dan al usuario acceso al índice del elemento que se está recorriendo.

```js
for (let element = 0; element < array.length;element++) {
  array[element] = element + 1;
}
```

```js
for (let element in array) {
  array[element] = 1;
}
```

En especial, hay que tener en cuenta que los bucles *for-in* se usan para recorrer las propiedades de los objetos, por lo que no se debe esperar que los elementos se recorran en orden, ya que los objetos no lo tienen. Se recomienda usar otro tipo de bucles a la hora de trabajar con arrays.

___
## *for-of*
Por otro lado, esta sentencia le da acceso al usuario directamente al elemento como tal.

```js
for (let element of array) {
  element = 1;
}
```

___
## *forEach*
La sentencia **forEach**, le permite al usuario acceder de primeras al elemento directamente como se había visto hasta ahora:

```js
array.forEach(element => element = 1);
```

aunque también es posible acceder al índice añadiendo un argumento más:

```js
array.forEach((element, index) => element += index );
```

Cabe destacar que la sentencia *forEach* sirve para recorrer pero no para modificar valores. En nuestro caso *element* es una copia de el elemento original. Existen otros métodos para esto.

___
## Tiempo de ejecución
En internet hay numerosas opiniones al respecto, pero... ¿Qué sentencia es la más adecuada? Para encontrar una respuesta a esta pregunta en terminos de velocidad, se han creado [diferentes funciones](src/loops.js), una para cada una de las variantes del bucle for. Dentro de estas funciones se mide el tiempo que tarda la sentencia en recorrer un array dado. También se ha lanzado una página web para poder observar el comportamiento en diferentes navegadores. Los entornos donde se ha ejecutado el código son **Node**, **Chrome** y **Safari**. 

Para esta investigación, se ha utilizado un array con *10.000.000* elementos y se han ejecutado múltiples veces la misma sentencia, para poder sacar la media y que así los resultados sean más significativos. Los resultados, **en milisegundos**, fueron los siguientes:


|        	 |      for     	|       for-in       |      for-of     	|      forEach     	|
|:------:	 | ------------:	| ------------------:| ---------------:	| ----------------:	|
| **Node** | 27,3997880936 	|  5977,20182132720  | 340,09828062057 	| 174,6520777702330 |
|**Safari**| 18,2000000000 	|  7011,00000000000  |  28,99999999999 	|  13,4000000000175 |
|**Chrome**|  6,6249999996 	|  2294,51900000071  |   4,36100000006 	|  67,3810000000172 |


___
## Conclusión
A mi sorpresa, la rapidez de cada una de las sentencias varía de un entorno a otro. En *Node*, parece ser que el **for** clásico es con diferencia el más veloz en comparación con los demás. En *Safari*, la sentencia más rápida es la misma, incluso se ejecutan los bucles en menos tiempo que en *Node*, menos para la sentencia **for-in** que tiene un comportamiento mucho mas lento en *Safari*. En *Chrome*, estos resultados cambian y muestran como la sentencia **for-of** es la más rápida, ya no solo en este navegador sino en en comparación con el resto de entornos también.

Si analizamos los diferentes entornos entre ellos, se ve claramente que **Chrome** tiene una mayor rapidez a la hora de recorrer bucles grandes.

En conclusión, esta pequeña investigación me ha servido para tener en cuenta para ocasiones futuras que dependiendo de en qué entorno se vaya ejecutar mi código, es mejor usar una sentencia u otra. También cabe destacar que realmente, con bucles pequeños y códigos poco complejos tampoco se va a notar mucho la diferencia, pero es bueno saber este tipo de curiosidades para mejorar la ejecución cuando el código a implementar sea más robusto.