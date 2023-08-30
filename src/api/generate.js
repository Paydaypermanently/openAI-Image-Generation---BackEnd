const express = require("express");
const router = express.Router();
// const { OpenAIApi } = require("../openai");
const { Configuration, OpenAIApi } = require("openai");

console.log(Configuration);
console.log(OpenAIApi);
router.post("/image", async (req, res) => {
  //   const inputText = req.body.text; // Assuming the input text is sent as {"text": "your text here"}
  //   try {
  //     // Make a request to OpenAI Image API to generate an image
  //     const response = await OpenAIApi.OpenAI.Images({
  //       prompt: inputText,
  //     });
  //     // Extract the image URL from the API response
  //     const imageUrl = response.data.url;
  //     res.json({ imageUrl });
  //   } catch (error) {
  //     console.error("Error generating image:", error.response.data);
  //     res
  //       .status(500)
  //       .json({ error: "An error occurred while generating the image." });
  //   }
});

module.exports = router;
