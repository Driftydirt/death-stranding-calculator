import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Road } from "./classes/road";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

type RoadCreatorProps = {
  road?: Road;
  toggleCreateRoad: () => void;
  setRoad: (road: Road) => void;
};
export default function RoadCreator({
  toggleCreateRoad,
  setRoad,
  road,
}: RoadCreatorProps) {
  const [totalCrystals, setTotalCrystals] = useState<number>();
  const [totalMetals, setTotalMetals] = useState<number>();
  const [totalCeramics, setTotalCeramics] = useState<number>();

  const [currentCrystals, setCurrentCrystals] = useState<number>();

  const [currentMetals, setCurrentMetals] = useState<number>();

  const [currentCeramics, setCurrentCeramics] = useState<number>();

  const [name, setName] = useState<string>();

  const createRoad = () => {
    const road: Road = new Road(
      totalCrystals ?? 0,
      currentCrystals ?? 0,
      totalCeramics ?? 0,
      currentCeramics ?? 0,
      totalMetals ?? 0,
      currentMetals ?? 0,
      name ?? ""
    );

    setRoad(road);

    toggleCreateRoad();
  };

  useEffect(() => {
    setTotalCrystals(road?.totalCrystals);
    setCurrentCrystals(road?.currentCrystals);
    setTotalMetals(road?.totalMetals);
    setCurrentMetals(road?.currentMetals);
    setTotalCeramics(road?.totalCeramics);
    setCurrentCeramics(road?.currentCeramics);
    setName(road?.name);
  }, [road]);

  return (
    <>
      <Row>
        <Col sm={3}>
          <InputGroup>
            <InputGroupText>Name</InputGroupText>
            <Form.Control
              type="text"
              placeholder={"Name"}
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Row>
          <Col sm={6}>
            <InputGroup>
              <InputGroupText>Current Crystals</InputGroupText>
              <Form.Control
                type="number"
                defaultValue={currentCrystals}
                onChange={(e) => setCurrentCrystals(Number(e.target.value))}
              />
              <InputGroupText>Total Crystals</InputGroupText>
              <Form.Control
                type="number"
                defaultValue={totalCrystals}
                onChange={(e) => setTotalCrystals(Number(e.target.value))}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <InputGroup>
              <InputGroupText>Current Ceramics</InputGroupText>
              <Form.Control
                type="number"
                defaultValue={currentCeramics}
                onChange={(e) => setCurrentCeramics(Number(e.target.value))}
              />
              <InputGroupText>Total Ceramics</InputGroupText>
              <Form.Control
                type="number"
                defaultValue={totalCeramics}
                onChange={(e) => setTotalCeramics(Number(e.target.value))}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <InputGroup>
              <InputGroupText>Current Metals</InputGroupText>
              <Form.Control
                type="number"
                defaultValue={currentMetals}
                onChange={(e) => setCurrentMetals(Number(e.target.value))}
              />
              <InputGroupText>Total Metals</InputGroupText>
              <Form.Control
                type="number"
                defaultValue={totalMetals}
                onChange={(e) => setTotalMetals(Number(e.target.value))}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Button type="submit" onClick={createRoad}>
              Finish Road
            </Button>
          </Col>
          <Col sm={3}>
            <Button type="submit" onClick={toggleCreateRoad}>
              Return
            </Button>
          </Col>
        </Row>
      </Row>
    </>
  );
}
