export interface Screen {
  url: string;
  title: string;
}

export interface ProjectData {
  title: string;
  affiliation: string;
  description: string;
  projectId: string;
  screens: Screen[];
  link?: string;
}

const projectsData: ProjectData[] = [
  {
    title: "Place Finder AI",
    affiliation: "Personal Project",
    description: `🗺️ A place finder AI powered by Gemini and Foursquare. 
        Converts natural language into prompt, then returns a list of places 
        that matches the prompt.`,
    projectId: "place-finder",
    link: "https://place-finder-ui.vercel.app/",
    screens: [
      { url: "/place-finder/homepage.png", title: "Homepage" },
      // {
      //   url: "/place-finder/result-details-mobile.png",
      //   title: "Results Details Mobile View",
      // },
      // { url: "/place-finder/results-mobile.png", title: "Results Mobile View" },
      { url: "/place-finder/results.png", title: "Results" },
    ],
  },
  {
    title: "Document Management System",
    affiliation: "Bicol Regional Hospital and Medical Center",
    description: `📂 An internal information system I developed for BRHMC,
        designed to centralize documents and reports.
        Its main goal is to create a paperless workflow,
        reducing reliance on physical documents.`,
    projectId: "document-management",
    screens: [
      { url: "/qmis/faq.png", title: "FAQs" },
      // {
      //   url: "/qmis/file-manager-mobile.png",
      //   title: "File Manager Mobile View",
      // },
      { url: "/qmis/file-manager.png", title: "File Manager" },
      // { url: "/qmis/homepage-mobile.png", title: "Homepage Mobile View" },
      { url: "/qmis/homepage.png", title: "Homepage" },
      { url: "/qmis/login.png", title: "Login" },
      { url: "/qmis/permissions.png", title: "Roles and Permissions" },
      // { url: "/qmis/search-mobile.png", title: "File Search Mobile View" },
      { url: "/qmis/search.png", title: "File Search" },
      { url: "/qmis/view-doc.png", title: "Document Details" },
    ],
  },
  {
    title: "IP Address Registry",
    affiliation: "Bicol Regional Hospital and Medical Center",
    description: `📶 An internal application I developed for managing IP address 
        registrations and employee assignments, designed to support the hospital's network team.`,
    projectId: "ipar",
    screens: [
      { url: "/ipar/ip-add-range.png", title: "Add IP Address Range" },
      { url: "/ipar/ip-add-user.png", title: "Add User" },
      { url: "/ipar/ip-datatable.png", title: "Records Datatable" },
      { url: "/ipar/ip-edit-record.png", title: "Update Record" },
      { url: "/ipar/ip-login.png", title: "Login Page" },
      {
        url: "/ipar/ip-role-permissions.png",
        title: "Update Role Permissions",
      },
    ],
  },
  {
    title: "Inventory System",
    affiliation: "Bicol Regional Hospital and Medical Center",
    description: `🚚 An internal information system I developed for BRHMC to manage deliveries, 
        products, and inventory. It also generates key reports, including Inspection and Acceptance 
        Reports as well as Requisition and Issue Slips.`,
    projectId: "inventory-system",
    screens: [
      { url: "/msmis/iar-table.png", title: "Inspections List Table" },
      { url: "/msmis/po-items.png", title: "Purchase Order Items" },
      { url: "/msmis/ins-profile.png", title: "Inspection Page" },
      { url: "/msmis/dashboard.png", title: "Dashboard" },
      {
        url: "/msmis/ins-prof-delivery.png",
        title: "Inspection Delivery Details",
      },
      { url: "/msmis/prod.png", title: "Products List Table" },
      { url: "/msmis/req-prof.png", title: "Requisition Page" },
      { url: "/msmis/prod-profile.png", title: "Product Page" },
      { url: "/msmis/msm-act-log.png", title: "Activity Logs" },
      { url: "/msmis/msm-login.png", title: "Login Page" },
    ],
  },
];

export default projectsData;
