const displayBox = document.getElementById("display-box");

const loadData = async () => {
  try {
    const response = await axios.get(
      "https://eldenring.fanapis.com/api/creatures?limit=120"
    );
    const creatureList = response.data.data;

    creatureList.forEach((creature) => {
      const newCard = document.createElement("div");
      newCard.classList.add("creature-card");
      newCard.innerHTML = `
        <p class="creature-title">${creature.name.toUpperCase()}</p>
        <img src=${creature.image} />
        <p class="creature-desc">${creature.description}</p>
      `;
      displayBox.appendChild(newCard);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

loadData();
