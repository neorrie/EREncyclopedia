const displayBox = document.getElementById("display-box");

//load character classes
const loadData = async () => {
  try {
    const response = await axios.get(
      "https://eldenring.fanapis.com/api/classes"
    );
    const classList = response.data.data;

    classList.forEach((charClass) => {
      const newCard = document.createElement("div");
      newCard.classList.add("class-card");
      newCard.innerHTML = `
          <p>${charClass.name.toUpperCase()}</p>
          <img src=${charClass.image} />
          <table>
            <tr>
              <td
                colspan="2"
                style="text-align: center; vertical-align: middle"
              >
               Level ${charClass.stats.level}
              </td>
            </tr>
            <tr>
              <td class="td-darker">Vigor ${charClass.stats.vigor}</td>
              <td class="td-darker">Mind ${charClass.stats.mind}</td>
            </tr>
            <tr>
              <td>Endurance ${charClass.stats.endurance}</td>
              <td>Strength ${charClass.stats.strength}</td>
            </tr>
            <tr>
              <td class="td-darker">Dexterity ${charClass.stats.dexterity}</td>
              <td class="td-darker">Intelligence ${
                charClass.stats.intelligence
              }</td>
            </tr>
            <tr>
              <td>Faith ${charClass.stats.faith}</td>
              <td>Arcane ${charClass.stats.arcane}</td>
            </tr>
          </table>
          `;
      displayBox.appendChild(newCard);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};
//call it
loadData();

//navbar toggle stuff
const toggleSubMenu = (button) => {
  button.nextElementSibling.classList.toggle("show");
  button.querySelector("i").classList.toggle("rotate");
};
