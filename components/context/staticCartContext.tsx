import Link from "next/link";
import Image from "next/image";
import { createContext, useContext } from "react";
import { useState } from "react";

// Creando el Context
const HolaContext = createContext({ count: 0 });
console.log(HolaContext);

export default HolaContext;
