import type { Metadata } from "next";
import "./globals.css";
import AgentWidget from '@/components/AgentWidget';
export const metadata: Metadata = {
  title: "AuditReady — Fair Lending Audit Prep Data Room",
  description: "Pre-packaged audit-ready data room with peer comparisons, disparity analysis, and remediation documentation templates fo",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#07050F", color: "#E8EAF0", fontFamily: "monospace", margin: 0 }}>
        {children}
            <AgentWidget />
    </body>
    </html>
  );
}
