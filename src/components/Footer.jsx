import React from "react";

function Footer() {
  const time = new Date();
  const date = time.getFullYear();
  return (
    <footer>
      <p>Copyright © {date}</p>
    </footer>
  );
}

export default Footer;
