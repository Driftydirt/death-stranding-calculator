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

export default function Home() {
  const [road, setRoad] = useState<Road>();

  const [roadToAdd, setRoadToAdd] = useState<Road>();

  const [roads, setRoads] = useState<Road[]>();

  const [adding, setAdding] = useState<boolean>();

  const [roadSequences, setRoadSequences] = useState<RoadSequence[]>();

  const [createRoad, setCreateRoad] = useState<boolean>();

  const toggleCreateRoad = () => {
    setCreateRoad(!createRoad);
  };

  const toggleAddingRoad = () => {
    setAdding(!adding);
  };

  const saveRoadSequences = (roadSequence: RoadSequence) => {
    if (roadSequence !== undefined) {
      if (roadSequences !== undefined) {
        setRoadSequences(roadSequences.concat(roadSequence));
        setRoad(undefined);
        return undefined;
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
      {!adding ? (
        !createRoad ? (
          <div>
            <Button onClick={() => toggleCreateRoad()}>Create new road</Button>
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
                  </div>
                ))
              ) : (
                <></>
              )}
            </ListGroup>
          </div>
        ) : (
          <Container>
            <RoadCreator
              toggleCreateRoad={toggleCreateRoad}
              setRoad={setRoad}
            ></RoadCreator>
          </Container>
        )
      ) : (
        <RoadSequenceAdding
          road={roadToAdd}
          toggleAddingRoad={toggleAddingRoad}
          roadSequences={roadSequences}
          setRoadSequence={saveRoadSequences}
          clearRoad={clearRoad}
        ></RoadSequenceAdding>
      )}
    </>
  );
}
