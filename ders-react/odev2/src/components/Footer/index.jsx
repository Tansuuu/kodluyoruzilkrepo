import React from "react";
import "../Contacts/styles.css";

function Footer() {
  return (
    <div className="info">
      <p>Click to edit a todo</p>
      <p>
        Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </div>
  );
}

export default Footer;
