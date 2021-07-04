[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## gRPC: HTTP/2 RPC protocol

[protocol buffers tutorial](https://www.youtube.com/watch?v=46O73On0gyI)

### Agenda

- Motivation
  - Client/Server communication
  - Problem with client libraries
  - Why gRPC was invented
- gRPC
  - Unary gRPC
  - Server streaming
  - Client streaming
  - Bidirectional

## The problem with client libraries

- Hard to maintain and patch client libraries:
  - HTTP 1.1 / HTTP 2, new features, security etc.
- Any communication protocol needs client library for the language of choice
  - SOAP library
  - HTTP client library

## Why gRPC was invented

- Client library: one library for all popular languages
- Protocol HTTP/2 (hidden implementation)
- Message format: protocol buffers as format

## Code implementation

- Todo application with gRPC
- createTodo()
- readTodos() // synchronous
- readTodo() // server stream
