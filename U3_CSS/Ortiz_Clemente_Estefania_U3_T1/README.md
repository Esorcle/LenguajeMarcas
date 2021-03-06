# **LM_U3_T1_CSS_Basics_1920**

## _EJERCICIO 1: (ej1.html y ej1.css)_
---

Dada la siguiente tabla:
```
<table>
      <tr><td>Pepe</td><td>@pepeman</td><td>111-222</td></tr>
      <tr><td>Manuel</td><td>@manuelman</td><td>333-4444</td></tr>
      <tr><td>Lola</td><td>@lolaman</td><td>555-6666</td></tr>
      <tr><td>Sara</td><td>@saraman</td><td>777-8888</td></tr>
 </table>
```
1. Añadir los estilos en el fichero ej1.css para que las filas pares y las impares tengan diferente color de fondo (even - odd)
2. El borde de las filas de la tabla sólo debe ser el inferior. Dale el tamaño que desees.
3. Añadir una cabecera a la tabla que tenga un color de fondo negro y un color de letra blanco. (Deberás modificar ligeramente el HTML).
4. Hacer que cuando paso el ratón por las filas cambie su color de fondo y el color de su texto.


## _EJERCICIO 2: (ej2.html, ej2.css)_
---

Realiza el HTML y CSS necesario para conseguir una página similar a la siguiente:

![ Imagen ejercicio2](ej2.png)

Fuente: http://desarrolloweb.dlsi.ua.es/cursos/2011/html5-css3/css-exercises

## _EJERCICIO 3: (ej3.html y ej3.css)_
---

Dado el siguiente código HTML:
```
<img src="exercise1_solution_files/logo.gif" alt="GirlDevelopIt Logo" width="300">

  <h1>About</h1>
 
  <p>It can be intimidating for women to learn and ask questions when they are in an <strong>extreme minority</strong>. While open and welcoming, today's budding developer community is up to <strong>91% male</strong>. If we can empower more females with the confidence in their technological capabilities <em>we can begin to change this landscape</em>.
  </p>

  <h2>Our Locations</h2>
  <ul>
   <li>USA
     <ul>
      <li><a href="http://meetup.com/girldevelopit">New York</a></li>
      <li><a href="http://www.meetup.com/girldevelopitcbus">Columbus</a></li>
      <li><a href="http://www.meetup.com/Girl-Develop-It-Austin">Austin</a></li>
      <li><a href="http://www.meetup.com/Girl-Develop-It-Philadelphia/">Philly</a></li>
     </ul>
   </li>
   <li>World
     <ul>
      <li><a href="http://www.meetup.com/Girl-Develop-It-Ottawa">Ottawa</a></li>
      <li><a href="http://www.meetup.com/girldevelopit-sydney">Sydney</a></li>
     </ul>
   </li>
  </ul>

  <h2>Upcoming Classes</h2>
  <table border="1">
   <thead>
    <tr>
     <th>Location</th>
     <th>Topic</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td class="location">New York</td>
     <td>JavaScript &amp; jQuery</td>
    </tr>
    <tr>
      <td class="location">New York</td>
      <td>HTML &amp; CSS</td>
    </tr>
   </tbody>
  </table>

  <h2>Sign Up!</h2>
  <form action="mailto:youraddress@gmail.com" enctype="text/plain" method="post">
    <label>Name: <input class="required" name="name" type="text"></label>
    <br>
    <label>Email: <input class="required" name="email" type="email"></label>
    <br>
    <label>Location:
      <select name="location">
        <option selected="selected" value="sf">San Francisco</option>
        <option value="nyc">New York</option>
      </select></label>
    <br>
    <fieldset>
      <legend>Gender:</legend>
      <label for="female">Female</label>
      <input name="gender" id="female" value="female" type="radio">
      <label for="male">Male</label>
      <input name="gender" id="male" value="male" type="radio">
    </fieldset>
    <br>
    <label>Experience:
    <br>
    <textarea name="experience"></textarea> 
    </label>
    <br>
    <button type="submit">Sign Up</button>
  </form>
  
  <br><br>
  <a id="twitter" href="http://twitter.com/girldevelopit">Twitter</a> | <a href="http://www.facebook.com/girldevelopit">Facebook</a> | <a href="http://www.flickr.com/photos/40453677@N00/sets/72157626841092971/">Flickr</a>
  ```

Añadir los estilos para conseguir la siguiente imagen:

![ Imagen ejercicio3](ej3.png)

Imagen para el logo:

![ Imagen ejercicio3Logo](logo.gif)

Fuente: http://geospatialtraining.com/htmlcssjavascript-for-complete-beginners/

* NOTA: PARA LA CREACIÓN DE LOS ESTILOS INTENTAD UTILIZAR LOS MÍNIMOS SELECTORES POSIBLES
