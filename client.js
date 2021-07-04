const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const client = new todoPackage.Todo(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

client.createTodo(
  {
    id: -1,
    text: "Do Laundry",
  },
  (err, res) => {
    if (err) throw err;
    console.log(`Reciented response from grpc server ${JSON.stringify(res)}`);
  }
);
