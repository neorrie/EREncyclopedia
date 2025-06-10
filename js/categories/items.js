const dataTable = document.getElementById("data-table");

const loadData = async (value) => {
  try {
    let currentPage = 0;
    if (value) {
      currentPage = value.innerText;
    }
    const response = await axios.get(
      `https://eldenring.fanapis.com/api/items?limit=100&page=${currentPage}`
    );
    const itemList = response.data.data;

    // removes all previously generated rows
    dataTable
      .querySelectorAll("tr:not(.table-header)")
      .forEach((row) => row.remove());

    // loop starts here
    itemList.forEach((item) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td class="item-col-one">
            <img src=${item.image}>
            ${item.name}
        </td>
        <td>${item.description}</td>
        <td>${item.type}</td>
        <td>${item.effect}</td>
        `;
      dataTable.appendChild(newRow);
    });
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

loadData();
