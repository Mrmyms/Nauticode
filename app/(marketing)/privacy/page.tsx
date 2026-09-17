import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Nauticode",
  description: "Nauticode privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 text-neutral-200">
      <h1 className="mb-8 text-3xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-4 text-sm text-neutral-400">
        Last updated: September 16, 2026
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          1. Information We Collect
        </h2>
        <p className="mb-2">
          When you create an account on Nauticode, we collect the following
          information:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Your name and email address (provided during sign-up).</li>
          <li>Profile picture (if you sign in with Google).</li>
          <li>
            Learning progress, scores, and activity within the platform.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          2. How We Use Your Information
        </h2>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>To provide and maintain your account.</li>
          <li>To track your learning progress and display leaderboards.</li>
          <li>To improve the platform and user experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          3. Data Sharing
        </h2>
        <p>
          We do not sell, trade, or share your personal information with third
          parties. We use trusted services (Clerk for authentication, Neon for
          database hosting) that process data on our behalf under strict
          privacy agreements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          4. Data Security
        </h2>
        <p>
          Your data is stored securely using encrypted connections (HTTPS/TLS).
          We follow industry-standard practices to protect your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          5. Your Rights
        </h2>
        <p>
          You may request to view, update, or delete your personal data at any
          time by contacting us. You can also delete your account directly
          from your profile settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          6. Contact
        </h2>
        <p>
          If you have any questions about this Privacy Policy, please reach out
          to us via our{" "}
          <a
            href="https://github.com/Mrmyms/nauticode/issues"
            target="_blank"
            rel="noreferrer noopener"
            className="text-green-400 underline hover:text-green-300"
          >
            GitHub repository
          </a>
          .
        </p>
      </section>
    </div>
  );
}
