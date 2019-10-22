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
    query I02 {
        reportI02(
            faculty: "INGENIERIA"
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

export { FACULTIES, I01, I02 }
