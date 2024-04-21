const User = require('../models/users');

// Define the register function
function register(req, res) {
    try {
        const { name, email, phone } = req.body;
        const data = User.create({ name, email, phone });
        res.json({
            success: true,
            message: "data entered successfully",
            data: data,
        });

    } catch (error) {
        res.json({ message: error.message, type: 'danger' });
    }
}

// Export the register function
module.exports = register;