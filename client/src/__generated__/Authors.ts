/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Authors
// ====================================================

export interface Authors_authors_posts {
  __typename: "Post";
  id: number;
}

export interface Authors_authors {
  __typename: "Author";
  id: number;
  firstName: string | null;
  lastName: string | null;
  posts: Authors_authors_posts[];
}

export interface Authors {
  authors: Authors_authors[];
}
