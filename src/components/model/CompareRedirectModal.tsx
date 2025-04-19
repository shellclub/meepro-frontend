// components/CompareRedirectModal.tsx
import { Modal, Button } from "react-bootstrap";

interface CompareRedirectModalProps {
  show: boolean;
  handleClose: () => void;
  handleRedirect: () => void;
}

const CompareRedirectModal = ({
  show,
  handleClose,
  handleRedirect,
}: CompareRedirectModalProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Compare Items</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You have added two items to the compare list. Would you like to view the
        compare page?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleRedirect}>
          View Compare Page
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CompareRedirectModal;
