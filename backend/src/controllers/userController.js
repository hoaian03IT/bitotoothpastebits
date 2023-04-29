import { userModel } from "../model/userModel.js";
import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken } from "../utils/index.js";

class userClass {
    // [post] /register
    async register(req, res) {
        try {
            const { email, password } = req.body;
            const hashPassword = bcrypt.hashSync(password, 10);

            const checkUser = await userModel.findOne({ email });

            if (checkUser) res.status(403).send("Email existed");

            const newUser = await userModel.create({ email, password: hashPassword });

            const accessToken = generateAccessToken(newUser);
            const refreshToken = generateRefreshToken(newUser);

            console.log(newUser.email);
            res.status(200).send({
                email: newUser.email,
                isAdmin: newUser.isAdmin,
                accessToken,
                refreshToken,
            });
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // [post] /login
    async login(req, res) {
        try {
            const { email, password } = req.body;

            const userLogin = await userModel.findOne({ email });

            if (!userLogin) res.status(403).send("Email not exist");

            const isMatchPassword = await bcrypt.compare(password, userLogin.password);
            if (!isMatchPassword) res.status(403).send("Password not correct");

            const accessToken = generateAccessToken(userLogin);
            const refreshToken = generateRefreshToken(userLogin);

            res.status(200).send({
                email: userLogin.email,
                isAdmin: userLogin.isAdmin,
                accessToken,
                refreshToken,
            });
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // [post] /refresh-token
    async refreshToken(req, res) {
        try {
            const { refreshToken } = req.body;
            if (!refreshToken) res.status(403).send("Register or Login!");

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) return res.status(403).json({ msg: "Register or Login!" });
                const accessToken = generateAccessToken({ id: user.id });
                res.json({ user, accessToken });
            });
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // [delete] /delete-all
    async deleteAll(req, res) {
        try {
            await userModel.deleteMany();
            res.status(200).send("Deleted");
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export const userController = new userClass();
