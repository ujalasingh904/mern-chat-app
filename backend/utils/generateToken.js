import jwt from "jsonwebtoken"

export const generateTokenAndSetCookie = (userId, res) => {
    try {
        const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' })

        res.cookie('access_token', token, {
            httpOnly: true,
            maxAge: 1 * 24 * 60 * 60 * 1000,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
        });


    } catch (error) {
        console.error('Error in generating token:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }


} 