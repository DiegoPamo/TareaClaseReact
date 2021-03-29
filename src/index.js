import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Content from './components/Content';


const App = () => {

  const datos = [
    {
      pelicula : 'Lo que callamos',
      imagen : 'https://i.blogs.es/d0423d/espinof-las-peores-peliculas-de-2017-montaje-jlcaviaro/2560_3000.jpg',
      descripcion : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      calificacion : 10
    },
    {
      pelicula : 'Avengers EndGame Ultima Pelicula',
      imagen : 'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-15.jpg',
      descripcion : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      calificacion : 7
    },
    {
      pelicula : 'El silencio de los ino..',
      imagen : 'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-16.jpg',
      descripcion : 'This card has supporting text below as a natural lead-in to additional content.',
      calificacion : 8
    },
    {
      pelicula : 'Titans Begins',
      imagen : 'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-14.jpg',
      descripcion : 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
      calificacion : 6
    },
    {
      pelicula : 'Game is this',
      imagen : 'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-11.jpg',
      descripcion : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      calificacion : 9
    },
    {
      pelicula : 'Hasta el cielo',
      imagen : 'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-10.jpg',
      descripcion : 'This card has supporting text below as a natural lead-in to additional content.',
      calificacion : 10
    },
    {
      pelicula : 'El sotano',
      imagen : 'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-6.jpg',
      descripcion : 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
      calificacion : 9
    },
    {
      pelicula : 'Hasta el ultimo hombre',
      imagen : 'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-4.jpg',
      descripcion : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      calificacion : 7
    },
    {
      pelicula : 'Por siempre',
      imagen : 'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-5.jpg',
      descripcion : 'This card has supporting text below as a natural lead-in to additional content.',
      calificacion : 6
    },
    {
      pelicula : 'La Villa',
      imagen : 'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-8.jpg',
      descripcion : 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
      calificacion : 8
    }
  ]

  return (
  <div>
    <Navbar/>
    <Content datos={datos}/>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
