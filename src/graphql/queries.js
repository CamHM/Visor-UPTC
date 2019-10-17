import gql from "graphql-tag";

const FACULTIES = gql`
    query {
        Faculties {
            _id
            name
            abbreviation
        }
    }
`;

export { FACULTIES }
