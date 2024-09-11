import {gql} from '@apollo/client/core';

//Consulta para obtener los continentes
export const GET_CONTINENTS = gql`
query GetContinents{
    continents{
        code
        name
    }
}
`;

// Consulta para obtener los países

export const GET_COUNTRIES = gql`
query GetCountries{
    countries{
        code
        name{
            common
        }
        region
        continent{
            name
        }
    }
}
`;
