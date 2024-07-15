const jwt = require("jsonwebtoken");

const genTokenAndSetCookie = (user, res) => {
  const token = jwt.sign({ user: user._id }, process.env.JWT_SECERT, {
    expiresIn: "15d",
  });

  res.cookie(String(user._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
    httpOnly: true,
    sameSite: "lax",
  });
};

module.exports = genTokenAndSetCookie;
