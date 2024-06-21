import jwt from "jsonwebtoken"

export const generateTokenAndSetCookie = (userId, res) => {
    try {
        const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' })

        res
            .cookie('access_token', token, {
                httpOnly: true,
                maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day,
                sameSite:'strict',
                secure: process.env.NODE_ENV === 'production',

            })


    } catch (error) {
        res.status(401).json(error)
    }


} 