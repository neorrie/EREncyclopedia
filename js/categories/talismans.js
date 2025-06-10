const dataTable = document.getElementById("data-table");

const loadData = async () => {
  try {
    const response = await axios.get(
      "https://eldenring.fanapis.com/api/talismans?limit=120"
    );
    const talismanList = response.data.data;

    talismanList.forEach((talisman) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td class="item-col-one">
            <img src=${talisman.image}>
            <p>${talisman.name}</p>
        </td>
        <td>${talisman.effect}</td>
        <td>${talisman.description}</td>
      `;
      dataTable.appendChild(newRow);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

loadData();
