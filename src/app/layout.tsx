import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "The Blog - The next big blog made with Next.js",
        template: "%s | The Blog",
    },
    description: "Made with U123 ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Container>
                    <Header />
                    {children}

                    <footer>
                        <p className="text-6xl font-bold text-center py-8">
                            Footer
                        </p>
                    </footer>
                </Container>
                {/* className= */}
                {/* {`${geistSans.variable} ${geistMono.variable} antialiased`} */}
            </body>
        </html>
    );
}
