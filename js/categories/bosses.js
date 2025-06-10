const dataTable = document.getElementById("data-table");

const loadData = async () => {
  try {
    const response = await axios.get(
      "https://eldenring.fanapis.com/api/bosses?limit=120"
    );
    const bossList = response.data.data;

    bossList.forEach((boss) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td class="item-col-one">
            <img src=${boss.image}>
            ${boss.name}
        </td>
        <td>${boss.region}</td>
        <td>${boss.description}</td>
        <td>${boss.location}</td>
        <td>${boss.drops}</td>
        <td>${boss.healthPoints}</td>
      `;
      dataTable.appendChild(newRow);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

loadData();
