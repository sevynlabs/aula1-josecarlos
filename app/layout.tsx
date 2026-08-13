import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Diagnóstico da Obra Única | Escola de Incorporadores", description: "Descubra o que está por trás do ciclo de uma obra por vez.", icons: { icon: "/favicon-escola.ico", shortcut: "/favicon-escola.ico" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
