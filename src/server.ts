import {ApolloServer} from "@apollo/server";
import {handlers, startServerAndCreateLambdaHandler} from "@as-integrations/aws-lambda";

const typeDefs = `#graphql
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler()
)