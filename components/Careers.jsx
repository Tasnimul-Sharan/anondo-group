import React from "react";

export default function Careers() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Intro */}
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          At <strong>Redith Group</strong>, we believe people are the foundation
          of everything we build. We are always looking for passionate,
          innovative, and skilled individuals who want to create real impact.
          Whether you are an experienced professional or an ambitious learner,
          Redith offers an environment where your ideas matter and your growth
          is supported.
        </p>

        {/* Why Work With Us */}
        <h2 className="text-2xl font-bold mt-12">Why Work With Us</h2>
        <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
          <li>Collaborative, inclusive, and respectful work culture</li>
          <li>Continuous learning and professional development</li>
          <li>Career growth opportunities across multiple business units</li>
          <li>Exposure to real-world, impactful projects</li>
          <li>Supportive leadership and transparent communication</li>
          <li>Competitive compensation and performance-based benefits</li>
        </ul>

        {/* Our Work Culture */}
        <h2 className="text-2xl font-bold mt-12">Our Work Culture</h2>
        <p className="text-gray-700 mt-4 max-w-3xl leading-relaxed">
          We promote a culture of ownership, accountability, and innovation. Our
          teams are encouraged to take initiative, share ideas, and grow
          together. At Redith, learning never stops—and success is always a team
          effort.
        </p>

        {/* Who Should Apply */}
        <h2 className="text-2xl font-bold mt-12">Who Should Apply</h2>
        <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
          <li>Professionals eager to grow and take on new challenges</li>
          <li>Individuals who value teamwork and collaboration</li>
          <li>Problem-solvers with a proactive mindset</li>
          <li>People who want their work to create meaningful impact</li>
        </ul>

        {/* Open Positions */}
        <h2 className="text-2xl font-bold mt-12">Open Positions</h2>
        <p className="text-gray-700 mt-4 max-w-3xl">
          We regularly hire across technology, design, marketing, operations,
          and business development roles. If you don’t see a position that
          matches your profile, feel free to reach out—we’re always open to
          meeting talented people.
        </p>

        {/* Apply */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700">
            📩 Send your updated CV and portfolio (if applicable) to{" "}
            <a
              href="mailto:careers@redith.com"
              className="text-primary font-semibold underline"
            >
              careers@redith.com
            </a>
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            Please mention the position name in the email subject line.
          </p>
        </div>
      </section>
    </div>
  );
}
