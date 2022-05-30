import {
  GraphQLClient
} from "graphql-request";
export function request({
  query,
  variables,
  preview
}) {
  const endpoint = preview ?
    `https://graphql.datocms.com/preview` :
    `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer 4494c1175aa778d0041d1269f2b202`,
    },
  });
  return client.request(query, variables);
}