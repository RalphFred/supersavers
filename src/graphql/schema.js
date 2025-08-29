export const typeDefs = `
    type Product {
        id: ID!
        name: String!
        price: Float!
        discounted: Float
        image: [String!]!
        category: String!
        description: String!
        rating: Float!
        reviews: Int!
        tags: [String!]!
    }

    type Query {
        products: [Product!]!
    }
`;
