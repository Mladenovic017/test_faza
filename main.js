
const whereAmII = function( sirina, duzina) { 
  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${sirina}&longitude=${duzina}`)
  .then(response => { 
    if(!response.ok) throw new Error(`Problem with geolocation ${response.status}`);
    return response.json();
  })
  .then(data => {
    console.log(data);
    console.log(`You are in the city ${data.city}, country code: ${data.countryName}`)
    return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
  })
  .then(response => {
    if(!response.ok) throw new Error("Imamo gresku ne mogu da pronadjem zemlju");
    return response.json();
  })
  .then(data => {
    console.log(data[0]);
  })
}

const gde_se_nalazim = function(alt,long){ 
 fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${alt}&longitude=${long}`)
 .then(odgovor => {
  if(!odgovor.ok) throw new Error(`Imam pogresan unos geolokacije, kod greske ${odgovor.status}`);
  return odgovor.json();
 })
 .then(data => { 
  console.log(data);
  console.log(`Nalazimo se u drzavi ${data.countryName} i u gradu ${data.city}`);
  return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
 })
 .then(response => {
  if(!response.ok) throw new Error(`Ne mogu da pronadjem zemlju! Kod greske ${response.status}`)
    return response.json();
 })
 .then(data => { 
  console.log(data);
 })
}
gde_se_nalazim(52.508, 13.381);
