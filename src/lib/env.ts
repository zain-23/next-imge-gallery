import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  PIXEL_API_KEY: str(),
});

export default env;
