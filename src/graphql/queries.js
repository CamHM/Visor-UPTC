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
                ANIOEJECUCION
                TIPOFINANCIACION
                TOTAL
            }
            header {
                nameColumn
            }
        }
    }
`;

export { FACULTIES, I01 }
