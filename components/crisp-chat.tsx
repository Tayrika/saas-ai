"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("04be0b3e-89c9-404e-815d-3d040904955a");
  }, []);

  return null;
}