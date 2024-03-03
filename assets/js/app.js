const cl = console.log;

const mainInput = document.getElementById('mainInput');
const name1 = document.getElementById('name');
const capital1 = document.getElementById('capital');
const population1 = document.getElementById('population');
const country = document.getElementById('countries');

let flag = true;

const createCountryCard = (arr) => {
    let result = ``;
    arr.forEach((country,i) => {
        result += `  <div class="col-2">
        <div class="card">
        <figure>
            <img src="${country.flag}" alt="country">
            <figcaption>
                <div class="countryDetails">
                    <h2>${country.name}</h2>
                    <ul class="list">
                        <li><strong>Capital: </strong>${country.capital}</li>
                        <li><strong>Languages: </strong>${country.languages}</li>
                        <li><strong>Popilation: </strong>${country.population}</li>
                    </ul>
                </div>
            </figcaption>
        </figure>
        </div>
        </div>`;
    });
    country.innerHTML = result;
}

createCountryCard(countries);

const showCountriesName = (eve) => {
    let element = eve.target.firstElementChild;   
        
      let countryArr =  countries.sort((c1,c2) => {
                if(c1.name.toLowerCase() > c2.name.toLowerCase()){
                    return 1;
                }
                else{
                    return -1;
                }
        });

        if(flag === true){
            createCountryCard(countryArr);
            element.classList.add("fa-circle-up");
            flag = false;
        }else{
            createCountryCard(countryArr.reverse());
            element.classList.add("fa-circle-down");
            flag = false;
        }    
   
}


const capitalCountries = () => {
   let countryArr = countries.filter((country) => {
        return country.capital != undefined;
    });
    let countrySort = countryArr.sort((c1,c2) => {
            if(c1.capital.toLowerCase() > c2.capital.toLowerCase()){
                return 1;
            }
            else{
                return -1;
            }
    })
    if(flag === true){
        createCountryCard(countrySort );
        flag = false;
    }else{
        createCountryCard(countrySort .reverse());
        flag = false;
    }
    
}

const populationCountries = (eve) => {
   let countryArr = countries.sort((c1,c2) => {
        if(c1.population > c2.population){
            return 1;
        }
        else{
            return -1;
        }
    })
    if(flag === true){
        createCountryCard(countryArr);
        flag = false;
       
    }else{
        createCountryCard(countryArr.reverse());
        flag = true;
    }
    
}

const searchCountry = (eve) => {
    let searchVal = eve.target.value.toLowerCase();
    let countryArr = countries.filter((country) => {
        return country.capital != undefined;
    });
    let searchArr = countryArr.filter(ele => ele.name.toLowerCase().includes(searchVal) || ele.capital.toLowerCase().includes(searchVal));
    createCountryCard(searchArr);
}

capital1.addEventListener("click",capitalCountries);
population1.addEventListener("click",populationCountries);
name1.addEventListener("click",showCountriesName);
mainInput.addEventListener("keyup",searchCountry);



