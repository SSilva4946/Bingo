const countries = [
  {
    name: "United States",
    fact: "Home to the world's first national park, Yellowstone.",
    flagUrl: "http://www.flags.net/images/largeflags/UNST0001.GIF",
  },
  {
    name: "China",
    fact: "Has over 20,000 characters in its written language.",
    flagUrl: "CHINA.png",
  },
  {
    name: "Japan",
    fact: "More than 1,500 earthquakes hit Japan each year.",
    flagUrl: "https://countryflagsapi.com/png/jp",
  },
  {
    name: "Germany",
    fact: "Invented the tradition of Christmas trees.",
    flagUrl: "https://countryflagsapi.com/png/de",
  },
  {
    name: "United Kingdom",
    fact: "London was the world's largest city from 1831 to 1925.",
    flagUrl: "https://countryflagsapi.com/png/gb",
  },
  {
    name: "France",
    fact: "France covers more time zones than any other country in the world.",
    flagUrl: "https://countryflagsapi.com/png/fr",
  },
  {
    name: "India",
    fact: "Home to the world's largest vegetarian population.",
    flagUrl: "https://countryflagsapi.com/png/in",
  },
  {
    name: "Italy",
    fact: "Italy has over 3,000 museums.",
    flagUrl: "https://countryflagsapi.com/png/it",
  },
  {
    name: "Canada",
    fact: "Canada has the longest coastline of any country in the world.",
    flagUrl: "https://countryflagsapi.com/png/ca",
  },
  {
    name: "South Korea",
    fact: "South Korea has a digital museum that displays no actual artifacts.",
    flagUrl: "https://countryflagsapi.com/png/kr",
  },
  {
    name: "Russia",
    fact: "Russia is larger than Pluto.",
    flagUrl: "https://countryflagsapi.com/png/ru",
  },
  {
    name: "Brazil",
    fact: "The Amazon River flows through Brazil; it's the second-longest river in the world.",
    flagUrl: "https://countryflagsapi.com/png/br",
  },
  {
    name: "Australia",
    fact: "Australia is home to more than 60 wine regions.",
    flagUrl: "https://countryflagsapi.com/png/au",
  },
  {
    name: "Spain",
    fact: "Spain produces over half of the world's olive oil.",
    flagUrl: "https://countryflagsapi.com/png/es",
  },
  {
    name: "Mexico",
    fact: "The world’s largest pyramid is not in Egypt, but in Mexico.",
    flagUrl: "https://countryflagsapi.com/png/mx",
  },
  {
    name: "Indonesia",
    fact: "Indonesia is the world's largest island country, with more than 17,000 islands.",
    flagUrl: "https://countryflagsapi.com/png/id",
  },
  {
    name: "Netherlands",
    fact: "The Netherlands is the world’s second-largest exporter of food.",
    flagUrl: "https://countryflagsapi.com/png/nl",
  },
  {
    name: "Turkey",
    fact: "Turkey has historical sites from the Roman Empire, Byzantine Empire, and Ottoman Empire.",
    flagUrl: "https://countryflagsapi.com/png/tr",
  },
  {
    name: "Saudi Arabia",
    fact: "Saudi Arabia has no rivers.",
    flagUrl: "https://countryflagsapi.com/png/sa",
  },
  {
    name: "Switzerland",
    fact: "Switzerland consumes the most chocolate per capita in the world.",
    flagUrl: "https://countryflagsapi.com/png/ch",
  },
  {
    name: "Argentina",
    fact: "Argentina is the birthplace of the tango.",
    flagUrl: "https://countryflagsapi.com/png/ar",
  },
  {
    name: "Sweden",
    fact: "Sweden has a hotel entirely made of ice.",
    flagUrl: "https://countryflagsapi.com/png/se",
  },
  {
    name: "Thailand",
    fact: "Thailand is home to the world's smallest mammal, the bumblebee bat.",
    flagUrl: "https://countryflagsapi.com/png/th",
  },
  {
    name: "Egypt",
    fact: "The Great Pyramid of Giza, in Egypt, was the tallest man-made structure for over 3,800 years.",
    flagUrl: "https://countryflagsapi.com/png/eg",
  },
  {
    name: "South Africa",
    fact: "South Africa has three capital cities: Pretoria, Cape Town, and Bloemfontein.",
    flagUrl: "https://countryflagsapi.com/png/za",
  },
];

let remainingCountries = [...countries];

function drawCountry() {
  if (remainingCountries.length === 0) {
    alert("All countries have been drawn!");
    return;
  }
  const index = Math.floor(Math.random() * remainingCountries.length);
  const country = remainingCountries[index];
  remainingCountries.splice(index, 1);

  document.getElementById("countryName").innerText = country.name;
  document.getElementById("funFact").innerText = country.fact;
  document.getElementById("countryFlag").src = country.flagUrl;
  document.getElementById("countryFlag").alt = "Flag of " + country.name;
}

document.getElementById("drawButton").addEventListener("click", drawCountry);
