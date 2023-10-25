
const imgElements = document.querySelectorAll(".get-data");
  
imgElements.forEach(imgElement => {
  imgElement.addEventListener("click", () => {
    const characterName = imgElement.getAttribute("data-character");
    const displayCharacter = imgElement.nextElementSibling;

    displayCharacter.textContent = characterName;

    const theApiUrl = `https://swapi.dev/api/people/?search=${characterName}`;

    fetch(theApiUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        } 
      })
      .then(data => {
        if (data.results && data.results.length > 0) {
          const characterData = data.results[0];
          displayCharacter.textContent = 
          `Name: ${characterData.name}
          Height: ${characterData.height}
          Gender: ${characterData.gender}`;
        }
      })
  });
});














// module.exports = { main }
