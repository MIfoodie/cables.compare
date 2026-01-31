const cableData = {
  USB: [
    {
      name: "USB 2.0",
      connectors: ["Type-A", "Type-B", "Mini-USB", "Micro-USB"],
      max_speed: "480 Mbps",
      release_year: 2000,
    },
    {
      name: "USB 3.0",
      connectors: ["Type-A", "Type-B", "Micro-B"],
      max_speed: "5 Gbps",
      release_year: 2008,
    },
    {
      name: "USB 3.1",
      max_speed: "10 Gbps",
      release_year: 2013,
    },
    {
      name: "USB 3.2",
      max_speed: "20 Gbps",
      release_year: 2017,
    },
    {
      name: "USB4",
      max_speed: "40 Gbps",
      release_year: 2019,
    },
  ],
  Display: [
    {
      name: "HDMI 1.4",
      max_resolution: "4K at 30Hz",
      release_year: 2009,
    },
    {
      name: "HDMI 2.0",
      max_resolution: "4K at 60Hz",
      release_year: 2013,
    },
    {
      name: "HDMI 2.1",
      max_resolution: "10K at 120Hz",
      release_year: 2017,
    },
    {
      name: "DisplayPort 1.2",
      max_resolution: "4K at 60Hz",
      release_year: 2010,
    },
    {
      name: "DisplayPort 1.4",
      max_resolution: "8K at 60Hz",
      release_year: 2016,
    },
  ],
};

console.log(Object.keys(cableData).length);
function createCableSelect(colIndex) {
  const select = document.createElement("select");
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
    select.addEventListener("change", (event) => updateColumn(event, colIndex));
  }
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

function updateColumn(colIndex, values) {}
