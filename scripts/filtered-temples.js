const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  menuButton.classList.toggle('open');
});

const yearSpan = document.querySelector('#year');
const lastModifiedSpan = document.querySelector('#lastModified');

const now = new Date();
yearSpan.textContent = now.getFullYear();
lastModifiedSpan.textContent = document.lastModified;






const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 44000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
  }
];

function displayTemples(temples) {
  const container = document.getElementById("temples-container");
  container.innerHTML = "";

  temples.forEach(temple => {

    const card = document.createElement("section");
    card.classList.add("temple-card");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    container.appendChild(card);
  });
}

displayTemples(temples);

document.getElementById("home").addEventListener("click", () => {
  displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", () => {
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
});
