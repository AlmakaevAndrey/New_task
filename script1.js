async function loadTableData() {
    try {
        const response = await fetch("./localization.json");

        if (!response.ok) {
            throw new Error('Error');
        }

        const data = await response.json();

        const table = document.querySelector("#myTable");

        const thead = document.createElement("thead");
        thead.classList.add("header");

        const tr = document.createElement("tr");
        tr.classList.add("header-row");
         

        Object.keys(data.head).forEach(headerKey => {
            const th = document.createElement("th");
            th.textContent = data.head[headerKey];
            tr.appendChild(th);
            tr.classList.add("text-head");
            
        });

        thead.appendChild(tr);
        table.appendChild(thead);

        const tbody = document.createElement("tbody");
        const hr = document.createElement("hr");
        table.appendChild(tbody);
        tbody.appendChild(hr);
        hr.classList.add("border")

        Object.keys(data).forEach(rowKey =>  {
            if (rowKey.startsWith("row_")) {
                const row = data[rowKey];

                const tr = document.createElement("tr");

                Object.keys(row).forEach(cellKey => {
                    const td = document.createElement("td");
                    td.textContent = row[cellKey];
                    tr.appendChild(td);
                    tr.classList.add("text-row");
                    td.classList.add("text-data");
                });

                tbody.appendChild(tr);

                const hr = document.createElement("hr");
                tbody.appendChild(hr);
                hr.classList.add("border");
            }
        })

    } catch (error) {
        console.error('Error:', error);
    }
}

loadTableData();
