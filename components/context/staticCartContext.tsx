import Link from "next/link";
import Image from "next/image";
// @ts-ignore
import { createContext, useContext } from "react";
// @ts-ignore
import { useState } from "react";

// Creando el Context
const HolaContext = createContext(null);
// console.log(HolaContext);

export default HolaContext;
