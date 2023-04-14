import React, { useRef } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import { CardActionArea, colors } from "@mui/material";

type Props = {
  close: (e: any) => void;
  actionAreaCardProps: ActionAreaCardProps;
};

type ActionAreaCardProps = {
  title: string;
};

const Modal = ({ close, actionAreaCardProps }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      close(event);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModalWrapper>
      {actionAreaCardProps && (
        <ModalContent ref={modalRef}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <Text>ここにフォームを表示する</Text>
            </CardActionArea>
          </Card>
          <CloseButton onClick={close}>close</CloseButton>
        </ModalContent>
      )}
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
  padding: 16px;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  top: 0;
  right: 0;
  padding: 0.5rem;
  font-size: 16px;
  margin-left: 16px;
  position: absolute;
  color: #595959;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff;
`;

const Text = styled.p`
  font-size: 16px;
`;
