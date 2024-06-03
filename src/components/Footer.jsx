import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-sm mb-2 text-center min-w-full">
      <p className="flex items-center justify-center gap-2">
        &copy; Abdulhamid{" "}
        <a target="_blank" href="https://github.com/Rawi2115">
          <FaGithub className="" />{" "}
        </a>{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/abdulhamid-haitham-3a4744246/"
        >
          <FaLinkedin />
        </a>
      </p>
    </footer>
  );
}
