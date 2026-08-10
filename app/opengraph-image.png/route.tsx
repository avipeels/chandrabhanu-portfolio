import { ImageResponse } from "next/og";
import { defaultDescription, defaultTitle, siteUrl } from "../seo";

export const runtime = "edge";

const size = {
  width: 1200,
  height: 630,
};

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f8f4ed",
          color: "#1d1b18",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          width: "100%",
        }}
      >
        <img
          alt=""
          src={`${siteUrl}/images/hero-bg-253212.png`}
          style={{
            height: "100%",
            objectFit: "cover",
            width: 520,
          }}
        />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 72px",
          }}
        >
          <div
            style={{
              color: "#70675c",
              fontSize: 30,
              letterSpacing: 0,
              marginBottom: 32,
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: 0,
              lineHeight: 1,
              marginBottom: 28,
            }}
          >
            {defaultTitle}
          </div>
          <div
            style={{
              color: "#4b463f",
              fontSize: 32,
              lineHeight: 1.28,
            }}
          >
            {defaultDescription}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
