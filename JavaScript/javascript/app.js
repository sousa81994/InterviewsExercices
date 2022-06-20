for (let j = 1; j <= 100; j++) {
    if (j % 3 == 0) {
        console.log("Visual")
    } if (j % 5 == 0) {
        console.log("Nuts")
    } if (j % 3 == 0 && j % 5 == 0) {
        console.log("Visual Nuts")
    } else {
        console.log(++j)
    }
}


const countryData = () =>  { 
    const jsonData = require('./data.json'); 
    const stringfyJSON = JSON.stringify(jsonData);
    const data = JSON.parse(stringfyJSON)
    
    let countries = [];
    let maxLangCountry = '';    
    let maxLang = 0;

    let map = new Map();

    for (let i = 0 ; i < data.length ; i++) {
        if (data[i].languages.length > maxLang) {
            maxLang = data[i].languages.length;
            maxLangCountry = data[i].country;
        }

        if (data[i].languages.includes("de"))
        {
            countries.push(data[i].country)            
        }

        for (language in data[i].languages) {
            if (map.has(data[i].languages[language])) {
                map.set(data[i].languages[language], map.get(data[i].languages[language]) + 1);
            }
            else {
                map.set(data[i].languages[language], 1);
            }
        }
    }

    const commonLang = [...map.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)
   
    return  {
        "countries": data.length, 
        "germanCountries": countries, 
        "maxLangCountry": maxLangCountry, 
        "commonLang": commonLang
    }
}
