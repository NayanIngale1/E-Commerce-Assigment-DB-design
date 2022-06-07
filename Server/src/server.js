const app = require("./index");
const connect = require("./configs/db");

app.listen(5555, async () => {
  try {
    await connect();
    console.log("Database connected successfully...!");
    console.log("\nListning on port 5555.....!");
  } catch (error) {
    console.log("error:", error);
  }
});
