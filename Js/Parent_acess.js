
    document.getElementById('searchForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var babyName = document.getElementById('babyName').value;
        searchBaby(babyName);
    });

    function searchBaby(babyName) {
        // Simulating search functionality
        // In real implementation, you would make an AJAX request to a server-side script to fetch data
        var resultContainer = document.getElementById('searchResult');
        resultContainer.innerHTML = ''; // Clear previous results
        var resultText = document.createElement('p');
        resultText.textContent = "Search results for baby: " + babyName;
        resultContainer.appendChild(resultText);
        
        // Simulated search results
        var babyDetails = {
            sitter: "John Doe",
            milestone: "First steps",
            interaction: "Friendly"
        };

        for (var key in babyDetails) {
            var detailText = document.createElement('p');
            detailText.textContent = key + ": " + babyDetails[key];
            resultContainer.appendChild(detailText);
        }
    }
