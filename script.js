// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let document = window.document;
        let list = document.querySelector("faultyItems");
        let upilot = document.querySelector("input[name=pilotName]");
        let ucopilot = document.querySelector("input[name=copilotName]");
        let ufuelLevel = document.querySelector("input[name=fuelLevel]");
        let ucargoLevel = document.querySelector("input[name=fuelLevel");
            event.preventDefault();
        formSubmission(document, list, upilot, ucopilot, ufuelLevel, ucargoLevel);
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});