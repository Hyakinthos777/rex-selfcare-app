import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  const navItem = (to, label) => (
    <Link
      to={to}
      style={{
        flex: 1,
        textAlign: "center",
        color: pathname === to ? "#ff4d6d" : "#666",
        textDecoration: "none",
        fontSize: 12,
      }}
    >
      {label}
    </Link>
  );

  return (
    <div style={{ maxWidth: 420, margin: "auto", height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {children}
      </div>
      <div style={{ display: "flex", borderTop: "1px solid #eee", padding: 10 }}>
        {navItem("/", "Home")}
        {navItem("/check-in", "Check-In")}
        {navItem("/activities", "Activities")}
        {navItem("/chat", "Rex")}
        {navItem("/goals", "Goals")}
        {navItem("/progress", "Progress")}
      </div>
    </div>
  );
}
