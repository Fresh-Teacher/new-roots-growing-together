# Repository import
- [x] Inspect and import application source without repository metadata or hosting configuration.
- [x] Install missing dependencies and transfer imported media to this project.
- [x] Run imported regression tests and check preview diagnostics: all 166 tests passed; preview build succeeds.
- [x] Verify library opening, navigation, search and document reading on desktop and phone: both PDF reading modes load without runtime errors or horizontal overflow.

# Menu density on phone screens
- [x] Tighten class-menu button spacing so more subjects, notes, papers and packages show at once.
- [x] Keep the Library heading and the back-to-library row pinned while the class list scrolls.

# Install prompt and app icons
- [x] Match the install prompt to the cookie notice and use the supplied image.
- [x] Replace browser and installed-app icons with optimized versions of the supplied image.
- [x] Verify the prompt on phone and desktop and run installation checks: 12 tests pass, images load, and installation controls work without runtime errors.

# Supplied logo as app icon
- [x] Derive favicon (16/32/48 .ico + 64 png), 192/512 any-purpose, 512 maskable and 180 apple-touch icons from the supplied e-Learning Platform logo, each padded so phone icon masks never clip the ring.
- [x] Point the manifest, its shortcuts, the page head and the browser icon file at the new artwork.
- [x] Verify every icon link and manifest entry resolves in the live page and run icon checks: 3 new tests pass, 169 total pass, build OK.

# Bookshelf size on the homepage
- [x] Enlarge the four class shelves so they use the room they were leaving empty, while all four still fit one screen without scrolling.
- [x] Keep the last book cover clear of the floating WhatsApp button on phones.
- [x] Verify shelf and cover sizes, bottom-edge fit and button clearance on phone and desktop: shelves 265px to 311px wide on a 360px phone, covers 56px to 65px, build OK, 169 tests pass.
