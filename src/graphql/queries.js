import { gql } from 'graphql-tag';

export const GET_PREVIEW_PRODUCTS = gql`
    query PreviewProducts {
        products {
            id
            name
            price
            discounted
            image
            category
            description
            tags
        }
    }
`;

export const GET_PRODUCT_BY_ID = gql`
    query Product($id: ID!) {
        product(id: $id) {
            id
            name
            price
            discounted
            image
            category
            description
            tags
            rating
            reviews
        }
    }
`;

export const GET_PRODUCT_BY_CATEGORY = gql`
    query ProductsByCategory($category: String!) {
        productsByCategory(category: $category) {
            id
            name
            price
            discounted
            image
            category
            description
            tags
        }
    }
`;

export const GET_PRODUCT_BY_TAG = gql`
    query ProductsByTag($tag: String!) {
        productsByTag(tag: $tag) {
            id
            name
            price
            discounted
            image
            category
            description
            tags
        }
    }
`;