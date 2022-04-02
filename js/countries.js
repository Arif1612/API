const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        div.classList.add('country');
        div.innerHTML = `
                <h3> ${country.name} </h3>
                <p> ${country.capital}</p >
                <button onclick="loadCountryByName('${country.name}')">Details </button>
        `;
        // para.innerText = country.name;
        // div.appendChild(para)
        // const paragraph = document.createElement('p');
        // paragraph.innerText = country.capital;
        // div.appendChild(paragraph);
        countriesDiv.appendChild(div);
    })
}


const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))

}

const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h3>hello bro whats up: ${country.name}</h3>
    <p>population: ${country.population}</p>
    <img width="200px" src="${country.flag}">
  
`
}
