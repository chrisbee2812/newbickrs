import type { Route } from "./+types/home";
import { Outlet } from "react-router";
import Header from "../components/headfoot/Header";
import Footer from "../components/headfoot/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
);
}
