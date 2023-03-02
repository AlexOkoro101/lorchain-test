export type User = Record<string, any>;

export interface EmptyStateType {
  type: 'user' | 'repo' | 'default'
}; 

export type RepoProps = User;