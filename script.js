
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
const url = "https://starwars.egghead.training/";

//1
function starWars(endpoint ){
  const handleSuccess = response => {
    if(response.ok){
      return response.json()
    }
    throw new Error('Request failed')
  }
  const handleFailure = networkError => {
    console.log(networkError.message)
  }
  const handleJsonResponse = jsonResponse => {
    console.log(jsonResponse)
   jsonResponse.forEach(element => console.log("Film episode_"+element.episode_id+": "+element.title))
  }

fetch(url + endpoint).then(handleSuccess, handleFailure).then(handleJsonResponse).catch((err)=>{
  console.log(err)
});
}
// starWars("films")
// starWars("planets")
// starWars("species")
// starWars("people")
// starWars("starships")
// starWars("vehicles")

//Part 2
function starWarsCount(endpoint){
  return fetch(url + endpoint).then(response => {
    if(response.ok){
      return (response.json())
    } throw new Error('Request failed')
  }).catch((err)=>{
      console.log(err)
    })
  starWars() 
}
// starWarsCount('films').then(responseValue =>{
// console.log(responseValue)
// })

Promise.all([starWarsCount('films'),starWarsCount('planets'),starWarsCount('species'),starWarsCount('people'),starWarsCount('starships'),starWarsCount('vehicles')]).then(responseValue =>{
  console.log(responseValue)
  output.innerHTML = "There are "+ responseValue[0].length + " planets in Starwars history ";
  output.style.color = "yellow"
  }).catch((err)=>{
    console.log(err)
  })

 