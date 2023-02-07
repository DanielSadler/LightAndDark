import { graphql } from 'msw';

export const exampleQuery = graphql.query('Example', (req, res, ctx) => {
  return res(ctx.data({}));
});
