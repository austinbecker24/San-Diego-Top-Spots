$(document).ready(function () {
    $.getJSON("data.json", function (data) {
        // data is the array from data.json
        data.forEach(function (spot) {
            const name = spot.name;
            const description = spot.description;
            const lat = spot.location[0];
            const lng = spot.location[1];

            const mapUrl = "https://www.google.com/maps?q=" + lat + "," + lng;

            // Build a table row as an HTML string
            const rowHtml = `
                <tr>
                    <td>${name}</td>
                    <td>${description}</td>
                    <td>
                        <a href="${mapUrl}" target="_blank" rel="noopener noreferrer">
                            <button>Open in Google Maps</button>
                        </a>
                    </td>
                </tr>
            `;

            // Append the row to the table body
            $("#tableBody").append(rowHtml);
        });
    });
});