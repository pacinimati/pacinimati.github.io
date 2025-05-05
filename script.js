// Seleccionar los elementos del DOM
const menuButton = document.querySelector(".button");
const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");

// Inicialmente, ocultar el dropdown
dropdown.style.display = "none";

// Mostrar el dropdown y ocultar el botón "Menu"
menuButton.addEventListener("click", () => {
    menuButton.style.display = "none"; // Ocultar el botón "Menu"
    dropdown.style.display = "flex"; // Mostrar el dropdown
});

// Ocultar el dropdown y mostrar el botón "Menu" al presionar el botón "Menú" dentro del dropdown
dropdownToggle.addEventListener("click", () => {
    dropdown.style.display = "none"; // Ocultar el dropdown
    menuButton.style.display = "block"; // Mostrar el botón "Menu"
});

const clubs = [
    {
        name: "Barcelona",
        image: "https://assets.goal.com/images/v3/blt9b16e5d6480c6efc/GHP_MESSI-BOOTS_16-9.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        text: "Messi jugó en el FC Barcelona desde 2004 hasta 2021, ganando 10 Ligas, 4 Champions y convirtiéndose en el máximo goleador histórico del club."
    },
    {
        name: "PSG",
        image: "https://images.daznservices.com/di/library/DAZN_News/e8/4f/leo-messi-psg-ligue-1_1ob5cguv1hcc51gazmulgyzxf0.jpg?t=1838010694",
        text: "En el PSG (2021–2023), Messi continuó demostrando su calidad, ganando la Ligue 1 y colaborando con Mbappé y Neymar en el ataque."
    },
    {
        name: "Inter Miami",
        image: "https://nuevospapeles.com/wp-content/uploads/2025/01/230816151359-lionel-messi-inter-miami.jpg",
        text: "En 2023, Messi llegó a Inter Miami para revolucionar la MLS. Su impacto fue inmediato, ganando la Leagues Cup y atrayendo millones de nuevos fans."
    }
];

let currentClub = 0;

const clubImage = document.getElementById("club-image");
const clubText = document.getElementById("club-text");

function updateClubDisplay() {
    clubImage.src = clubs[currentClub].image;
    clubText.textContent = clubs[currentClub].text;
}

document.getElementById("prev-club").addEventListener("click", () => {
    currentClub = (currentClub - 1 + clubs.length) % clubs.length;
    updateClubDisplay();
});

document.getElementById("next-club").addEventListener("click", () => {
    currentClub = (currentClub + 1) % clubs.length;
    updateClubDisplay();
});

// Mostrar el primero al cargar
updateClubDisplay();
const competenciasNacionales = [
    {
        name: "Mundial Sub-20 (2005)",
        image: "https://img.asmedia.epimg.net/resizer/v2/2RMJ3GH42NHAFH23VKP72CAMSY.jpg?auth=9363e2f14af3ee2e8a5209f09c37833a387cd0d30c0a1bc0be761951afce67ff&width=1472&height=828&focal=356%2C169",
        text: "En Países Bajos, Messi fue la figura del torneo: marcó 6 goles, ganó el Balón de Oro y la Bota de Oro. Argentina fue campeón tras vencer 2-1 a Nigeria en la final, con dos goles de Messi."
    },
    {
        name: "Mundial 2006 (Alemania)",
        image:"https://media.ambito.com/p/a1ba5c6a52e87f1e622df3f10801bd01/adjuntos/239/imagenes/040/779/0040779513/1200x675/smart/imagepng.png",
        text: "Primer Mundial con la Selección Mayor. Marcó un gol ante Serbia y Montenegro. Jugó poco y no fue titular en la eliminación frente a Alemania en cuartos de final por penales."
    },
    {
        name: "Juegos Olímpicos de Pekín (2008)",
        image: "https://cdn.clarosports.com/clarosports/2024/06/befunky-collage-30-204559.jpg",
        text: "Messi fue clave en el oro olímpico con la Sub-23 reforzada. Marcó 2 goles, brindó asistencias y formó una gran sociedad con Riquelme, Agüero y Di María. Argentina venció 1-0 a Nigeria en la final."
    },
    {
        name: "Mundial 2010 (Sudáfrica)",
        image:"https://150880676.v2.pressablecdn.com/wp-content/uploads/2022/11/1669075098_380_%C2%BFComo-le-ha-ido-a-Lionel-Messi-en-los-Mundiales.jpg",
        text: "Fue el eje del equipo dirigido por Maradona. No marcó goles, aunque generó mucho juego. Argentina fue eliminada por Alemania 4-0 en cuartos de final."
    },
    {
        name: "Copa América 2007 (Venezuela)",
        image: "https://infocielo.com/wp-content/uploads/2024/12/final-copa-america-2007-messi-1920jpg.jpg",
        text: "Primera Copa América con la mayor. Marcó 2 goles y fue titular en todos los partidos. Argentina llegó a la final pero cayó 3-0 ante Brasil. Messi fue una de las revelaciones del torneo."
    },
    {
        name: "Copa América 2011 (Argentina)",
        image: "https://www.directvsports.com/__export/1718666270570/sites/dsports/img/2024/06/17/741313-21159537-2560-1440.jpg_1025562229.jpg",
        text: "Torneo difícil para Messi. No marcó goles, aunque repartió asistencias. Jugó como enganche, pero el equipo no funcionó. Argentina fue eliminada por Uruguay en cuartos de final por penales."
    },
    {
        name: "Mundial 2014 (Brasil)",
        image:"https://cdn.conmebol.com/wp-content/uploads/2014/07/messi-balon-de-oro.jpg",
        text: "Uno de sus mejores torneos. Marcó 4 goles y fue clave en la llegada a la final. Fue elegido Balón de Oro del Mundial. Argentina perdió 1-0 ante Alemania en tiempo suplementario."
    },
    {
        name: "Copa América 2015 (Chile)",
        image: "https://media.ambito.com/p/6faef3da467a1e987aa84f4e5f101f82/adjuntos/239/imagenes/030/872/0030872691/1200x675/smart/messi-hablo-la-derrota-chile.jpg",
        text: "Gran torneo de Messi como conductor. Anotó 1 gol (de penal) y dio varias asistencias. Argentina llegó a la final, donde perdió por penales ante Chile. Fue incluido en el equipo ideal del torneo."
    },
    {
        name: "Copa América Centenario 2016 (EE.UU.)",
        image: "https://conlagentenoticias.com/wp-content/uploads/2021/07/messi2016.jpg",
        text: "Messi brilló: hizo 5 goles y varias asistencias. En la final, Argentina empató 0-0 con Chile y perdió por penales. Messi falló su penal y anunció su retiro (luego revertido). Fue el mejor jugador según medios."
    },
    {
        name: "Mundial 2018 (Rusia)",
        image:"https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/1703F/production/_102217249_hi047753107.jpg.webp",
        text: "Marcó un gol clave ante Nigeria para clasificar a octavos. Argentina fue eliminada por Francia en un vibrante 4-3. El equipo mostró fallas colectivas durante todo el torneo."
    },
    {
        name: "Copa América 2019 (Brasil)",
        image: "https://www.ole.com.ar/2019/06/29/aanWzYepo_660x385__1.jpg",
        text: "Torneo con rendimiento irregular. Marcó solo 1 gol de penal y fue crítico con la Conmebol. Argentina quedó en tercer lugar tras perder la semifinal con Brasil. Messi fue suspendido por sus declaraciones."
    },
    {
        name: "Copa América 2021 (Brasil)",
        image: "https://a.espncdn.com/photo/2021/0711/r878963_1296x729_16-9.jpg",
        text: "Uno de sus mejores torneos con Argentina. Hizo 4 goles, dio 5 asistencias y fue figura en todos los partidos. Argentina fue campeón tras vencer a Brasil en la final. Messi fue el mejor jugador del torneo."
    },
    {
        name: "Mundial 2022 (Qatar)",
        image:"https://media.tycsports.com/files/2022/12/18/517330/lionel-messi_1440x810_wmk.webp?v=1",
        text: "El mejor torneo de su carrera. Capitán, líder y goleador. Marcó 7 goles y dio 3 asistencias. Argentina fue campeón del mundo tras vencer a Francia en una final histórica. Fue elegido Balón de Oro del Mundial."
    }
];

let currentCompetition = 0;

const nationalImage = document.getElementById("national-image");
const nationalText = document.getElementById("national-text");
const nationalTitle = document.getElementById("national-title");


function updateNationalDisplay() {
    nationalImage.src = competenciasNacionales[currentCompetition].image;
    nationalText.textContent = competenciasNacionales[currentCompetition].text;
    nationalTitle.textContent = competenciasNacionales[currentCompetition].name; // Actualiza el título
}

document.getElementById("prev-national").addEventListener("click", () => {
    currentCompetition = (currentCompetition - 1 + competenciasNacionales.length) % competenciasNacionales.length;
    updateNationalDisplay();
});

document.getElementById("next-national").addEventListener("click", () => {
    currentCompetition = (currentCompetition + 1) % competenciasNacionales.length;
    updateNationalDisplay();
});

// Mostrar el primero al cargar
updateNationalDisplay();