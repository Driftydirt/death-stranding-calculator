import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Road } from "./classes/road";
import { Dispatch, JSX, SetStateAction, useEffect, useState } from "react";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { RoadSequence } from "./classes/roadSequence";
import RoadViewer from "./roadViewer";
import ContainerViewer from "./containerViewer";
import { rootCertificates } from "tls";
import RoadCreator from "./roadCreator";

type RoadSequenceEditorProps = {
  roadSequence: RoadSequence | undefined;
  toggleEditRoadSequence: () => void;
  setRoadSequence: (roadSequence: RoadSequence) => JSX.Element | undefined;
};
export default function RoadSequenceEditor({
  roadSequence,
  toggleEditRoadSequence,
  setRoadSequence,
}: RoadSequenceEditorProps) {
  const [name, setName] = useState<string>();
  const [roads, setRoads] = useState<Road[]>();
  const [editingRoad, setEditingRoad] = useState<boolean>();
  const [roadToEdit, setRoadToEdit] = useState<Road>();
  const [roadToEditIndex, setRoadtoEditIndex] = useState<number>();

  const saveEditRoadSequence = () => {
    if (!roadSequence) return;
    if (name != undefined) roadSequence.name = name;
    if (roads != undefined) roadSequence.addRoadsRecalc(roads);

    setRoadSequence(roadSequence);
  };

  const toggleEditRoad = () => {
    setEditingRoad(!editingRoad);
  };

  const saveEditRoad = (road: Road) => {
    if (
      roads &&
      roadToEditIndex != undefined &&
      roadToEditIndex < roads.length
    ) {
      roads.splice(roadToEditIndex, 1, road);
    }
    setRoadToEdit(undefined);
    setRoadtoEditIndex(undefined);
    saveEditRoadSequence();
  };

  const editRoad = (road: Road, index: number) => {
    setRoadToEdit(road);
    setRoadtoEditIndex(index);
    setEditingRoad(true);
  };

  const deleteRoad = (index: number) => {
    const currentRoads = roads;
    if (index === -1 || index === undefined) return;
    setRoads(currentRoads && currentRoads.splice(index, 1));
  };

  useEffect(() => {
    if (roadSequence === undefined) return;
    setName(roadSequence.name);
    setRoads(roadSequence.roads);
  }, [roadSequence, roads]);

  return roadSequence ? (
    <>
      {" "}
      {!editingRoad ? (
        <Col sm={{ span: 10, offset: 1 }} className="border">
          <Row style={{ paddingTop: 10 }}>
            <Col sm={6}>
              <InputGroup>
                <InputGroupText>Name</InputGroupText>
                <Form.Control
                  type="text"
                  defaultValue={roadSequence.name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </Col>

            <Col sm={2}>
              <Button
                type="submit"
                onClick={() => {
                  saveEditRoadSequence();
                  toggleEditRoadSequence();
                }}
              >
                Finish Edit
              </Button>
            </Col>
            <Col sm={2}>
              <Button
                type="submit"
                onClick={() => {
                  toggleEditRoadSequence();
                }}
              >
                Leave without edit
              </Button>
            </Col>
          </Row>

          <Row>
            {roads &&
              roads.map((road, index) => (
                <Row key={index}>
                  <RoadViewer road={road}></RoadViewer>
                  <Col>
                    {" "}
                    <Button onClick={() => editRoad(road, index)}>
                      Edit Road
                    </Button>
                  </Col>
                  <Col>
                    {" "}
                    <Button onClick={() => deleteRoad(index)}>
                      Delete Road
                    </Button>
                  </Col>
                </Row>
              ))}
          </Row>
        </Col>
      ) : (
        <RoadCreator
          road={roadToEdit}
          toggleCreateRoad={toggleEditRoad}
          setRoad={saveEditRoad}
        ></RoadCreator>
      )}
    </>
  ) : (
    <></>
  );
}
