import { NextFunction,Request,Response } from 'express';
import {body,ValidationChain, validationResult} from 'express-validator';

/*Ensure that you are calling the validate middleware after parsing the 
request body.If you're using body-parser, make sure it's included before 
the validate middleware in your middleware chain. Ensure that you're using the validate middleware after parsing the request body and before the route handler that needs validation. Also, make sure to handle 
any asynchronous validation functions correctly within your validators.
*/
export const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            // Running all validations
            for (let validation of validations) {
                await validation.run(req);
            }

            // Checking for validation errors
            const errors = validationResult(req);
            if (errors.isEmpty()) {
                return next();
            }

            // If errors exist, return 422 status with error details
            return res.status(422).json({ errors: errors.array() });
        } catch (error) {
            // Handle any unexpected errors
            console.error('Validation error:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    };
};

export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password")
        .trim()
        .isLength({min: 6})
        .withMessage("Password should contain atleast 6 characters"),
];


export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    // body("email").trim().isEmail().withMessage("Email is required"),
    // body("password")
    //     .trim()
    //     .isLength({min: 6})
    //     .withMessage("Password should contain atleast 6 characters"),
    /*instead of above we can do the below*/
    ...loginValidator,
];

