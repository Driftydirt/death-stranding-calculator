"use client";
import "bootstrap/dist/css/bootstrap.css";

import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Road } from "./classes/road";
import { useEffect, useState } from "react";
import RoadCreator from "./roadCreator";
import { RoadSequence } from "./classes/roadSequence";
import RoadSequenceAdding from "./roadSequenceAdding";
import RoadViewer from "./roadViewer";
import RoadSequenceViewer from "./roadSequenceViewer";
import RoadSequenceEditor from "./roadSequenceEditor";

export default function Home() {
  const [road, setRoad] = useState<Road>();

  const [roadToAdd, setRoadToAdd] = useState<Road>();

  const [roads, setRoads] = useState<Road[]>();

  const [adding, setAdding] = useState<boolean>();

  const [roadSequences, setRoadSequences] = useState<RoadSequence[]>();

  const [createRoad, setCreateRoad] = useState<boolean>();

  const [editingRoadSequence, setEditingRoadSequence] = useState<boolean>();

  const [roadSequenceToEdit, setRoadSequenceToEdit] = useState<RoadSequence>();

  const toggleCreateRoad = () => {
    setCreateRoad(!createRoad);
  };

  const saveRoad = (road: Road) => {
    setRoad(road);
  };

  const toggleAddingRoad = () => {
    setAdding(!adding);
  };

  const toggleEditRoadSequence = () => {
    setEditingRoadSequence(!editingRoadSequence);
  };

  const saveRoadSequences = (roadSequence: RoadSequence) => {
    if (roadSequence !== undefined) {
      if (roadSequences !== undefined) {
        const index = roadSequences.findIndex(
          (rs) => rs.name === roadSequence.name
        );
        if (index === -1) {
          setRoadSequences(roadSequences.concat(roadSequence));
          setRoad(undefined);
          return undefined;
        } else {
          roadSequences[index] = roadSequence;
          setRoadSequences(roadSequences);
        }
      }
      setRoadSequences([roadSequence]);
      return undefined;
    }
  };

  const clearRoad = (currentRoad: Road) => {
    let currentRoads = roads;
    currentRoads = currentRoads?.filter(
      (road) => road.name != currentRoad.name
    );

    setRoads(currentRoads);
  };

  const addToRoadSequence = (road: Road) => {
    setRoadToAdd(road);
    setAdding(true);
  };

  const editRoadSequence = (roadSequence: RoadSequence) => {
    setRoadSequenceToEdit(roadSequence);
    setEditingRoadSequence(true);
  };

  useEffect(() => {
    if (road !== undefined) {
      if (roads !== undefined) {
        setRoads(roads.concat(road));
        setRoad(undefined);
        return;
      }
      setRoads([road]);
      setRoad(undefined);
    }
  }, [road]);
  return (
    <>
      {!editingRoadSequence ? (
        !adding ? (
          !createRoad ? (
            <div>
              <Button onClick={() => toggleCreateRoad()}>
                Create new road
              </Button>
              <ListGroup>
                {roads ? (
                  roads?.map((road) => (
                    <div key={road.name}>
                      <RoadViewer road={road}></RoadViewer>
                      <Row>
                        <Col sm={{ span: 5, offset: 1 }}>
                          <Button onClick={() => addToRoadSequence(road)}>
                            Add to route
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </ListGroup>
              <ListGroup>
                {roadSequences ? (
                  roadSequences?.map((roadSequence) => (
                    <div key={roadSequence.name}>
                      <RoadSequenceViewer
                        roadSequence={roadSequence}
                      ></RoadSequenceViewer>
                      <Col sm={{ offset: 1 }}>
                        <Button onClick={() => editRoadSequence(roadSequence)}>
                          Edit route
                        </Button>
                      </Col>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </ListGroup>
            </div>
          ) : (
            <RoadCreator
              toggleCreateRoad={toggleCreateRoad}
              setRoad={saveRoad}
            ></RoadCreator>
          )
        ) : (
          <RoadSequenceAdding
            road={roadToAdd}
            toggleAddingRoad={toggleAddingRoad}
            roadSequences={roadSequences}
            setRoadSequence={saveRoadSequences}
            clearRoad={clearRoad}
          ></RoadSequenceAdding>
        )
      ) : (
        <RoadSequenceEditor
          roadSequence={roadSequenceToEdit}
          toggleEditRoadSequence={toggleEditRoadSequence}
          setRoadSequence={saveRoadSequences}
        ></RoadSequenceEditor>
      )}
    </>
  );
}
