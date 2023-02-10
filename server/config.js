const Joi = require("joi");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const config = {
  client_id: "93b83b6c4daa8cf41474",
  redirect_uri: "http://localhost:3000/login",
  client_secret: "3f3ecbbdd3dd56a3e3d2ddc54a7350372ff17791",
  proxy_url: "http://localhost:4000/authenticate"
};

const envVarsSchema = Joi.object({
  client_id: Joi.string().required(),
  redirect_uri: Joi.string().required(),
  client_secret: Joi.string().required(),
  proxy_url: Joi.string().required()
});

const { error } = envVarsSchema.validate(config);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = config;
