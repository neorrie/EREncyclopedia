const container = document.getElementById("main-content");

const loadData = async (listTag) => {
  try {
    const name = listTag.innerText.toLowerCase();
    // clears the content from the main-content div
    container.innerHTML = "";
    const response = await axios.get(
      `https://eldenring.fanapis.com/api/${name}?limit=600`
    );
    const itemType = response.data.data;
    const table = document.createElement("table");
    table.className = "data-table";
    itemType.forEach((item) => {
      const card = document.createElement("div");
      card.className = "item-card";
      card.innerHTML = `<h2>${item.name}</h2>`;
      container.appendChild(card);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

const toggleSubMenu = (button) => {
  button.nextElementSibling.classList.toggle("show");
  button.querySelector("i").classList.toggle("rotate");
};
