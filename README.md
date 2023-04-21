# Kata TDD:  Factores primos

>**NOTA**: Kata realizada en el curso [Testing Sostenible con TypeScript](https://curso.testingsostenible.com/).

Descomponer un número natural en sus factores primos. 
Para ello, crearemos una función _primeFactors_, a la que le pasamos el número que queremos descomponer y nos devolverá un array con los factores primos, ordenados de menor a mayor.

Desarrollo con TDD y aplicando la premisa de prioridad de transformación, sin ser estrictos en los pasos, pero sí en el orden. 
Para conseguir el éxito en la generalización progresiva es fundamental escoger los ejemplos acertados en el orden adecuado. 

Ejemplos para trabajar en los tests: 

```
- 2 ⇒ [2]
- 2 * 2 ⇒ [2,2]
- 2 * 2 * 2 ⇒ [2,2,2]
- 3 ⇒ [3]
- 3 * 3 ⇒ [3,3]
- 3 * 2 ⇒ [2,3]
- 5 * 5 ⇒ [5,5]
- 5 * 7 * 11 * 3 ⇒ [3,5,7,11]
```

La propuesta de Robert C. Martin para conseguir la generalización de un código es seguir una secuencia de transformaciones. Es posible saltarse algunos pasos, pero siempre hay que seguir el orden siguiente:

1.  **{} ⇒ nil**: de no haber código a devolver nulo.
2.  **nil ⇒ constant**: de nulo a devolver un valor literal.
3.  **constant ⇒ constant+**: de un valor literal simple a uno más complejo.
4.  **constant ⇒ scalar**: de un valor literal a una variable.
5.  **statement ⇒ statements**: añadir más líneas de código sin condicionales.
6.  **unconditional ⇒ if**: introducir un condicional
7.  **scalar ⇒ array**: de variable simple a colección.
8.  **array ⇒ container**: de colección a contenedor.
9.  **statement ⇒ recursion**: introducir recursión.
10. **if ⇒ while**: convertir condicional en bucle.
11. **expression ⇒ function**: reemplazar expresión con llamada a función.
12. **variable ⇒ assignment**: mutar el valor de una variable.