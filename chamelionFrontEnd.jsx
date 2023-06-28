import React, { useState, useEffect } from "react";
import { httpGet, httpPatch } from "lib/http";

const Dropdown = ({ label, userId }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    httpGet(`users/${userId}`).then((user) => {
      setIsOpen(user[`dropdown_${label}`]);
    });
  }, [userId, label]);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="dropdown">
        <button
          type="button"
          className="dropdown-button"
          id="dropdownButton"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={onToggle}>
          {label}
        </button>

        <ul
          className={`dropdown-menu dropdown-section ${
            isOpen ? "dropdown-open" : ""
          }`}
          aria-labelledby="dropdownButton"
          role="menu">
          <li>Items</li>
          <DropdownItem href="/page1">Page 1</DropdownItem>
          <DropdownItem href="/page2">Page 2</DropdownItem>
          <DropdownItem href="/page3">Page 3</DropdownItem>
          <DropdownItem href="/page4">Page 4</DropdownItem>
        </ul>

        <ul
          className={`dropdown-menu dropdown-section ${
            isOpen ? "dropdown-open" : ""
          }`}>
          <li>More items</li>
          <DropdownItem href="/page5">Page 5</DropdownItem>
          <DropdownItem href="/page9">Page 9</DropdownItem>
        </ul>
      </div>
    </>
  );
};

const DropdownItem = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

export default Dropdown;
