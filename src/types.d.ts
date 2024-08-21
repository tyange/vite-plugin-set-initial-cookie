export type SerializableCookie = {
  name: string;
  value: string;
  domain?: string;
  path?: string;
  expires?: Date;
  maxAge?: number;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
  partitioned?: boolean;
};

export type SerializableCookies = SerializableCookie[];
