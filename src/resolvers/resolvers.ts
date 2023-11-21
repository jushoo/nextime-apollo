import {bookResolver} from "./bookResolver";
import {mergeResolvers} from "@graphql-tools/merge";

const resolversArray = [ bookResolver ]

export const resolvers = mergeResolvers(resolversArray)