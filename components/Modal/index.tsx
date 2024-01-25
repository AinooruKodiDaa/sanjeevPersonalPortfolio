import { useState } from "react";
import { StyledModal, StyledModalContent } from "./styled";

type Props = {
  open?: any;
  setOpen?: any;
};

export const Modal: React.FC<Props> = (props) => {
  const {} = props;

  const [open, setOpen] = useState(false);

  return (
    <StyledModal>
      <StyledModalContent>
        <span>&times;</span>
        <p>Some text in the Modal..</p>
      </StyledModalContent>
    </StyledModal>
  );
};
