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