# BodyAlignment Session Notes

## Session: 2026-05-16

### Built this session
- **Condition pills redesign** — all 8 conditions shown, labels now match conditions page exactly, clicking opens an inline modal (no navigation away). New component: `components/ConditionPills.tsx`
- **Contact form removed** from all practitioner profile pages
- **FAQ redesign — conditions page** — two-column layout, warm large heading, "Ask Janet directly" WhatsApp CTA, accordion uses + icon. Updated `FaqAccordion.tsx` + `app/conditions/page.tsx`
- **Practitioner FAQ section** — added to every active practitioner profile page above the map. Personalised questions/answers using practitioner name + location. "Ask [Name] directly" WhatsApp button. New component: `components/PractitionerFaq.tsx`
- **Interactive Leaflet map** — added to top of Practitioners page. CartoDB Voyager tiles (free, no API key). 40 practitioners pinned across SA. Sidebar list with photo + name + area. Click pin or name → popup with photo, WhatsApp button, View Profile link. Files: `components/PractitionerMap.tsx`, `components/PractitionerMapInner.tsx`, `data/practitionerCoords.ts`

### Current git state
- Branch: main
- All changes committed and pushed to `https://github.com/goldsphere-dev/test-site.git`

### Possible next tasks
- Review map on live test site — check pin positions and popup styling
- Add a "Near Me" geolocation button on the map (browser location API)
- Add the interactive map to the homepage as a teaser section
- Review/refine any practitioner pages — images, bios, details
- SEO: meta descriptions, sitemap, robots.txt
- Performance: image optimisation, lazy loading audit
