type TokenState = {
  email: string;
  id: string;
  phone: string;
};

export type UserTokenState = {
  payload: TokenState;
};
