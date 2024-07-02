import withExportImages from "next-export-optimize-images";

/** @type {import('next').NextConfig} */

const nextConfig = {};

if (process.env.NEXT_EXPORT === "true") {
  nextConfig.output = "export";
}

export default withExportImages(nextConfig);
