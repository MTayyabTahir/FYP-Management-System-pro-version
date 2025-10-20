import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar2";

const RulesAndSOP = () => {
  return (
    <div className="bg-gray-50 h-screen mt-20 text-gray-800">
      <Navbar />
      <header className="bg-green-700 text-white mt-10 py-8 text-center">
        <h1 className="text-3xl font-bold uppercase">
          PMAS Arid Agriculture University
        </h1>
        <p className="text-lg mt-2">Department of Computer Science</p>
        <p className="text-sm mt-1">
          Rules and SOPs for Final Year Projects (FYP)
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Supervision
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>
              A faculty member with the designation of Lecturer or above is
              eligible for supervision.
            </li>
            <li>
              A faculty member can supervise up to three FYP-I groups per
              semester.
            </li>
            <li>A faculty member can co-supervise one FYP-I per semester.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Students
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>
              Students are eligible for FYP-I registration after completing six
              semesters and all prerequisites.
            </li>
            <li>Each group can have a maximum of 3 members.</li>
            <li>
              All members must belong to the same degree program (e.g., BSCS or
              BSSE).
            </li>
            <li>
              Students from different batches can form a group only if they are
              enrolled in the same degree program.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Evaluation
          </h2>
          <p className="text-gray-700 mb-3 font-medium">FYP-I (2 Credits)</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>
              Proposal evaluation will be through a double-blind review process
              until approval.
            </li>
            <li>
              Final evaluation before semester end by Supervisor (50%) and
              Internal Evaluator (50%).
            </li>
            <li>Evaluation includes presentation, viva, and report.</li>
          </ul>

          <p className="text-gray-700 mt-6 mb-3 font-medium">
            FYP-II (4 Credits)
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>
              Pre-evaluation after midterm by Supervisor & Internal Evaluator to
              assess 70–80% completion.
            </li>
            <li>
              If unsatisfactory, a special committee re-evaluates after approval
              from FYP Convener.
            </li>
            <li>
              Final evaluation includes Supervisor (30%), Internal (30%), and
              External (40%) marks.
            </li>
            <li>
              Results remain undeclared (RL) until all deliverables (report,
              poster, code CD) are submitted.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Categories of FYP
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                1. General FYP
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Traditional model already in progress.</li>
                <li>Evaluation: Supervisor 30%, Internal 30%, External 40%.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                2. Continuing FYP
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Supervisor can divide project into modules; each module can
                  count as a separate FYP.
                </li>
                <li>
                  Each module must have enough objectives to defend as an
                  individual project.
                </li>
                <li>Evaluation: Supervisor 30%, Internal 30%, External 40%.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                3. Industrial FYP
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Students can select industry-based projects with proper MOU
                  approval.
                </li>
                <li>
                  MOU must be approved by the Industrial Liaison Committee.
                </li>
                <li>
                  Evaluation: Industrial 15%, Supervisor 15%, Internal 30%,
                  External 40%.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RulesAndSOP;
