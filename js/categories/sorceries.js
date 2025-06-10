const dataTable = document.getElementById("data-table");

const loadData = async () => {
  try {
    const response = await axios.get(
      "https://eldenring.fanapis.com/api/sorceries?limit=120"
    );
    const sorceryList = response.data.data;

    sorceryList.forEach((sorcery) => {
      const newRow = document.createElement("tr");
      const statReqs = sorcery.requires;

      newRow.innerHTML = `
        <td class="item-col-one">
            <img src=${sorcery.image}>
            <p>${sorcery.name}</p>
        </td>
        <td>${sorcery.effects}</td>
        <td>${sorcery.description}</td>
        <td>${sorcery.cost}</td>
        <td>${sorcery.slots}</td>
        <td>${statReqs[0].amount}</td>
        <td>${statReqs[1].amount}</td>
        <td>${statReqs[2].amount}</td>
      `;
      dataTable.appendChild(newRow);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

loadData();
