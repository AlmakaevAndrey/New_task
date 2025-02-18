async function loadTableData() {
    try {
        const response = await fetch("./localization.json");

        if (!response.ok) {
            throw new Error('Error');
        }

        const data = await response.json();

        const table = document.querySelector("#myTable");

        const thead = table.querySelector("thead tr");

        Object.values(data.head).forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            thead.appendChild(th);
            th.classList.add("text-head");
        });

        const tbody = table.querySelector("tbody");

        for (let rowKey in data) {
            if (rowKey.startsWith("row_")) {
                const row = data[rowKey];

                const tr = document.createElement("tr");

                Object.values(row).forEach(cellText => {
                    const td = document.createElement("td");
                    td.textContent = cellText;
                    tr.appendChild(td);
                    tr.classList.add("text-row");
                    td.classList.add("text-data");
                });

                tbody.appendChild(tr);
            }
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

loadTableData();
