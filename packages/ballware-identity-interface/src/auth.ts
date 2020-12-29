export interface Session {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  issued: Date;
}

export interface SessionWithUserInfo extends Session {
  identifier: string;
  email: string;
}

export interface IdentityAuthApi {
  login: <T extends SessionWithUserInfo>(
    email: string,
    password: string,
    client: string,
    secret: string,
    userinfoMapper: (sessionWithUserInfo: T, userinfo: Record<string, unknown>) => T,
  ) => Promise<T>;
  logout: (accessToken: string, client: string, secret: string) => Promise<void>;
  register: (email: string, password: string, displayname: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (email: string, code: string, newPassword: string) => Promise<void>;
  changePassword: (accessToken: string, oldPassword: string, newPassword: string) => Promise<void>;
  refreshToken: (refreshToken: string, client: string, secret: string) => Promise<Session>;
}
