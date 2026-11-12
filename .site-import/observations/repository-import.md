# Repository application import

Source: https://github.com/Fresh-Teacher/new-roots-workshop, main branch, imported as application code rather than a reproduction of GitHub's interface.

No deployed app URL is specified by the repository. Source control expectations were taken from the original application code and its 166 regression tests; independent source/preview visual comparison is unavailable. Existing captured-site artifacts describe an older upstream website and were not used to overwrite the repository's newer design.

## Preview observations

Each flow passed at desktop 1280 × 1800 and phone 390 × 844, on the public application at http://localhost:8080.

| Route | Trigger | Expected and observed result | Status |
| --- | --- | --- | --- |
| / | Essential only | Cookie notice closes and preference is remembered | Passed |
| / | Open library | Door opens and all four bookshelf rows appear | Passed |
| / | Primary Section; phone class-menu toggle first | Class navigation expands with Primary One through Primary Seven | Passed |
| /p5.html | Examinations | Seven subject links appear, preserving local paths | Passed |
| /PrimaryFiveMTCPastPapers.html | Search mathematics | Matching resource cards remain, with document links available | Passed |
| /PrimaryFiveMTCPastPapers.html | First matching document | Dedicated Math P.5 page opens, preserving browsing context | Passed |
| /doc/1ba3c100da6b045e-math-p-5 | Flipbook mode | Native PDF controls finish loading | Passed |
| /doc/1ba3c100da6b045e-math-p-5 | Vertical scroll mode | PDF canvas renders; wheel input reveals document facts and related content | Passed |

Temporary screenshot evidence: /tmp/browser/repository-import/{desktop,phone}-{shelves,menu,exams,search,document,flipbook-ready,document-scroll}.png. Browser reproduction script: /tmp/browser/repository-import/check_browsing.py. Both layouts reported no runtime errors or horizontal overflow.

Media source-to-destination mapping is retained in ../asset-mapping.json. Imported media uses destination-project asset storage. No media was replaced by generated artwork or static motion fallbacks.

Checks outside this import's verification: native operating-system PWA installation, every individual external document, and the source's existing unavailable legacy APK download. No live-source motion equivalence claim is made.