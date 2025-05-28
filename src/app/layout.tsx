import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Creative AI Studio Dashboard",
  description: "Swiss Design, Grid-based, Modern UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <ThemeProvider>
          <div className="grid grid-rows-[auto_1fr] min-h-screen">
            {/* Header */}
            <header className="px-8 py-6 border-b border-border flex items-center justify-between bg-white/80 backdrop-blur-md z-10">
              <h1 className="text-3xl font-bold tracking-tight uppercase text-gray-900 dark:text-gray-100">Creative AI Studio</h1>
              <nav className="flex gap-4">
                {/* miejsce na menu, dropdown, user actions */}
                {/** Możesz tu dodać <DropdownMenu /> lub inne akcje */}
              </nav>
            </header>
            {/* Main grid */}
            <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-8 py-12 max-w-7xl mx-auto w-full">
              {/* Sidebar (opcjonalnie) */}
              {/* <aside className="hidden lg:block lg:col-span-3">Sidebar/menu</aside> */}
              <section className="col-span-1 lg:col-span-12">{children}</section>
            </main>
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 