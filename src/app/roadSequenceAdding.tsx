import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Road } from "./classes/road";
import { Dispatch, JSX, SetStateAction, useState } from "react";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { RoadSequence } from "./classes/roadSequence";
import RoadViewer from "./roadViewer";
import RoadSequenceCreator from "./roadSequenceCreator";
import RoadSequenceViewer from "./roadSequenceViewer";

type RoadSequenceAddingProps = {
  toggleAddingRoad: () => void;
  road: Road | undefined;
  roadSequences: RoadSequence[] | undefined;
  setRoadSequence: (roadSequence: RoadSequence) => JSX.Element | undefined;
  clearRoad: (road: Road) => void;
};
export default function RoadSequenceAdding({
  toggleAddingRoad,
  road,
  roadSequences,
  setRoadSequence,
  clearRoad,
}: RoadSequenceAddingProps) {
  const [createRoadSequence, setCreateRoadSequence] = useState<boolean>();

  const toggleCreateRoadSequence = () => {
    setCreateRoadSequence(!createRoadSequence);
  };

  const addToRoadSequence = (roadSequence: RoadSequence) => {
    road && roadSequence.addRoad(road);
    road && clearRoad(road);
    toggleAddingRoad();
  };
  return (
    <>
      {road ? (
        <>
          <RoadViewer road={road}></RoadViewer>
          <Col sm={{ span: 5, offset: 1 }}>
            {roadSequences ? (
              roadSequences.map((roadSequence) => (
                <div key={roadSequence.name} className="border">
                  <RoadSequenceViewer
                    roadSequence={roadSequence}
                  ></RoadSequenceViewer>
                  <Button onClick={() => addToRoadSequence(roadSequence)}>
                    Add To Road Sequence
                  </Button>
                </div>
              ))
            ) : (
              <></>
            )}
          </Col>
          <Col sm={{ offset: 1 }}>
            {" "}
            {createRoadSequence ? (
              <RoadSequenceCreator
                toggleCreateRoadSequence={toggleCreateRoadSequence}
                setRoadSequence={setRoadSequence}
              ></RoadSequenceCreator>
            ) : (
              <Button
                onClick={() => setCreateRoadSequence(!createRoadSequence)}
              >
                Create Road Sequence
              </Button>
            )}
          </Col>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
