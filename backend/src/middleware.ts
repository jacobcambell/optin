import { Request, Response, NextFunction } from 'express'

export const formDataCheck = (req: Request, res: Response, next: NextFunction) => {
    const check = [
        req.body.email,
        req.body.first_name,
        req.body.last_name,
        req.body.phone,
        req.body.address,
        req.body.zip_code,
        req.body.country
    ];

    if (check.includes(undefined) || check.includes(null)) {
        res.status(400).json({ message: 'Please provide all the required fields' })
        return;
    }

    next()
}