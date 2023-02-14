import type { NextWebVitalsMetric } from "next/app";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label !== "web-vital") return;

  switch (metric.name) {
    case "FCP":
      // handle FCP results
      console.log("## FCP", metric);
      break;
    case "LCP":
      console.log("## LCP", metric);
      // handle LCP results
      break;
    case "CLS":
      // handle CLS results
      console.log("## CLS", metric);
      break;
    case "FID":
      // handle FID results
      console.log("## FID", metric);
      break;
    case "TTFB":
      console.log("## TTFB", metric);
      // handle TTFB results
      break;
    case "INP":
      // handle INP results (note: INP is still an experimental metric)
      break;
    default:
      break;
  }
}
