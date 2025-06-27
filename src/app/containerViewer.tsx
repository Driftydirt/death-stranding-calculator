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
import { Containers } from "./classes/interfaces";

type ContainerViewerProps = {
  metalContainers: Containers;
  ceramicContainers: Containers;
  crystals: number;
};
export default function ContainerViewer({
  metalContainers,
  ceramicContainers,
  crystals,
}: ContainerViewerProps) {
  return (
    <>
      <Row>
        <p>Metal Containers</p>
        <Col>
          <p>1000 Metals: {metalContainers.extraLarge3}</p>
        </Col>

        <Col>
          {" "}
          <p>800 Metals: {metalContainers.extraLarge2}</p>
        </Col>
        <Col>
          {" "}
          <p>600 Metals: {metalContainers.extraLarge1}</p>
        </Col>
        <Col>
          {" "}
          <p>400 Metals: {metalContainers.extraLarge}</p>
        </Col>
        <Col>
          {" "}
          <p>200 Metals: {metalContainers.large}</p>
        </Col>
        <Col>
          {" "}
          <p>100 Metals: {metalContainers.medium}</p>
        </Col>
        <Col>
          {" "}
          <p>50 Metals: {metalContainers.small}</p>
        </Col>
      </Row>
      <Row>
        <p>Ceramic Containers</p>
        <Col>
          <p>800 Ceramics: {ceramicContainers.extraLarge3}</p>
        </Col>

        <Col>
          {" "}
          <p>640 Ceramics: {ceramicContainers.extraLarge2}</p>
        </Col>
        <Col>
          {" "}
          <p>480 Ceramics: {ceramicContainers.extraLarge1}</p>
        </Col>
        <Col>
          {" "}
          <p>320 Ceramics: {ceramicContainers.extraLarge}</p>
        </Col>
        <Col>
          {" "}
          <p>160 Ceramics: {ceramicContainers.large}</p>
        </Col>
        <Col>
          {" "}
          <p>80 Ceramics: {ceramicContainers.medium}</p>
        </Col>
        <Col>
          {" "}
          <p>40 Ceramics: {ceramicContainers.small}</p>
        </Col>
      </Row>
      <Row>
        <p>Crystals: </p>
        <Col>
          <p>{crystals}</p>
        </Col>
      </Row>
    </>
  );
}
