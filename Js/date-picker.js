function populateDays() {
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var daysInMonth = new Date(year, month, 0).getDate();

    var daySelect = document.getElementById("day");
    daySelect.innerHTML = '';

    for (var i = 1; i <= daysInMonth; i++) {
    var option = document.createElement("option");
    option.textContent = i;
    option.value = i;
    daySelect.appendChild(option);
    }
}

function populateYears() {
    var yearSelect = document.getElementById("year");
    var currentYear = new Date().getFullYear();

    for (var i = currentYear; i >= currentYear - 100; i--) {
    var option = document.createElement("option");
    option.textContent = i;
    option.value = i;
    yearSelect.appendChild(option);
    }
}

populateDays();
populateYears();
document.getElementById("month").addEventListener("change", populateDays);
document.getElementById("year").addEventListener("change", populateDays);