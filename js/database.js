const table = document.getElementById("data-table");

const loadData = async (listTag) => {
  try {
    const name = listTag.innerText.toLowerCase();
    const response = await axios.get(
      `https://eldenring.fanapis.com/api/${name}?limit=100`
    );
    const itemType = response.data.data;

    if (itemType[0].description == null) {
      // clears the content from the main-content div
      table.innerHTML = `
          <tr>
            <th>Name</th>
            <th>Image</th>
          </tr>
          `;
      itemType.forEach((item) => {
        const newItem = document.createElement("tr");
        newItem.innerHTML = `
      <td>${item.name}</td>
      <td><img src="${item.image}"/></td>
      `;
        table.appendChild(newItem);
      });
    } else {
      // clears the content from the main-content div
      table.innerHTML = `
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
          `;
      itemType.forEach((item) => {
        const newItem = document.createElement("tr");
        newItem.innerHTML = `
      <td>${item.name}</td>
      <td>${item.description}</td>
      <td><img src="${item.image}"/></td>
      `;
        table.appendChild(newItem);
      });
    }
  } catch (error) {
    console.log(`Error fetching item: `, error);
  }
};

const toggleSubMenu = (button) => {
  button.nextElementSibling.classList.toggle("show");
  button.querySelector("i").classList.toggle("rotate");
};
