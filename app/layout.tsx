import { ClerkProvider } from "@clerk/nextjs/dist/components.server";
import { dark } from "@clerk/themes";
import RootStyleRegistry from "./emotion";

export const metadata = {
  title: "Feed the cats",
  description: "Feed your cats the right way",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  other: {
    HandheldFriendly: "true",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <RootStyleRegistry>
          <body>{children}</body>
        </RootStyleRegistry>
      </ClerkProvider>
    </html>
  );
}
