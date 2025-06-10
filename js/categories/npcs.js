const displayBox = document.getElementById("display-box");

const loadData = async () => {
  try {
    const response = await axios.get(
      "https://eldenring.fanapis.com/api/npcs?limit=120"
    );
    const npcList = response.data.data;

    npcList.forEach((npc) => {
      const newCard = document.createElement("div");
      newCard.classList.add("npc-card");
      newCard.innerHTML = `
        <p class="npc-title">${npc.name.toUpperCase()}</p>
        <img src=${npc.image} />
        <p class="npc-desc">${npc.quote}</p>
      `;
      displayBox.appendChild(newCard);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

loadData();
