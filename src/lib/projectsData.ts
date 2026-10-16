export interface Screen {
  url: string;
  title: string;
}

export interface ProjectData {
  title: string;
  affiliation: string;
  summary: string;
  highlights: string[];
  stack: string[];
  projectId: string;
  thumbnail: string;
  screens: Screen[];
  link?: string;
  linkLabel?: string;
}

const projectsData: ProjectData[] = [
  {
    title: "Document Management System",
    affiliation: "Bicol Regional Hospital and Medical Center",
    summary:
      "A system I built from scratch to centralize the hospital's documents and reports and move teams toward a paperless workflow.",
    highlights: [
      "Centralized document access with version tracking, so staff always work from the latest copy",
      "Role-based permissions controlling who can view and manage each document",
      "File search and a built-in FAQ to help staff get started",
    ],
    stack: ["Laravel", "React", "MySQL"],
    projectId: "document-management",
    thumbnail: "/qmis/homepage.png",
    screens: [
      { url: "/qmis/homepage.png", title: "Homepage" },
      { url: "/qmis/file-manager.png", title: "File Manager" },
      { url: "/qmis/search.png", title: "File Search" },
      { url: "/qmis/view-doc.png", title: "Document Details" },
      { url: "/qmis/permissions.png", title: "Roles and Permissions" },
      { url: "/qmis/faq.png", title: "FAQs" },
      { url: "/qmis/login.png", title: "Login" },
    ],
    link: "https://brhmc.doh.gov.ph/brhmc-apps/",
    linkLabel: "View on BRHMC website",
  },
  {
    title: "Inventory System",
    affiliation: "Bicol Regional Hospital and Medical Center",
    summary:
      "The hospital's system for deliveries, products, and stock, which I maintained, administered, and continued developing.",
    highlights: [
      "Migrated hundreds of thousands of records across systems while preserving data integrity",
      "Improved report generation with user-customizable formatting and better-styled printed Inspection & Acceptance Reports and Requisition & Issue Slips",
      "Dashboard and activity logs for stock visibility and accountability",
    ],
    stack: ["Laravel", "React", "MySQL"],
    projectId: "inventory-system",
    thumbnail: "/msmis/dashboard.png",
    screens: [
      { url: "/msmis/dashboard.png", title: "Dashboard" },
      { url: "/msmis/iar-table.png", title: "Inspections List Table" },
      { url: "/msmis/ins-profile.png", title: "Inspection Page" },
      {
        url: "/msmis/ins-prof-delivery.png",
        title: "Inspection Delivery Details",
      },
      { url: "/msmis/po-items.png", title: "Purchase Order Items" },
      { url: "/msmis/prod.png", title: "Products List Table" },
      { url: "/msmis/prod-profile.png", title: "Product Page" },
      { url: "/msmis/req-prof.png", title: "Requisition Page" },
      { url: "/msmis/msm-act-log.png", title: "Activity Logs" },
      { url: "/msmis/msm-login.png", title: "Login Page" },
    ],
  },
  {
    title: "Chess Puzzle Breaks",
    affiliation: "Personal Project",
    summary:
      "A VS Code extension for solving Lichess puzzles without leaving your editor, published on the Visual Studio Marketplace.",
    highlights: [
      "Native webview board with click-or-drag moves and two-level hints",
      "Solve tracking and offline play once the puzzle database is cached on first launch",
    ],
    stack: ["TypeScript", "VS Code API"],
    projectId: "chess-puzzle-breaks",
    thumbnail: "/chess-puzzle-breaks/puzzle-board.png",
    link: "https://marketplace.visualstudio.com/items?itemName=HumphreyUno.chess-puzzle-breaks",
    linkLabel: "View on Marketplace",
    screens: [
      {
        url: "/chess-puzzle-breaks/puzzle-board.png",
        title: "Puzzle Board",
      },
      {
        url: "/chess-puzzle-breaks/marketplace-listing.png",
        title: "Marketplace Listing",
      },
    ],
  },
  {
    title: "IP Address Registry",
    affiliation: "Bicol Regional Hospital and Medical Center",
    summary:
      "An internal tool that helps the hospital's network team manage IP address ranges and assign them to employees.",
    highlights: [
      "IP range creation, per-employee assignment, and a searchable records table",
      "Configurable role permissions",
    ],
    stack: ["Laravel", "React", "MySQL"],
    projectId: "ipar",
    thumbnail: "/ipar/ip-datatable.png",
    screens: [
      { url: "/ipar/ip-datatable.png", title: "Records Datatable" },
      { url: "/ipar/ip-add-range.png", title: "Add IP Address Range" },
      { url: "/ipar/ip-add-user.png", title: "Add User" },
      { url: "/ipar/ip-edit-record.png", title: "Update Record" },
      {
        url: "/ipar/ip-role-permissions.png",
        title: "Update Role Permissions",
      },
      { url: "/ipar/ip-login.png", title: "Login Page" },
    ],
  },
  // Place Finder AI (Gemini + Foursquare) — screens in /public/place-finder
];

export default projectsData;
