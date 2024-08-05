import React from 'react';
import TocIcon from "@mui/icons-material/Toc";
import styled from 'styled-components';

const TocBtn = styled.button`
  margin-left: 5px ;
`

const TocButton = ({ handleClick }) => (
  <TocBtn onClick={handleClick}>
    <TocIcon />
  </TocBtn>
);

export default TocButton ;