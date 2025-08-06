import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    index("./routes/home.tsx"),
    layout("./routes/_layout.tsx", [
        route("", "./routes/home/index.tsx"), 
    ])
    
] satisfies RouteConfig;
