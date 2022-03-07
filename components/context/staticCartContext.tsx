import Link from "next/link";
import Image from "next/image";
import { createContext, useContext } from "react";
import { useState } from "react";

// Creando el Context
const HolaContext = createContext(null);
// console.log(HolaContext);

export default HolaContext;
