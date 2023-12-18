import NavItem from "./NavItem";

const navItems = [
  {
    label: "Why Cypress?",
    path: "/",
    dataTest: "nav_why_cypress",
  },
  {
    label: "Overview",
    path: "/overview",
    dataTest: "nav_overview",
  },
  {
    label: "Fundamentals",
    path: "/fundamentals",
    dataTest: "nav_fundamentals",
  },
  {
    label: "Forms",
    path: "/forms",
    dataTest: "nav_forms",
  },
  {
    label: "Examples",
    path: "/examples",
    dataTest: "nav_examples",
  },
  {
    label: "Component",
    path: "/component",
    dataTest: "nav_Component",
  },
  {
    label: "Best Practices",
    path: "/best-practices",
    dataTest: "nav_best_practices",
  },
];

export default function NavBar() {
  return (
    <ul className="nav-bar">
      {navItems.map((item) => (
        <NavItem key={item.label} dataTest={item.dataTest} label={item.label} path={item.path} />
      ))}
    </ul>
  );
}
