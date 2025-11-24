import React from "react";

export default function Reference() {
  return (
    <div className="page-wrap">
      <div className="card medium">
        <h2>Reference — A Short History of Calculators</h2>

        <article className="reference-article">
          <p>
            Human attempts to calculate go back thousands of years — counting
            tools like tally sticks and the abacus were among the first aids.
            The abacus, originating in ancient Mesopotamia and refined in China,
            allowed merchants and mathematicians to perform arithmetic far more
            efficiently than memory alone.
          </p>

          <p>
            Mechanical calculators began appearing in Europe in the 17th century.
            In 1642 Blaise Pascal built one of the first mechanical adding
            machines (the Pascaline). Gottfried Wilhelm Leibniz improved on the
            idea with a stepped-drum mechanism to perform multiplication.
          </p>

          <p>
            In the 19th and early 20th centuries, mechanical and electromechanical
            calculators evolved for accounting and science. The arrival of
            electronic calculators in the 1960s and pocket scientific calculators
            in the 1970s (companies like Hewlett-Packard and Texas Instruments)
            made powerful computation portable.
          </p>

          <p>
            Today, calculators are software and hardware hybrids — apps, websites,
            and physical devices — bringing complex algorithms and user-friendly
            interfaces together. The modern calculator traces a path from simple
            counting tools to the compact, programmable systems we rely on now.
          </p>

          <p className="ref-citation">
            Sources: Various historical overviews (encyclopedias and museum archives).
            For a deep dive see general resources on the history of computing and calculators.
          </p>
        </article>
      </div>
    </div>
  );
}
