const categoryList = [
  "NPCs",
  "Ammos",
  "Armors",
  "Ashes",
  "Bosses",
  "Creatures",
  "Incantations",
  "Items",
  "Weapons",
  "Shields",
  "Sorceries",
  "Spirits",
  "Talismans",
];

const loadCategories = () => {
  const categorySlider = document.getElementById("category-slider");
  categoryList.forEach((category) => {
    const newCategory = document.createElement("a");
    newCategory.setAttribute("href", "/pages/database.html");
    newCategory.innerHTML = `
        <div class="item">
            <img src="/assets/icons/${category.toLowerCase()}Icon.png" />
            <p class="item-title">${category}</p>
            <p class="item-count">55 entries</p>
        </div>`;
    categorySlider.appendChild(newCategory);
  });
};

loadCategories();
