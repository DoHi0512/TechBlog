import axios, { AxiosRequestConfig } from "axios";

export default function RequestApi(req: AxiosRequestConfig, token?: string) {
  try {
    const res = token
      ? axios({
          method: req.method,
          url: req.url,
          data: req.data,
          withCredentials: true,
          headers: {
            cookie: token,
          },
        })
      : axios({
          method: req.method,
          url: req.url,
          data: req.data,
          withCredentials: true,
        });
    return res;
  } catch (err) {
    return err;
  }
}
