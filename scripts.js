const cableTypes = {
  Cat5e: ["1 Gbps", "100 m", "Home / Office"],
  Cat6: ["10 Gbps", "55 m", "Office"],
  Cat6A: ["10 Gbps", "100 m", "Enterprise"],
  Fiber: ["100+ Gbps", "10+ km", "Backbone"],
  Coax: ["1 Gbps", "500 m", "TV / ISP"],
};

function createCableSelect(colIndex) {
  const select = document.createElement("select");

  Object.keys(cableTypes).forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    select.appendChild(option);
  });

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

function updateColumn(colIndex, values) {
  const table = document.getElementById("myTable");

  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[colIndex].textContent = values[i - 1] ?? "-";
  }
}
