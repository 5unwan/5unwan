import express from "express";

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || "0.0.0.0");

app.get("/", (req, res, next) => {
  res.send("이유림 바보");
});

app.listen(3000, () => {
  console.log("서버켜짐");
});
