import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Road } from "./classes/road";
import { Dispatch, JSX, SetStateAction, useState } from "react";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { RoadSequence } from "./classes/roadSequence";

type RoadSequenceCharacterProps = {
  toggleCreateRoadSequence: () => void;
  setRoadSequence: (roadSequence: RoadSequence) => JSX.Element | undefined;
};
export default function RoadSequenceCreator({
  toggleCreateRoadSequence,
  setRoadSequence,
}: RoadSequenceCharacterProps) {
  const [name, setName] = useState<string>();

  const createRoadSequence = () => {
    const roadSequence: RoadSequence = new RoadSequence([], name ?? "");

    setRoadSequence(roadSequence);

    toggleCreateRoadSequence();
  };

  return (
    <>
      <Col sm={{ span: 6 }} className="border">
        <Row style={{ paddingTop: 10 }}>
          <Col sm={6}>
            <InputGroup>
              <InputGroupText>Name</InputGroupText>
              <Form.Control
                type="text"
                placeholder={"Name"}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Col>

          <Col sm={6}>
            <Button type="submit" onClick={createRoadSequence}>
              Finish Road Sequence
            </Button>
          </Col>
        </Row>
      </Col>
    </>
  );
}
