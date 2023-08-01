import { useContext } from "react";
import { MainContext } from "./main";

export default function useMainContext() {
  return useContext(MainContext)
}