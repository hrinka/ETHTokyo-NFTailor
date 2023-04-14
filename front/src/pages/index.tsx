import React from "react";
import styled from "styled-components";
import FrontDescription from "../components/layouts/FrontDescription";
import CustomSelect from "../components/elements/CustomSelect";
import CustomButton from "@/components/elements/CustomButton";
import { useWallet } from "@/libs/wallet/useWallet";

export default function Home() {
  const { address, error, handleConnect, isMetaMaskConnected } = useWallet();

  return (
    <>
      <main>
        <Container>
          <FrontDescription />
          {address ? <p>アドレス: {address}</p> : null}
          {error ? <p>エラ-: {error}</p> : null}
          {isMetaMaskConnected ? (
            <SelectArea>
              <SubTitle>** 接続を確立しました **</SubTitle>
              <Text>発行したいNFTの種類を選択してください。</Text>
              <CustomSelect
                options={[
                  "選択してください",
                  "music NFT",
                  "art NFT",
                  "チケットNFT",
                  "商品券NFT",
                  "卒業証書NFT",
                ]}
              />
              <CustomButton title="NFT発行フォームを表示する" />
            </SelectArea>
          ) : (
            <Button onClick={handleConnect}>ウォレットに接続する</Button>
          )}
        </Container>
      </main>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  widht: 100%;
  padding: 16px;
`;

const SelectArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  widht: 100%;
  margin-top: 16px;
`;

const SubTitle = styled.h2`
  font-size: 30px;
  margin-top: 16px;
`;

const Text = styled.p`
  font-size: 16px;
  margin-top: 16px;
`;

const Button = styled.button`
  width: 500px;
  font-size: 1.5rem;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  margin-top: 16px;
`;
