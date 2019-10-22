import gql from "graphql-tag";

const FACULTIES = gql`
    query {
        Faculties {
            _id
            name
            abbreviation
            report
        }
    }
`;

const I01 = gql`
    query I01($faculty: String!){
        reportI01(faculty: $faculty) {
            info {
                code
                value
            }
            data {
                year
                financing
                total
            }
            header {
                nameColumn
            }
        }
    }
`;

const I02 = gql`
    query I02($faculty: String!) {
        reportI02(
            faculty: $faculty
        ) {
            labels {
                tag
                name
            }
            info {
                _id
                code
                value
            }
            data {
                year
                internalS_amount
                internalE_amount
                external_amount
            }
            header {
                nameColumn
            }
        }
    }
`;

const I03 = gql`
    query I03($faculty: String!) {
        reportI02(
            faculty: $faculty
        ) {
            labels {
                tag
                name
            }
            info {
                _id
                code
                value
            }
            data {
                year
                entity
                total
            }
            header {
                nameColumn
            }
        }
    }
`;

const I05 = gql`
    query I05($faculty: String!) {
        reportI02(
            faculty: $faculty
        ) {
            labels {
                tag
                name
            }
            info {
                _id
                code
                value
            }
            data {
                year
                faculty
                total
            }
            header {
                nameColumn
            }
        }
    }
`;

const I06 = gql`
    query I06($faculty: String!) {
        reportI02(
            faculty: $faculty
        ) {
            labels {
                tag
                name
            }
            info {
                _id
                code
                value
            }
            data {
                year
                faculty
                total
            }
            header {
                nameColumn
            }
        }
    }
`;


export { FACULTIES, I01, I02, I03, I05, I06 }
