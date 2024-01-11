import { http } from "@/utils/http";
const app_api = "//apis.jxcxin.cn";

export function postXmPorts(data) {
  return http.request({
    url: "/api/mi",
    method: "post",
    data,
    individuation: {
      app_api: app_api
    }
  });
}
