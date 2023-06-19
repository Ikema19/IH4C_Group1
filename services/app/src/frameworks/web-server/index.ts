import { appSettings } from "@/config";

const server = require("./server");

// サーバー起動
const port = appSettings.port;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
