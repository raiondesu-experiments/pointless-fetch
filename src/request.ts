export type TRequest = RequestInit & { url: string };

export const request = ({ url, ...init }: TRequest) => new Request(url, init);
