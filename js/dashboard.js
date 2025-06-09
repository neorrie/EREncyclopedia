const categoryList = [
  "NPCs",
  "Ammos",
  "Armors",
  "Ashes",
  "Bosses",
  "Classes",
  "Creatures",
  "Incantations",
  "Items",
  "Weapons",
  "Shields",
  "Sorceries",
  "Spirits",
  "Talismans",
];

const loadCategories = async () => {
  const categorySlider = document.getElementById("category-slider");

  // Fetch all data first
  const categoryData = await Promise.all(
    categoryList.map(async (category) => {
      const response = await axios.get(
        `https://eldenring.fanapis.com/api/${category.toLowerCase()}`
      );
      return {
        category,
        entryCount: response.data.total,
      };
    })
  );

  // Sort alphabetically by category name
  categoryData.sort((a, b) => a.category.localeCompare(b.category));

  // Append to DOM
  categoryData.forEach(({ category, entryCount }) => {
    const newCategory = document.createElement("a");
    newCategory.setAttribute(
      "href",
      `/pages/categories/${category.toLowerCase()}.html`
    );
    newCategory.innerHTML = `
      <div class="item">
          <img src="/assets/icons/${category.toLowerCase()}Icon.png" />
          <p class="item-title">${category}</p>
          <p class="item-count">${entryCount} entries</p>
      </div>`;
    categorySlider.appendChild(newCategory);
  });
};

loadCategories();
