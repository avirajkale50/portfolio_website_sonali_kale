import React from 'react';

import { LiaOrcid } from "react-icons/lia";
import { SiGooglescholar } from "react-icons/si";
import { SiScopus } from "react-icons/si";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://orcid.org/0000-0002-5479-821X" target="_blank" rel="noopener noreferrer">
        <LiaOrcid />
      </a>
    </div>
    <div>
      <a href="https://www.scopus.com/authid/detail.uri?authorId=58245893400" target="_blank" rel="noopener noreferrer">
        <SiScopus />
      </a>
    </div>
    <div>
      <a href="https://scholar.google.com/citations?user=bVwjFygAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">
        <SiGooglescholar />
      </a>
    </div>
  </div>
);

export default SocialMedia;
