import type { NextConfig } from "next";

// Validate required environment variables (skip in CI where they may be injected later)
if (!process.env.CI) {
  const requiredEnvVars = [
    'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
    'CLERK_SECRET_KEY',
    'NEXT_PUBLIC_ASSISTANT_BASE_URL',
  ];

  const missing = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missing.length > 0) {
    console.error('\nMissing required environment variables:\n');
    missing.forEach(varName => {
      console.error(`  - ${varName}`);
    });
    console.error('\nPlease add these to your .env.local file.');
    console.error('See .env.example for reference.\n');
    throw new Error('Missing required environment variables');
  }
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
