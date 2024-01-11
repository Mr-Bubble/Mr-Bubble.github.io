import { http } from "@/utils/http";
const app_api = "//ws.lightstar.top";

export function getSkyHeight(user_id) {
  return http.request({
    url: "/sky/getHeights/sky–314877984&" + user_id,
    method: "get",
    individuation: {
      app_api: app_api
    }
  });
}
