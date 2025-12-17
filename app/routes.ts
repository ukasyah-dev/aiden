import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("api", [route("hello", "routes/api/hello.ts")]),
  ...prefix("auth", [
    layout("routes/auth/layout.tsx", [route("login", "routes/auth/login.tsx")]),
  ]),
] satisfies RouteConfig;
