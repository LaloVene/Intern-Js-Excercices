### Preguntas

- ¿Qué es lo que más te gusta sobre Javascript? ¿Qué es lo que menos te gusta?
  Si has usado o conoces Typescript, ¿cómo mejora o empeora la experiencia de desarrollo?

    Lo que más me gusta es que es facil de usar desde un principio y tiene un ecossistema muy grande,
  por lo que siempre hay algun modulo que facilite el trabajo. Lo que no veo correcto en el lenguaje
  es que haya tantas formas de hacer las cosas en vez de solo una, eso incrementa la complejidad y
  solo hace más tardado el proceso de aprendizaje.

    No conozco mucho typescript, sin embargo, se que tiene una mejor estructura y organización en
  programación orientada a objetos.

- ¿Has usado React o Vue? ¿Cómo compararías desarrollar una aplicación web con alguno de
  estos frameworks vs hacerlo sólo usando Javascript y el DOM?

    Sigo aprendiendo React, pero lo que ayuda mucho a React es que utiliza un DOM virtual, por lo que
  la carga de lo que se despliega en pantalla es más rapida y sencilla de manipular.

- Si has usado React o Vue, ¿usaste alguna estrategia, arquitectura o framework para manejar
  el estado de la aplicación?

    No, sigo aprendiendo a utilizar React.

- ¿Has usado un ORM? Si es así, menciona sus ventajas y desventajas.

    Solo los he visto en la escuela, las ORM son más practicas de utilizar, ya que pueden ser utilizadas
  dentro de un lenguaje de programación convencional como JS y comportarse como si fueran objetos,
  por lo que facilita un poco su manejo. Sus desventajas es que por lo general son más lentas, pero no
  conozco mucho del tema en verdad.

- Explica el N+1 query problem (en el contexto de un backend que se comunica a una base de datos)
  [Esta es muy nice to have, no espero que los candidatos la sepan].
  
    La verdad no lo conocía, pero investigue un poco.
  El problema N+1 sucede cuando se tiene una relación 1 a muchos y se quiere iterar por esos datos.
  Si se itera de manera convencional se harían n+1 queries, donde n es el número de busquedas que se
  desean realizar en el hijo y 1 es el padre. Por lo que hacer esto es altamente ineficiente y podría
  llegar a sobrecargar la base de datos, ya que el incremento en el tiempo de busqueda de estos datos es
  linear.
  Esto se puede resolver utilizando un Includes Method. Este metodo utiliza unconcepto llamado Eager Loading,
  el cual funciona al precargar las busquedas del hijo y guardandolas en cache, eliminando la necesidad de
  hacer ping con la base de datos una y otra vez. Por lo que en vez de hacer n+1 busquedas, solo se harían 2,
  logrando un tiempo de ejecución casi constante cuando se incrementan las busquedas.