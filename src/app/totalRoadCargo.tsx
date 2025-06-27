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

type RoadViewer = {
  road: Road | undefined;
};
export default function RoadViewer({ road }: RoadViewer) {
  return road ? (
    <Col key={road.name} sm={{ span: 5, offset: 1 }} className="border">
      <Row>
        <Col>
          <p>{road.name}</p>
        </Col>
      </Row>
      <ListGroupItem>
        <Row>
          <Col>
            <p>Required Crystals:</p>
            <div>{road.requiredCrystals}</div>
          </Col>
          <Col>
            {" "}
            <p>Required Ceramics:</p>
            <div>{road.requiredCeramics}</div>
          </Col>
          <Col>
            <p>Required Metals:</p>
            <div>{road.requiredMetals}</div>
          </Col>
        </Row>
      </ListGroupItem>
    </Col>
  ) : (
    <></>
  );
}
