import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import generateSpfxWebPart from "./routes/generateSpfxWebPart";
import generateUiComponent from "./routes/generateUiComponent";

dotenv.config();
const app = express();
const PORT = process.env.SD_PUBLIC_PORT || 3000;

app.use(bodyParser.json());

app.post("/generate-spfx-webpart", generateSpfxWebPart);
app.post("/generate-ui-component", generateUiComponent);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
