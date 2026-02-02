const cableData = {
  USB: [
    {
      name: "USB 2.0",
      connectors: ["Type-A", "Type-B", "Mini-USB", "Micro-USB"],
      "Max Speed": "480 Mbps",
      "Release Year": 2000,
      "Alternate Names": ["Hi-Speed USB"],
    },
    {
      name: "USB 3.0",
      connectors: ["Type-A", "Type-B", "Micro-B"],
      "Max Speed": "5 Gbps",
      "Release Year": 2008,
      "Alternate Names": ["SuperSpeed USB, USB 5Gbps"],
    },
    {
      name: "USB 3.1",
      "Max Speed": "10 Gbps",
      "Release Year": 2013,
    },
    {
      name: "USB 3.2",
      "Max Speed": "20 Gbps",
      "Release Year": 2017,
    },
    {
      name: "USB4",
      "Max Speed": "40 Gbps",
      "Release Year": 2019,
    },
  ],
  Display: [
    {
      name: "HDMI 1.4",
      max_resolution: "4K at 30Hz",
      "Release Year": 2009,
    },
    {
      name: "HDMI 2.0",
      max_resolution: "4K at 60Hz",
      "Release Year": 2013,
    },
    {
      name: "HDMI 2.1",
      max_resolution: "10K at 120Hz",
      "Release Year": 2017,
    },
    {
      name: "DisplayPort 1.2",
      max_resolution: "4K at 60Hz",
      "Release Year": 2010,
    },
    {
      name: "DisplayPort 1.4",
      max_resolution: "8K at 60Hz",
      "Release Year": 2016,
    },
  ],
};
const select = document.createElement("select");
function createCableSelect(colIndex) {
  const select = document.createElement("select");
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Select a Cable";
  defaultOption.selected = defaultOption.disabled = true;
  select.appendChild(defaultOption);
  for (var i = 0; i < Object.keys(cableData).length; i++) {
    const optgroup = document.createElement("optgroup");
    optgroup.label = Object.keys(cableData)[i];

    cableData[Object.keys(cableData)[i]].forEach((item) => {
      const option = document.createElement("option");
      option.value = item.name;
      option.textContent = item.name;
      optgroup.appendChild(option);
    });
    select.appendChild(document.createElement("hr"));
    select.appendChild(optgroup);
  }
  select.addEventListener("change", (event) => {
    if (select.firstChild.textContent === "Select a Cable") {
      select.removeChild(select.firstChild);
    }
    updateColumn(colIndex, event.target.value);
  });
  return select;
}

function addColumn() {
  const table = document.getElementById("myTable");
  const colIndex = table.rows[0].cells.length;

  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    const cell = row.insertCell(-1);

    if (i === 0) {
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

function updateColumn(colIndex, value) {
  const table = document.getElementById("myTable");
  const item =
    cableData.Display.find((d) => d.name === value) ||
    cableData.USB.find((d) => d.name === value);
  for (let i = 0; i < table.rows.length; i++) {
    const category = table.rows[i].cells[0];
    const row = table.rows[i];
    const cell = row.cells[colIndex];
    for (let j = 0; j < Object.keys(item).length; j++) {
      if (category.textContent === Object.keys(item)[j]) {
        const text = item[Object.keys(item)[j]];
        cell.textContent = item[Object.keys(item)[j]];
      }
    }
  }
}
