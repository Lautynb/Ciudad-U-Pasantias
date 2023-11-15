# Ciudad Universitaria (CU) Proyecto
Bienvenido al repositorio oficial del proyecto Ciudad Universitaria (CU). Este proyecto es una colaboración con la municipalidad con el objetivo de mejorar la estancia de los estudiantes universitarios en todo el país. Proporcionamos una variedad de descuentos en comida, ropa, entretenimiento y otros beneficios para hacer la experiencia universitaria más accesible y enriquecedora.

## Aspectos Cubiertos en Este Proyecto
En este repositorio, nos enfocamos en los siguientes aspectos de la plataforma:

## Frontend de Ciudad Universitaria
Nos dedicamos al desarrollo del frontend de la plataforma Ciudad Universitaria, asegurándonos de que la interfaz sea intuitiva, atractiva y fácil de navegar. Implementamos las mejores prácticas de diseño y experiencia de usuario para crear un entorno digital agradable.

## Maquetado de la Página
Utilizamos tecnologías web estándar, como JavaScript (.js), HTML (.html), y CSS (.css), para el maquetado de la página. Este enfoque garantiza una estructura sólida y consistente, permitiendo una visualización adecuada en diferentes dispositivos.
## Installation

Para previsualizar la página solo tienes que descargar la carpeta del proyecto 

## Usage
______
### Barra de Navegacion
Esta barra se coloca en todas las paginas en algunas cambiando los colores principales pero nada mas.

```html
<header>
    <div class="barra_inicio">
        <header>
          <nav>
            <div class="logo">
              <img width='80' height='70' src='./image/LogoCU.png'>
              <img width='200' height='70' src='./image/logo2.PNG'>
            </div>
            <ul>
    
              <li><a href="/Home.html">Inicio
                  <hr>
                </a></li>
    
                <li><a href="/Ciudad_UC.html">Nosotros</a></li>
    
              <li><a href="/Beneficios.html">Beneficios</a></li>
    
              <li><a href="/Mercado_U.html">Adheri tu Comercio</a></li>
    
              <li><a href="#"></a>Ùnite</li>
    
            </ul>
            <div class="botonesIR">
              <button><a href="/Est-Com Login.html"><b> Iniciar Sesion</a></button>
              <button><a href="#">Registro</b></a></button>
            </div>
          </nav>
    
        </header>
      </div>
</header>
```
```css
body{
  margin-top: -10px;
    border-top: 0px;
    padding-top: 0px;
      }
      
  .botonesIR {
    display: flex;
    float: right;
    text-align: center;
    margin-right: 18%;
    padding-top: 30px;
    padding-right: 0px;
    padding-right: 0px;
    margin-left: 40px;
  }

  .logo {
    float: left;
    margin-left: px;
    padding-top: 15px;
    margin-left: 20px;
    padding-right: 40px;
    padding-right: 40px;
  }

  header {
    background: #ffffff;
    width: 120%;
    height: 10%;
    position: fixed;
    z-index: 100;
    margin-left: -10px;
  }

  nav ul {
    float: left;
    margin-left: 150px;
    list-style: none;

  }

  nav ul li {
    float: left;
    color: #EF5036;
    font-family: Arial, Helvetica, sans-serif;
    ;
    padding: 20px;
    font-size: 20px;
    cursor: pointer;
  }

  nav ul li a {

    display: block;
    padding: 0px;
    color: #ff7b00;
    text-decoration: none;
  }

  nav ul li:hover {
    background: #ec5f0065;
  }

  .barra_inicio hr {
    padding: 0px;
    margin: 0%;
    height: 3px;
    background-color: #EF5036;
    border: none;
  }
  button {

    background-color: #EF5036;
    
    color: white;
    
    border: none;
    
    padding: 5px 10px;
    
    cursor: pointer;
    
    text-align: center;
    
    text-decoration: none;
    
    display: inline-block;
    border-radius: 5px;
    font-size: 20px;
    
    margin: 4px 2px;
    
    transition-duration: 0.4s;
    
    }
    
    
    button:hover {
    
    background-color: #ffffff;
    
    color: #EF5036;
    
    }
    a {
    text-decoration: none;
    color: white;
    }
    button:hover a{
    text-decoration: none;
    transition-duration: 0.4s;
    color: #EF5036;
    }


```
___

## Contribuciones y Desarrollo
¡Apreciamos tu interés en contribuir al proyecto! Si deseas colaborar, por favor sigue nuestras pautas de contribución detalladas en el archivo CONTRIBUTING.md.

## Problemas o Sugerencias
Si encuentras algún problema o tienes sugerencias para mejorar la plataforma, por favor abre un issue en este repositorio. Estamos comprometidos a hacer de Ciudad Universitaria un recurso valioso para la comunidad estudiantil.

Gracias por ser parte de este proyecto.
