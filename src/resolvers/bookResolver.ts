import {Books, Resolvers} from "../__generated__/resolvers-types";

const books: Books[] = [
  { author: 'bob', title: "Bob's book " },
  { author: 'jane', title: "Jane's book" }
]

export const bookResolver: Resolvers = {
  Query: {
    books: () => books
  },
  Mutation: {
    addBook: (_, args) => {
      const book = {title: args.title, author: args.author}
      books.push(book)
      return book
    }
  }
}