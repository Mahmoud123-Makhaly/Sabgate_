import graphqlClient  from "../../../client";
import mutationDocument from "./createOrderFromCartMutation";
import type { CustomerOrderType, Mutations, MutationsCreateOrderFromCartArgs } from "../../../../graphql/types";

export default async function createOrderFromCart(cartId?: string): Promise<CustomerOrderType> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "createOrderFromCart">>,
    MutationsCreateOrderFromCartArgs
  >({
    mutation: mutationDocument,
    variables: {
      command: {
        cartId,
      },
    },
  });

  return data!.createOrderFromCart;
}
