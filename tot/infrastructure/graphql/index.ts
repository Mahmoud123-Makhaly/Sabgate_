import { AccountRepository } from './account';
import { GraphQLClient } from './graphqlClient';
import { ProductRepository } from './product';
import { SEORepository } from './seoRepository';
export const GraphQLModule = {
  Client: GraphQLClient,
  ProductRepository: ProductRepository,
  SEORepository: SEORepository,
  AccountRepository: AccountRepository,
};
