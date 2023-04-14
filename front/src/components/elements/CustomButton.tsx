import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

type Props = {
  title: string;
};

const CustomButton = (props: Props) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const onClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container>
      <StyledButton onClick={onClick}>
        <CustomText>{props.title}</CustomText>
      </StyledButton>
      {isClicked && (
        <Modal
          close={onClick}
          actionAreaCardProps={
            {
              title: props.title,
            } as Props
          }
        />
      )}
    </Container>
  );
};

const Container = styled.div``;

const StyledButton = styled.button`
  background-color: #000000;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  transition: background-color 0.3s ease-in-out;
  width: 500px;
  margin-top: 16px;

  &:hover {
    background-color: #000;
    color: #ffffff;
  }
`;

const CustomText = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export default CustomButton;
