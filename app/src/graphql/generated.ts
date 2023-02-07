import { useMutation, UseMutationOptions } from 'react-query';
import { fetcher } from '../utils/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Auth = {
  __typename?: 'Auth';
  access_token?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Auth;
  refresh: Auth;
};


export type MutationLoginArgs = {
  loginData: LoginInput;
};


export type MutationRefreshArgs = {
  refreshData: RefreshInput;
};

export type Query = {
  __typename?: 'Query';
  me: Users;
};

export type RefreshInput = {
  refresh_token: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type LoginMutationVariables = Exact<{
  loginData: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', access_token?: string | null, refresh_token?: string | null } };

export type RefreshMutationVariables = Exact<{
  refreshData: RefreshInput;
}>;


export type RefreshMutation = { __typename?: 'Mutation', refresh: { __typename?: 'Auth', refresh_token?: string | null, access_token?: string | null } };


export const LoginDocument = `
    mutation Login($loginData: LoginInput!) {
  login(loginData: $loginData) {
    access_token
    refresh_token
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
      options
    );
export const RefreshDocument = `
    mutation Refresh($refreshData: RefreshInput!) {
  refresh(refreshData: $refreshData) {
    refresh_token
    access_token
  }
}
    `;
export const useRefreshMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RefreshMutation, TError, RefreshMutationVariables, TContext>) =>
    useMutation<RefreshMutation, TError, RefreshMutationVariables, TContext>(
      ['Refresh'],
      (variables?: RefreshMutationVariables) => fetcher<RefreshMutation, RefreshMutationVariables>(RefreshDocument, variables)(),
      options
    );