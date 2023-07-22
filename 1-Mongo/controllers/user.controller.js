import User from "../mongodb/models/user.js";



const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) return res.status(200).json(userExists);

        const newUser = await User.create({
            name,
            email,
        });
        console.log(name);
        console.log(email);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export {  createUser };