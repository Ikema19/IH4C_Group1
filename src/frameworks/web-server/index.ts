import config from "@/config";

const server = require("./server");

// サーバー起動
const port = config.app.port;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
