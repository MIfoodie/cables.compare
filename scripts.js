const cableTypes = {
  "Choose a cable": [],
  Cat5e: ["1 Gbps", "100 m", "Home / Office"],
  Cat6: ["10 Gbps", "55 m", "Office"],
  Cat6A: ["10 Gbps", "100 m", "Enterprise"],
  Fiber: ["100+ Gbps", "10+ km", "Backbone"],
  Coax: ["1 Gbps", "500 m", "TV / ISP"],
};

function createCableSelect(colIndex) {
  const select = document.createElement("select");
  Object.keys(cableTypes).forEach((type) => {
    if (type !== "Choose a cable") {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      select.appendChild(option);
    }
  });

  // Add "Choose a cable" as a disabled placeholder option at the start
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "Choose a cable";
  placeholderOption.textContent = "Choose a cable";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  select.insertBefore(placeholderOption, select.firstChild);

  select.addEventListener("change", () => {
    updateColumn(colIndex, cableTypes[select.value]);
  });

  return select;
}

function addColumn() {
  const table = document.getElementById("myTable");
  const colIndex = table.rows[0].cells.length;

  for (let row of table.rows) {
    const cell = row.insertCell(-1);

    if (row.parentElement.tagName === "THEAD") {
      cell.appendChild(createCableSelect(colIndex));
    } else {
      cell.textContent = "-";
    }
  }
}

function removeColumn() {
  const table = document.getElementById("myTable");
  const colIndex = table.rows[0].cells.length - 1;

  for (let row of table.rows) {
    if (row.cells.length > 1) row.deleteCell(colIndex);
  }
}

function updateColumn(colIndex, values) {
  const table = document.getElementById("myTable");

  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[colIndex].textContent = values[i - 1] ?? "-";
  }
}
