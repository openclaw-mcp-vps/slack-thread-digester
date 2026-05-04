import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Slack Thread Digester — Turn long Slack threads into structured summaries",
  description: "Analyzes Slack thread exports and generates executive summaries with key decisions, action items, and participant insights. Built for remote team leads and project managers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="068cdef8-2847-470f-9923-09a500454d32"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
