const dataTable = document.getElementById("data-table");

const loadData = async (value) => {
  try {
    let currentPage = 0;
    if (value) {
      currentPage = value.innerText;
    }
    const response = await axios.get(
      `https://eldenring.fanapis.com/api/armors?limit=100&page=${currentPage}`
    );
    const armorList = response.data.data;

    // removes all previously generated rows
    dataTable
      .querySelectorAll("tr:not(.table-header)")
      .forEach((row) => row.remove());

    // loop starts here
    armorList.forEach((armorItem) => {
      const newRow = document.createElement("tr");

      const armorDmgNeg = armorItem.dmgNegation;
      const armorRes = armorItem.resistance;

      newRow.innerHTML = `
        <td class="item-col-one">
            <img src=${armorItem.image}>
            ${armorItem.name}
        </td>
        <td>${armorDmgNeg[0].amount}</td>
        <td>${armorDmgNeg[1].amount}</td>
        <td>${armorDmgNeg[2].amount}</td>
        <td>${armorDmgNeg[3].amount}</td>
        <td>${armorDmgNeg[4].amount}</td>
        <td>${armorDmgNeg[5].amount}</td>
        <td>${armorDmgNeg[6].amount}</td>
        <td>${armorDmgNeg[7].amount}</td>
        <td>${armorRes[0].amount}</td>
        <td>${armorRes[1].amount}</td>
        <td>${armorRes[2].amount}</td>
        <td>${armorRes[3].amount}</td>
        <td>${armorRes[4].amount}</td>
        <td>${armorItem.weight}</td>
        `;
      dataTable.appendChild(newRow);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

loadData();
