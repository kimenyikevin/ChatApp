import Joi from "@hapi/joi";
class Validation {
  uservalidation = (req, res, next) => {
    const schema = {
      firstName: Joi.string().required().regex(/^[a-zA-Z]+$/),
      lastName: Joi.string().required().regex(/^[a-zA-Z]+$/),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(8)
        .max(15)
        .required().alphanum(),
      birthDay: Joi.string().required(),
      gender: Joi.string().required(),
    };
    const result = Joi.validate(req.body, schema);
    if (result.error) {
     return res.status(400).send({
        status: 400,
        error: result.error.details[0].message
      });
    } 
      next();
  }
}
export default new Validation();