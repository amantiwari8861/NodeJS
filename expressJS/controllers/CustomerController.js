const fs = require('fs/promises');

// Get All Customers
exports.getAllCustomers = async (req, res) => {
    try {
        const data = await fs.readFile('./db/Customers.json', 'utf-8');
        const customers = JSON.parse(data);
        res.json(customers);
    } catch (err) {
        res.status(500).json({ error: 'Unable to fetch customers' });
    }
};

// Get Specific Customer
exports.getSpecificCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await fs.readFile('./db/Customers.json', 'utf-8');
        const customers = JSON.parse(data);

        const customer = customers.find(c => c.id === parseInt(id));
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        res.json(customer);
    } catch (err) {
        res.status(500).json({ error: 'Unable to fetch customer' });
    }
};

// Add a New Customer
exports.addCustomer = async (req, res) => {
    try {
        const newCustomer = req.body;
        const data = await fs.readFile('./db/Customers.json', 'utf-8');
        const customers = JSON.parse(data);

        customers.push(newCustomer);
        await fs.writeFile('./db/Customers.json', JSON.stringify(customers, null, 2));

        res.status(201).json({ message: 'Customer added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Unable to add customer' });
    }
};

// Update a Customer
exports.updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const data = await fs.readFile('./db/Customers.json', 'utf-8');
        const customers = JSON.parse(data);

        const index = customers.findIndex(c => c.id === parseInt(id));
        if (index === -1) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        customers[index] = { ...customers[index], ...updatedData };
        await fs.writeFile('./db/Customers.json', JSON.stringify(customers, null, 2));

        res.json({ message: 'Customer updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Unable to update customer' });
    }
};

// Delete a Customer
exports.deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await fs.readFile('./db/Customers.json', 'utf-8');
        const customers = JSON.parse(data);

        const filteredCustomers = customers.filter(c => c.id !== parseInt(id));
        if (filteredCustomers.length === customers.length) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        await fs.writeFile('./db/Customers.json', JSON.stringify(filteredCustomers, null, 2));

        res.json({ message: 'Customer deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Unable to delete customer' });
    }
};
