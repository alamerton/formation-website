"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center text-white">
        <p>
          © Formation Research {new Date().getFullYear()}. All rights reserved.
          <br />
          Formation Research is a not-for-profit company based in the UK
          (company number:{" "}
          <a href="https://find-and-update.company-information.service.gov.uk/company/16344389">
            16344389
          </a>
          ) with 501(c)(3) equivalency determination through NGO Source.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
