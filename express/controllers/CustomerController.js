const fs = require("fs").promises; // Use fs.promises for promise-based methods

exports.getAllCustomers = async (req, res) => {
    console.log("Giving all customers");
    try {
        // Read the JSON file asynchronously
        const data = await fs.readFile("./db/Customers.json", "utf-8");
        const customers = JSON.parse(data); // Parse JSON data
        res.json(customers); // Send parsed data as JSON response
    } catch (err) {
        console.error("Error reading file:", err.message);
        res.status(500).send("An error occurred while retrieving customers.");
    }
};
