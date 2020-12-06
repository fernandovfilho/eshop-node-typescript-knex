import app from "./app";

app.listen(process.env.PORT, () => {
  console.log("Server listen at port: ", process.env.PORT);
});
