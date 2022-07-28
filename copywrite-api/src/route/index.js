const express = require("express");
const router = express.Router();

const reverseWord = require("../utils/reverseWord");
const checkPalindrome = require("../utils/checkPalindrome");

router.get("/iecho", (req, res) => {
  let { text } = req.query;
  if (text) {
    res
      .status(200)
      .json({ text: reverseWord(text), palindrome: checkPalindrome(text) });
  } else {
    res.status(400).json({ error: "no text" });
  }
});

module.exports = router;
