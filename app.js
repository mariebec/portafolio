/* Menu */
document.addEventListener('DOMContentLoaded',  () => {
  const sidenav = document.querySelectorAll('.sidenav');
  let instancia_sidenav = M.Sidenav.init(sidenav,{});
});

/* Tech skills */
const techContainer = document.querySelector('.technologies');

const arrTech = [
  { 
    name: 'HTML',
    logo: '<i class="fab fa-html5" data-icon="logos-jest" data-inline="false"></i>'
  },
  { 
    name: 'CSS3',
    logo: '<i class="fab fa-css3-alt" data-icon="logos-jest" data-inline="false"></i>'
  },
  { 
    name: 'Sass',
    logo: '<i class="fab fa-sass" data-icon="logos-jest" data-inline="false"></i>'
  },
  { 
    name: 'JavaScript',
    logo: '<i class="fab fa-js" data-icon="logos-jest" data-inline="false"></i>'
  },
  { 
    name: 'React',
    logo: '<i class="fab fa-react" data-icon="logos-jest" data-inline="false"></i>'
  },
  { 
    name: 'Firebase',
    logo: `<svg version="1.1" class="svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="42px" height="42px" viewBox="0 0 42 42" enable-background="new 0 0 42 42" xml:space="preserve">
      <path fill="#6F6F6F" d="M12.357,0.548c-0.151-0.284-0.463-0.444-0.782-0.4c-0.318,0.044-0.576,0.281-0.645,0.595
      C9.515,9.565,8.099,18.388,6.684,27.21c3.418-6.091,6.836-12.182,10.254-18.273c-1.528-2.799-3.057-5.598-4.584-8.396"/>
      <path fill="#6F6F6F" d="M20.079,6.589c0.324-0.579,1.162-0.567,1.469,0.021c1.038,1.984,2.076,3.969,3.114,5.953
      C18.563,18.736,12.464,24.908,6.366,31.08C10.937,22.916,15.507,14.752,20.079,6.589z"/>
      <path fill="#6F6F6F" d="M21.852,41.555c4.614-2.589,9.229-5.179,13.843-7.768c-1.279-8.127-2.557-16.254-3.835-24.381
      c-0.101-0.634-0.878-0.887-1.333-0.431C22.29,17.249,14.052,25.525,5.815,33.8c4.633,2.586,9.267,5.172,13.9,7.757
      C20.379,41.928,21.188,41.927,21.852,41.555z"/>
    </svg>`
  },
  { 
    name: 'Jest',
    logo:`<svg version="1.1" id="Default" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="42px" height="42px" viewBox="0 0 42 42" enable-background="new 0 0 42 42" xml:space="preserve">
      <path fill="#6F6F6F" d="M-32.268,0.407c-0.151-0.284-0.463-0.444-0.782-0.4c-0.318,0.044-0.576,0.281-0.645,0.595
      c-1.416,8.823-2.831,17.645-4.247,26.468c3.418-6.091,6.836-12.182,10.254-18.273c-1.528-2.799-3.057-5.598-4.584-8.396"/>
      <path fill="#6F6F6F" d="M-24.546,6.448c0.324-0.579,1.162-0.567,1.469,0.021c1.038,1.984,2.076,3.969,3.114,5.953
      c-6.099,6.172-12.198,12.344-18.296,18.517C-33.688,22.775-29.118,14.612-24.546,6.448z"/>
      <path fill="#6F6F6F" d="M-22.773,41.414c4.614-2.589,9.229-5.179,13.843-7.768c-1.279-8.127-2.557-16.254-3.835-24.381
      c-0.101-0.634-0.878-0.887-1.333-0.431c-8.237,8.275-16.475,16.551-24.712,24.826c4.633,2.586,9.267,5.172,13.9,7.757
      C-24.246,41.788-23.437,41.787-22.773,41.414z"/>
      <g>
      <path fill="#6F6F6F" d="M37.068,20.588c0-2.149-1.743-3.892-3.893-3.892c-0.138,0-0.274,0.007-0.409,0.021L38.112,0.95H15.394
      l5.338,15.754c-0.078-0.005-0.157-0.008-0.236-0.008c-2.149,0-3.892,1.743-3.892,3.892c0,1.737,1.139,3.209,2.71,3.709
      c-0.83,1.438-1.875,2.732-3.061,3.852c-1.612,1.521-3.458,2.675-5.454,3.386c-2.377-1.221-3.499-3.936-2.486-6.316
      c0.114-0.269,0.231-0.541,0.342-0.813c1.722-0.402,3.005-1.946,3.005-3.79c0-2.15-1.742-3.892-3.892-3.892
      s-3.893,1.742-3.893,3.892c0,1.318,0.656,2.482,1.659,3.187c-0.963,2.193-2.379,4.489-2.821,7.149
      c-0.528,3.188-0.001,6.574,2.756,8.484c6.423,4.452,13.395-2.759,20.745-4.572c2.664-0.657,5.588-0.551,7.936-1.911
      c1.762-1.021,2.924-2.712,3.254-4.612c0.326-1.876-0.149-3.745-1.241-5.259C36.728,22.408,37.068,21.538,37.068,20.588
      L37.068,20.588z M24.387,20.602c0-0.004,0.001-0.009,0.001-0.014c0-1.411-0.752-2.647-1.876-3.33l4.249-8.592l4.256,8.683
      c-1.045,0.698-1.734,1.888-1.734,3.239c0,0.028,0.001,0.057,0.002,0.085L24.387,20.602L24.387,20.602z"/>
      <path fill="#FFFFFF" d="M38.018,20.588c0-2.364-1.704-4.337-3.947-4.758L39.438,0H14.067l5.375,15.862
      c-2.166,0.482-3.79,2.417-3.79,4.726c0,1.734,0.916,3.257,2.29,4.113c-0.66,0.984-1.444,1.91-2.342,2.757
      c-1.423,1.343-3.009,2.361-4.719,3.031c-1.722-1.082-2.45-3.122-1.693-4.898l0.059-0.139c0.037-0.087,0.074-0.174,0.111-0.262
      c1.892-0.66,3.253-2.46,3.253-4.573c0-2.67-2.173-4.843-4.844-4.843c-2.67,0-4.843,2.173-4.843,4.843
      c0,1.348,0.554,2.568,1.446,3.447c-0.162,0.345-0.332,0.694-0.507,1.053c-0.815,1.675-1.739,3.572-2.088,5.68
      c-0.694,4.186,0.426,7.532,3.152,9.421c1.654,1.146,3.335,1.598,5.026,1.598c3.184,0,6.405-1.599,9.556-3.164
      c2.269-1.127,4.615-2.292,6.933-2.864c0.862-0.213,1.75-0.341,2.689-0.477c1.862-0.269,3.789-0.546,5.495-1.534
      c1.978-1.146,3.332-3.067,3.714-5.272c0.329-1.893-0.067-3.788-1.031-5.396C37.759,22.375,38.018,21.512,38.018,20.588
      L38.018,20.588z M36.117,20.588c0,1.622-1.32,2.942-2.942,2.942c-1.622,0-2.941-1.32-2.941-2.942c0-1.622,1.32-2.942,2.941-2.942
      C34.797,17.646,36.117,18.967,36.117,20.588L36.117,20.588z M36.786,1.901l-4.74,13.979c-0.205,0.049-0.406,0.111-0.6,0.187
      l-4.682-9.552l-4.696,9.495c-0.203-0.07-0.412-0.127-0.626-0.171L16.719,1.901H36.786L36.786,1.901z M20.496,17.646
      c1.622,0,2.941,1.32,2.941,2.942c0,1.622-1.319,2.942-2.941,2.942s-2.941-1.32-2.941-2.942
      C17.554,18.967,18.874,17.646,20.496,17.646L20.496,17.646z M7.768,17.675c1.622,0,2.942,1.32,2.942,2.942
      c0,1.622-1.32,2.942-2.942,2.942c-1.622,0-2.941-1.32-2.941-2.942C4.826,18.995,6.146,17.675,7.768,17.675L7.768,17.675z
      M36.467,28.181c-0.287,1.648-1.305,3.089-2.794,3.952c-1.388,0.804-3.052,1.044-4.814,1.298c-0.943,0.136-1.919,0.277-2.872,0.512
      c-2.521,0.622-4.962,1.834-7.323,3.007c-4.725,2.347-8.805,4.374-12.653,1.707c-2.818-1.954-2.688-5.568-2.359-7.548
      c0.304-1.835,1.127-3.524,1.922-5.159c0.138-0.283,0.272-0.56,0.403-0.835c0.395,0.158,0.814,0.266,1.252,0.315
      c-0.81,2.672,0.463,5.579,3.136,6.952l0.366,0.188l0.387-0.138c2.114-0.753,4.061-1.96,5.788-3.59
      c1.117-1.053,2.076-2.219,2.865-3.464c0.236,0.036,0.479,0.055,0.725,0.055c2.67,0,4.843-2.172,4.843-4.843
      c0-1.436-0.629-2.727-1.625-3.615l3.043-6.154l3.074,6.271c-0.922,0.883-1.499,2.124-1.499,3.498c0,2.671,2.173,4.843,4.843,4.843
      c1.027,0,1.979-0.322,2.762-0.868C36.481,25.678,36.684,26.932,36.467,28.181L36.467,28.181z"/>
    </g>
    </svg>`
  },
  { 
    name: 'Git',
    logo: '<i class="fab fa-git-alt" data-icon="logos-jest" data-inline="false"></i>'
  },
  { 
    name: 'Github',
    logo: '<i class="fab fa-github-square" data-icon="logos-jest" data-inline="false"></i>'
  },
  { 
    name: 'Figma',
    logo: '<i class="fab fa-figma" data-icon="logos-jest" data-inline="false"></i>'
  },
];

arrTech.forEach((element) => {
  const eachTech = document.createElement('div');
  eachTech.innerHTML = `
    <div class="each-tech p-gray">
      ${element.logo}
      <p class="p-light">${element.name}</p>
    </div>
  `
  techContainer.appendChild(eachTech);
});

/* Projects cards */

const projectsContainer = document.querySelector('.cards-container');

const arrProjects = [
  {
    title: 'PokePedia',
    img: 'assets/pokepedia-mockup-cel.jpg',
    description1: 'Pokepedia es una página web para jugadores de Pokemon Go y fánaticos de la serie de televisión, se puede encontrar información sobre cada uno de los pokemones, sus evoluciones, ataques, tipo y más!',
    description2: 'El proceso del proyecto inició con la investigación del tema con usuarios reales para detectar qué información debería aportar la página, luego se realizaron prototipos de baja y alta fidelidad para obtener feedbak e iterar las propuestas de diseño, finalmente pasamos a la parte divertida, el código.',
    tech: 'vanillaJs, CSS, Jest, Figma, Trello',
    btn: `
    <div class="btn-container">
      <a class="btn-small p-btn p-0 glego grey darken-1" href="https://mariebec.github.io/LIM012-data-lovers/src/" target="_blank" rel="noopener">Deploy</a>
      <a class="btn-small p-btn p-0 glego grey darken-1" href="https://github.com/mariebec/LIM012-data-lovers" target="_blank" rel="noopener">Código</a>
    </div>
    `,
  },
  {
    title: 'Voz amiga',
    img: 'assets/vozamiga-redsocial.jpg',
    description1: 'Voz amiga es una red social para mujeres, donde tienen un espacio seguro para expresar sus ideas y encontrar apoyo.',
    description2: 'El proyecto se trata de una SPA desarrollado con vanillaJs. Se utilizó Firebase para la autenticación, persistencia de datos y almacenamiento de imágenes.',
    tech: 'vanillaJs, CSS, Firebase, Jest, Figma, Github Projects',
    btn: `
    <div class="btn-container">
      <a class="btn-small p-btn p-0 glego grey darken-1" href="https://mariebec.github.io/LIM012-fe-social-network/src/" target="_blank" rel="noopener">Deploy</a>
      <a class="btn-small p-btn p-0 glego grey darken-1" href="https://github.com/mariebec/LIM012-fe-social-network" target="_blank" rel="noopener">Código</a>
    </div>
    `,
  },
  {
    title: 'Md-links',
    img: 'assets/md-links.jpg',
    description1: 'Mdlinks es una librería que lee archivos con formato markdown, detecta los enlaces que contiene, a partir de esto obtener los estatus y realizar estadísticas.',
    description2: 'Se puede importar como módulo en un proyecto, como así también posee una Interfaz de Línea de Comandos.',
    tech: 'Nodejs, Axios, Jest, Github Projects',
    btn: `
    <div class="btn-container">
      <a class="btn-small p-btn p-0 glego grey darken-1" href="https://github.com/mariebec/LIM012-fe-md-links" target="_blank" rel="noopener">Código</a>
    </div>
    `,
  },
  {
    title: 'Burger Queen',
    img: 'assets/burgerqueen-mock-tablet.jpg',
    description1: 'Burger queen es una aplicación web para un restaurante de comida rápida y para ser usada en tablets. Sirve como sistema para tomar los pedidos de los clientes y hacer el seguimiento de la orden desde el inicio del proceso hasta la entrega. También posee una sección para el administrador donde se gestiona los usuarios y los productos del menú.',
    description2: 'Para este proyecto inicialmente fue necesario hacer el mock de una API, para luego consumir una API real desarrollada por otro equipo de trabajo.',
    tech: 'Reactjs, Sass, React testing library, Mockoon, json-server, node-fetch, Figma, Asana',
    btn: `
    <div class="btn-container">
      <a class="btn-small p-btn p-0 glego grey darken-1" href="https://burger-queen-ac-m.herokuapp.com/" target="_blank" rel="noopener">Deploy</a>
      <a class="btn-small p-btn p-0 glego grey darken-1" href="https://github.com/mariebec/LIM012-fe-burger-queen-api-client" target="_blank" rel="noopener">Código</a>
    </div>
    `,
  },
];

arrProjects.forEach((element) => {
  const eachProject = document.createElement('div');
  eachProject.classList.add('col');
  eachProject.classList.add('s12');
  eachProject.classList.add('m6');

  eachProject.innerHTML = `
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator img-card" src=${element.img} alt="${element.title}">
      </div>
      <div class="card-content animation">
        <span class="card-title activator grey-text text-darken-4 alata">${element.title}<i class="material-icons right more">keyboard_arrow_up</i></span>
        ${element.btn}
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4 alata">${element.title}<i class="material-icons right">close</i></span>
        <p class="glego text-reveal">${element.description1}</p>
        <p class="glego text-reveal">${element.description2}</p>
        <p class="glego text-reveal t-tech">Tecnologías: <span class="p-gray">${element.tech}</span></p>
        ${element.btn}
      </div>
    </div>
  `
  projectsContainer.appendChild(eachProject);
});

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector('.go-top-container').classList.add('show');
  } else {
    document.querySelector('.go-top-container').classList.remove('show');
  }
};
document.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});