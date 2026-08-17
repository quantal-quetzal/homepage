import { Outlet } from "@tanstack/react-router";
import Seo from "./components/Seo";

export default function App() {
  return (
    <>
      <Seo />
      <Outlet />
    </>
  );
}
