import jwt from "jsonwebtoken";
import config from "../../../config";

export async function jwtCreate(data) {
  const token = jwt.sign(data, config.JWTsecret);
  return await AuthVerify(token, ["admin", "user"]);
}

export async function AuthVerify(auth, permissions) {
  let token;
  try {
    if (auth) {
      token = jwt.verify(auth, config.JWTsecret);
      if (permissions.indexOf(token.role) === -1) throw "NOT-AUTH-USER";
    } else {
      throw "TOKEN-IS-REQUIRED";
    }
  } catch (e) {
    throw ("ERROR-VERIFY-TOKEN-REQUEST", e);
  }
  token.code = auth;
  return token;
}
