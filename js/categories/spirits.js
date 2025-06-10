const dataTable = document.getElementById("data-table");

const loadData = async () => {
  try {
    const response = await axios.get(
      "https://eldenring.fanapis.com/api/spirits?limit=120"
    );
    const spiritList = response.data.data;

    spiritList.forEach((spirit) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td class="item-col-one">
            <img src=${spirit.image}>
            <p>${spirit.name}</p>
        </td>
        <td>${spirit.effect}</td>
        <td>${spirit.description}</td>
        <td>${spirit.fpCost}</td>
        <td>${spirit.hpCost}</td>
  
      `;
      dataTable.appendChild(newRow);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

loadData();
