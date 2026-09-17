import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Nauticode",
  description: "Nauticode terms of service and usage conditions.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 text-neutral-200">
      <h1 className="mb-8 text-3xl font-bold text-white">Terms of Service</h1>
      <p className="mb-4 text-sm text-neutral-400">
        Last updated: September 16, 2026
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing and using Nauticode, you agree to be bound by these
          Terms of Service. If you do not agree, please do not use the
          platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          2. Description of Service
        </h2>
        <p>
          Nauticode is a free, interactive learning platform designed to teach
          programming concepts for FIRST Robotics competitions. The platform
          provides lessons, quizzes, and progress tracking in Java, C++,
          Python, and general programming fundamentals.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          3. User Accounts
        </h2>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>
            You are responsible for maintaining the security of your account.
          </li>
          <li>
            You must provide accurate information when creating an account.
          </li>
          <li>
            You may not use the platform for any unlawful purpose.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          4. Intellectual Property
        </h2>
        <p>
          All content on Nauticode, including lessons, challenges, and design
          elements, is the property of the Nauticode team and is licensed
          under the MIT License where applicable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          5. Limitation of Liability
        </h2>
        <p>
          Nauticode is provided &quot;as is&quot; without warranty of any kind.
          We are not liable for any damages arising from the use of this
          platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          6. Changes to Terms
        </h2>
        <p>
          We reserve the right to modify these terms at any time. Continued
          use of the platform after changes constitutes acceptance of the new
          terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-white">
          7. Contact
        </h2>
        <p>
          For questions about these Terms, please contact us via our{" "}
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
