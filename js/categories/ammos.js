const dataTable = document.getElementById("data-table");

const loadData = async () => {
  try {
    const response = await axios.get("https://eldenring.fanapis.com/api/ammos");
    const ammoList = response.data.data;

    ammoList.forEach((ammoItem) => {
      const newRow = document.createElement("tr");
      const atkPower = ammoItem.attackPower;
      newRow.innerHTML = `
        <td class="item-col-one">
            <img src=${ammoItem.image}>
            ${ammoItem.name}
        </td>
        <td>${ammoItem.type}</td>
        <td>${atkPower[0].amount}</td>
        <td>${atkPower[1].amount}</td>
        <td>${atkPower[2].amount}</td>
        <td>${atkPower[3].amount}</td>
        <td>${atkPower[4].amount}</td>
        <td>${atkPower[5].amount}</td>
        <td>${ammoItem.passive}</td>
      `;
      dataTable.appendChild(newRow);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

loadData();
