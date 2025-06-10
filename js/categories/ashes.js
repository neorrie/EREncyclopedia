const dataTable = document.getElementById("data-table");

const loadData = async () => {
  try {
    const response = await axios.get(
      "https://eldenring.fanapis.com/api/ashes?limit=100"
    );
    const ashesList = response.data.data;

    ashesList.forEach((ashesItem) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td class="item-col-one">
            <img src=${ashesItem.image}>
            ${ashesItem.name}
        </td>
        <td>${ashesItem.skill}</td>
        <td>${ashesItem.description}</td>
        <td>${ashesItem.affinity}</td>
      `;
      dataTable.appendChild(newRow);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

loadData();
