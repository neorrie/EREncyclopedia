const dataTable = document.getElementById("data-table");

const loadData = async () => {
  try {
    const response = await axios.get(
      "https://eldenring.fanapis.com/api/weapons?limit=70"
    );
    const weaponList = response.data.data;

    weaponList.forEach((weaponItem) => {
      const newRow = document.createElement("tr");
      const weaponAtk = weaponItem.attack;
      newRow.innerHTML = `
        <td class="item-col-one">
            <img src=${weaponItem.image}>
            ${weaponItem.name}
        </td>
        <td>${weaponItem.category}</td>
        <td>${weaponAtk[0].amount}</td>
        <td>${weaponAtk[1].amount}</td>
        <td>${weaponAtk[2].amount}</td>
        <td>${weaponAtk[3].amount}</td>
        <td>${weaponAtk[4].amount}</td>
        <td>${weaponAtk[5].amount}</td>
        <td>${weaponItem.weight}</td>
      `;
      dataTable.appendChild(newRow);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

loadData();
