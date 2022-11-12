import "./App.css";
import Sunburst from "sunburst-chart";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

function App() {
  const ref = useRef();

  const data = {
    name: "ATT&CK TREE",
    children: [
      {
        name: "Reconnaissance",
        children: [
          {
            name: "Active Scanning",
            children: [
              {
                name: "Vulnerability Scanning",
                value: 2,
              },
            ],
          },
          {
            name: "Gather Victim Identity Information",
            children: [
              {
                name: "Credentials",
                value: 2,
              },
              {
                name: "Email Addresses",
                value: 2,
              },
            ],
          },
          {
            name: "Search Victim-Owned Website",
            value: 2,
          },
        ],
      },
      {
        name: "Resource Development",
        children: [
          {
            name: "Acquire Infrastructure",
            children: [
              {
                name: "Domains",
                value: 2,
              },
              {
                name: "Server",
                value: 2,
              },
              {
                name: "Virtual Private Server",
                value: 2,
              },
              {
                name: "Web Services",
                value: 2,
              },
            ],
          },
          {
            name: "Develop Capabilities",
            children: [
              {
                name: "Malware",
                value: 2,
              },
              {
                name: "Digital Certificates",
                value: 2,
              },
            ],
          },
          {
            name: "Establish Accounts",
            children: [
              {
                name: "Email Accounts",
                value: 2,
              },
              {
                name: "Social Media Accounts",
                value: 2,
              },
            ],
          },
          {
            name: "Obtain Capabilities",
            children: [
              {
                name: "Code Signing Certificates",
                value: 2,
              },
              {
                name: "Malware",
                value: 2,
              },
              {
                name: "Tool",
                value: 2,
              },
            ],
          },
          {
            name: "Stage Capabilities",
            children: [
              {
                name: "Dive-by Target",
                value: 2,
              },
              {
                name: "Upload Malware",
                value: 2,
              },
            ],
          },
        ],
      },
      {
        name: "Initial Access",
        children: [
          {
            name: "Drive-by Compromise",
            value: 2,
          },
          {
            name: "Exploit Public-Facing Applicaation",
            value: 2,
          },
          {
            name: "External Remote Services",
            value: 2,
          },
          {
            name: "Phishing",
            children: [
              {
                name: "Spearphishing Attachment",
                value: 2,
              },
              {
                name: "Spearphishing Link",
                value: 2,
              },
              {
                name: "Spearphishing via Service",
                value: 2,
              },
            ],
          },
          {
            name: "Replication Through Removable Media",
            value: 2,
          },
          {
            name: "Supply chain Compromise",
            children: [
              {
                name: "Compromise Software Supply Chain",
                value: 2,
              },
            ],
          },
          {
            name: "Trusted Relationship",
            value: 2,
          },
          {
            name: "Valid Accounts",
            children: [
              {
                name: "Cloud Accounts",
                value: 2,
              },
              {
                name: "Domain Accounts",
                value: 2,
              },
              {
                name: "Local Accounts",
                value: 2,
              },
            ],
          },
        ],
      },
      {
        name: "Execution",
        children: [
          {
            name: "Command and Scripting Interpreter",
            children: [
              {
                name: "JavaScript",
                value: 2,
              },
              {
                name: "PowerShell",
                value: 2,
              },
              {
                name: "Python",
                value: 2,
              },
              {
                name: "Visual Basic",
                value: 2,
              },
              {
                name: "Windows Command Shell",
                value: 2,
              },
            ],
          },
          {
            name: "Exploitation for Client Execution",
            value: 2,
          },
          {
            name: "Inter-Process Communication",
            children: [
              {
                name: "Dynamic Data Exchange",
                value: 2,
              },
            ],
          },
          {
            name: "Native API",
            value: 2,
          },
          {
            name: "Scheduled Task/Job",
            children: [
              {
                name: "Scheduled Task",
                value: 2,
              },
              {
                name: "At",
                value: 2,
              },
              {
                name: "Cron",
                value: 2,
              },
            ],
          },
          {
            name: "System Services",
            children: [
              {
                name: "Service Execution",
                value: 2,
              },
            ],
          },
          {
            name: "User Execution",
            children: [
              {
                name: "Malicious File",
                value: 2,
              },
              {
                name: "Malicious Link",
                value: 2,
              },
            ],
          },
          {
            name: "Windows Management Instrumentation",
            value: 2,
          },
        ],
      },
      {
        name: "Persistence",
        children: [
          {
            name: "Boot or Logon Autostart Execution",
            children: [
              {
                name: "Registry Run Keys / Startup Folder",
                value: 2,
              },
              {
                name: "Shortcut Modification",
                value: 2,
              },
              {
                name: "Winlogon Helper DLL",
                value: 2,
              },
            ],
          },
          {
            name: "BITS Jobs",
            value: 2,
          },
          {
            name: "Create Account",
            children: [
              {
                name: "Domain Account",
                value: 2,
              },
              {
                name: "Local Account",
                value: 2,
              },
            ],
          },
          {
            name: "Create or Modify System Process",
            children: [
              {
                name: "Windows Service",
                value: 2,
              },
            ],
          },
          {
            name: "Event Triggered Execution",
            children: [
              {
                name: "Accessibility Features",
                value: 2,
              },
              {
                name: "Windows Management Instrumentation Event Subscription",
                value: 2,
              },
            ],
          },
          {
            name: "External Remote Services",
            value: 2,
          },
          {
            name: "Hijack Execution Flow",
            children: [
              {
                name: "DLL Search Order Hijacking",
                value: 2,
              },
              {
                name: "DLL Side-Loading",
                value: 2,
              },
            ],
          },
          {
            name: "Server Software Component",
            children: [
              {
                name: "Web Shell",
                value: 2,
              },
            ],
          },
          {
            name: "Valid Accounts",
            children: [
              {
                name: "Domain Accounts",
                value: 2,
              },
              {
                name: "Local Accounts",
                value: 2,
              },
              {
                name: "Cloud Accounts",
                value: 2,
              },
            ],
          },
        ],
      },
      {
        name: "Privilege Escalation",
        children: [
          {
            name: "Abuse Elevation Control Mechanism",
            children: [
              {
                name: "Bypass User Account Control",
                value: 2,
              },
            ],
          },
          {
            name: "Exploration for Privilege Escalation",
            value: 2,
          },
          {
            name: "Process Injection",
            children: [
              {
                name: "Dynamic-link Library Injection",
                value: 2,
              },
              {
                name: "Process Hollowing",
                value: 2,
              },
            ],
          },
        ],
      },
      {
        name: "Defense Evasion",
        children: [
          {
            name: "Deobfuscate/Decode Files or Information",
          },
          {
            name: "Hide Artifacts",
            children: [
              {
                name: "Hidden Files and Directories",
                value: 2,
              },
              {
                name: "Hidden Window",
                value: 2,
              },
            ],
          },
          {
            name: "Impair Defenses",
            children: [
              {
                name: "Disable or Modify System Firewall",
                value: 2,
              },
              {
                name: "Disable or Modify Tools",
                value: 2,
              },
            ],
          },
          {
            name: "Indicator Removal",
            children: [
              {
                name: "Clear Command History",
                value: 2,
              },
              {
                name: "Clear Windows Event Logs",
                value: 2,
              },
              {
                name: "File Deletion",
                value: 2,
              },
              {
                name: "Timestomp",
                value: 2,
              },
            ],
          },
          {
            name: "Masquerading",
            children: [
              {
                name: "Masquerade Task or Service",
                value: 2,
              },
              {
                name: "Match Legitimate Name or Location",
                value: 2,
              },
              {
                name: "Right-to-Left Override",
                value: 2,
              },
            ],
          },
          {
            name: "Modify Registry",
          },
          {
            name: "Obfuscated Files or Information",
            children: [
              {
                name: "Binary Padding",
                value: 2,
              },
              {
                name: "Indicator Removal from Tools",
                value: 2,
              },
              {
                name: "Software Packing",
                value: 2,
              },
              {
                name: "Steganography",
                value: 2,
              },
            ],
          },
          {
            name: "Subvert Trust Controls",
            children: [
              {
                name: "Code Signing",
                value: 2,
              },
            ],
          },
          {
            name: "System Binary Proxy Execution",
            children: [
              {
                name: "Compiled HTML File",
                value: 2,
              },
              {
                name: "Mshta",
                value: 2,
              },
              {
                name: "Regsvr32",
                value: 2,
              },
              {
                name: "Rundll32",
                value: 2,
              },
              {
                name: "Msiexec",
                value: 2,
              },
            ],
          },
          {
            name: "Template Injection",
            value: 2,
          },
        ],
      },
      {
        name: "Credentials Access",
        children: [
          {
            name: "Brute Force",
            children: [
              {
                name: "Password Cracking",
                value: 2,
              },
              {
                name: "Password Spraying",
                value: 2,
              },
            ],
          },
          {
            name: "Credentials From Password Stores",
            children: [
              {
                name: "Credentials from Web Browsers",
                value: 2,
              },
              {
                name: "Password Managers",
                value: 2,
              },
            ],
          },
          {
            name: "Inout Capture",
            children: [
              {
                name: "Keylogging",
                value: 2,
              },
            ],
          },
          {
            name: "OS Credentials Dumping",
            children: [
              {
                name: "Cached Domain Credentials",
                value: 2,
              },
              {
                name: "LSA Secrets",
                value: 2,
              },
              {
                name: "LSASS Memory",
                value: 2,
              },
              {
                name: "NTDS",
                value: 2,
              },
              {
                name: "Security Account Manager",
                value: 2,
              },
            ],
          },
          {
            name: "Unsecured Credentials",
            children: [
              {
                name: "Credentials In Files",
                value: 2,
              },
            ],
          },
          {
            name: "Network Sniffing",
            value: 2,
          },
        ],
      },
      {
        name: "Lateral Movement",
        children: [
          {
            name: "Exploitation of Remote Services",
            value: 2,
          },
          {
            name: "Internal Spearphishing",
            value: 2,
          },
          {
            name: "Lateral Tool Transfer",
            value: 2,
          },
          {
            name: "Remote Services",
            children: [
              {
                name: "Remote Desktop Protocol",
                value: 2,
              },
              {
                name: "SMB/Windows Admin Shares",
                value: 2,
              },
              {
                name: "SSH",
                value: 2,
              },
              {
                name: "Windows Remote Management",
                value: 2,
              },
            ],
          },
          {
            name: "Use Alternate Authentication Material",
            children: [
              {
                name: "Pass the Hash",
                value: 2,
              },
              {
                name: "Pass the Ticket",
                value: 2,
              },
            ],
          },
        ],
      },
      {
        name: "Exfiltration",
        children: [
          {
            name: "Exfiltration Over C2 Channel",
            value: 2,
          },
          {
            name: "Exfiltration Over Unencrypted Non-C2 Protocol",
            value: 2,
          },
          {
            name: "Exfiltration to Cloud Storage",
            value: 2,
          },
          {
            name: "Automated Exfiltration",
            value: 2,
          },
        ],
      },
      {
        name: "Impact",
        children: [
          {
            name: "Data Destruction",
            value: 2,
          },
          {
            name: "Data Encrypted for Impact",
            value: 2,
          },
          {
            name: "Resource Hijacking",
            value: 2,
          },
          {
            name: "Automated Exfiltration",
            value: 2,
          },
          {
            name: "Disk Wipe",
            value: 2,
          },
        ],
      },
    ],
  };

  const myChart = Sunburst();
  const color = d3.scaleOrdinal(d3.schemeAccent);

  useEffect(() => {
    data &&
      myChart
        .data(data)
        .color((d, parent) => color(parent ? parent.data.name : null))(
          ref.current
        )
        .width(500)
        .height(500);
  }, [data]);

  return (
    <div className="App">
      <div className="headline">
        <h1>MITRE ATT&CK</h1>
        <h4>
          Below are the tactics and techniques representing the MITRE ATT&CK by
          sunburst diagram.
        </h4>
      </div>
      <header className="App-header" ref={ref}></header>
    </div>
  );
}

export default App;
