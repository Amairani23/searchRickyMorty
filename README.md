🚀 Character Explorer

Aplicación web desarrollada con React y Tailwind CSS para buscar y explorar personajes de Rick and Morty. Permite consultar información, filtrar por estado y especie, y navegar entre páginas de resultados utilizando una API pública.

[Demo: https://rickymortyarra.netlify.app/](https://rickymortyarra.netlify.app/ "Demo: https://rickymortyarra.netlify.app/")

### Características

- Búsqueda de personajes por nombre.
- Tarjetas con imagen, nombre, estado, especie y tipo.
- Filtros por estado y especie.
- Paginación para navegar entre resultados.
- Indicadores de carga y manejo de errores.
- Diseño responsive adaptable a diferentes dispositivos.
- Actualización dinámica de resultados sin recargar la página.

### 🛠️ Tecnologías utilizadas

- React: creación de interfaces mediante componentes reutilizables.
- JavaScript (ES6+): lógica de la aplicación y manipulación de datos.
- Tailwind CSS: diseño y estilos mediante clases utilitarias.
- Vite: herramienta de desarrollo y construcción del proyecto.
- Fetch API: solicitudes HTTP para obtener datos externos.
- Rick and Morty API: fuente de información de los personajes.
- React Hooks (useState, useEffect): gestión del estado y efectos secundarios.

### 📦 Instalación

Requisitos previos
Node.js y npm instalados.
Conexión a internet para consultar la API.

1. Clonar el repositorio
   git clone <URL_DEL_REPOSITORIO>

2. Entrar en la carpeta del proyecto
   cd character-explorer

3. Instalar las dependencias
   npm install

Si todavía no has configurado Tailwind CSS, puedes instalarlo con Vite mediante:

npm install tailwindcss @tailwindcss/vite

Configura el plugin de Tailwind en vite.config.js y agrega @import "tailwindcss"; en tu archivo CSS principal.

4. Ejecutar el proyecto
   npm run dev

Abre en el navegador la dirección local que indique Vite en la terminal.

🔄 Gestión de datos con useEffect

Se utiliza useEffect para consultar la API cuando cambian los filtros de búsqueda o la página actual.

- URLSearchParams: construye los parámetros de consulta.
- Fetch API: obtiene los datos de los personajes.
- Estados de React: actualizan los resultados, la paginación y los indicadores de carga.
- Manejo de errores: utiliza try/catch/finally para controlar errores y finalizar la carga.
- AbortController: cancela solicitudes anteriores cuando cambian las dependencias o se desmonta el componente.

Esto permite actualizar los resultados dinámicamente sin recargar la página.

### 📚 Aprendizajes

Durante el desarrollo de este proyecto se practicaron los siguientes conceptos:

- Creación y reutilización de componentes en React.
- Comunicación entre componentes mediante props.
- Gestión del estado con useState.
- Uso de useEffect para ejecutar efectos secundarios.
- Consumo de APIs REST mediante fetch y procesamiento de respuestas JSON.
- Implementación de búsquedas, filtros y paginación.
- Manejo de estados de carga y errores.
- Cancelación de solicitudes HTTP con AbortController.
- Diseño responsive utilizando Tailwind CSS.
- Organización del código en una estructura modular y mantenible.

### 🌐 API utilizada

Rick and Morty API: https://rickandmortyapi.com/

Documentación: https://rickandmortyapi.com/documentation

### Objetivo del proyecto

Este proyecto fue desarrollado con fines educativos para practicar React, el consumo de APIs, la creación de componentes reutilizables y el diseño de interfaces modernas con Tailwind CSS.
