import createMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
        search: ""
      }
    ]
  }
};
const withMDX = createMDX({
  distDir: "build",
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
