import {ApolloServer} from "@apollo/server"
import {handlers, startServerAndCreateLambdaHandler} from "@as-integrations/aws-lambda"
import { readFileSync } from 'fs'

const typeDefs = readFileSync('./src/schema/schema.graphql', { encoding: 'utf-8' })

const resolvers = {
  Query: {
    books: () => []
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