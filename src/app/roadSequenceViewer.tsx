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
import { Dispatch, SetStateAction, useState } from "react";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { RoadSequence } from "./classes/roadSequence";
import RoadViewer from "./roadViewer";
import ContainerViewer from "./containerViewer";

type RoadSequenceViewer = {
  roadSequence: RoadSequence | undefined;
};
export default function RoadSequenceViewer({
  roadSequence,
}: RoadSequenceViewer) {
  return roadSequence ? (
    <>
      <Col
        key={roadSequence.name}
        style={{ paddingTop: 10 }}
        className="border"
      >
        <Row>
          <Col>
            <p>{roadSequence.name}</p>
          </Col>
        </Row>
        <Row>
          {roadSequence.roads.map((road, index) => (
            <Row key={index}>
              <RoadViewer road={road}></RoadViewer>
              <Col sm={{ span: 6 }}>
                <ContainerViewer
                  metalContainers={
                    roadSequence.roadSequenceMetalContainers[index]
                  }
                  ceramicContainers={
                    roadSequence.roadSequenceCeramicContainers[index]
                  }
                  crystals={roadSequence.roadSequenceCrystals[index]}
                ></ContainerViewer>
              </Col>
            </Row>
          ))}
        </Row>
      </Col>
    </>
  ) : (
    <></>
  );
}
