const dataTable = document.getElementById("data-table");

const loadData = async () => {
  try {
    const response = await axios.get(
      "https://eldenring.fanapis.com/api/shields?limit=70"
    );
    const shieldList = response.data.data;

    shieldList.forEach((shieldItem) => {
      const newRow = document.createElement("tr");
      const shieldDef = shieldItem.defence;
      newRow.innerHTML = `
        <td class="item-col-one">
            <img src=${shieldItem.image}>
            ${shieldItem.name}
        </td>
        <td>${shieldItem.category}</td>
        <td>${shieldDef[0].amount}</td>
        <td>${shieldDef[1].amount}</td>
        <td>${shieldDef[2].amount}</td>
        <td>${shieldDef[3].amount}</td>
        <td>${shieldDef[4].amount}</td>
        <td>${shieldDef[5].amount}</td>
        <td>${shieldItem.weight}</td>
      `;
      dataTable.appendChild(newRow);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

loadData();
