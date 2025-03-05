import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HASHNODE_ENDPOINT_URL } from "./hashnode";

const cache = new InMemoryCache();

export const hashnodeClient = new ApolloClient({
  uri: HASHNODE_ENDPOINT_URL,
  cache,
});