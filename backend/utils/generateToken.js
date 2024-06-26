import jwt from "jsonwebtoken"

export const generateTokenAndSetCookie = (userId, res) => {

    // const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' })
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    // res.cookie('access_token', token, {
    //     httpOnly: true,
    //     maxAge: 1 * 24 * 60 * 60 * 1000,
    //     sameSite: 'strict',
    //     secure: process.env.NODE_ENV === 'production',
    // });

    res.cookie("access_token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        // secure: process.env.NODE_ENV === "production",
    });
} 