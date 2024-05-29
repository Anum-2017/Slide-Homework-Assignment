
/* Set Timeout Exercise
Use setTimeout within a function to simulate a delay in processing (e.g., retrieving data from a database). The function should accept a callback and invoke it after a delay of 2 seconds. */

function simulateDelay(callback: () => void) {
    setTimeout(callback, 2000); // 2000 milliseconds = 2 seconds
}

function fetchDataFromDatabase() {
    console.log("Fetching data from database...");
    simulateDelay(() => {
        console.log("Data retrieved successfully!");
        // You can perform further operations here with the retrieved data
    });
}

// Call the function to start fetching data
fetchDataFromDatabase();


