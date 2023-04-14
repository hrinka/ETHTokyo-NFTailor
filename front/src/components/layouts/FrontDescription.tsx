import React from "react";
import styled from "styled-components";

function FrontDescription() {
  return (
    <>
      <Title>nftailor</Title>
      <Text>nftailorは、独自のNFT発行サービスです。</Text>
      <Text>特性に応じたNFTを発行することができます。</Text>
    </>
  );
}

export default FrontDescription;

const Title = styled.h1`
  font-size: 40px;
`;

const Text = styled.p`
  font-size: 16px;
`;
