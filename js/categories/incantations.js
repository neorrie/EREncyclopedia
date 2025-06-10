const dataTable = document.getElementById("data-table");

const loadData = async () => {
  try {
    const response = await axios.get(
      "https://eldenring.fanapis.com/api/incantations?limit=120"
    );
    const incantationList = response.data.data;

    incantationList.forEach((incantation) => {
      const newRow = document.createElement("tr");
      const statReqs = incantation.requires;

      newRow.innerHTML = `
        <td class="item-col-one">
            <img src=${incantation.image}>
            <p>${incantation.name}</p>
        </td>
        <td>${incantation.effects}</td>
        <td>${incantation.description}</td>
        <td>${incantation.cost}</td>
        <td>${incantation.slots}</td>
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
