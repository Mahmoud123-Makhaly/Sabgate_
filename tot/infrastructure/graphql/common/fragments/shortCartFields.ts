import gql from 'graphql-tag'

export const SHORT_CART_FIELDS = gql`
  fragment shortCartFields on CartType {
    id
    itemsQuantity
    items {
      id
      sku
      quantity
      productId
      extendedPrice {
        amount
      }
    }
  }
`;
