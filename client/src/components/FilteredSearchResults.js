import React, { useState, useEffect } from "react";
import { Card, Segment, Flag, Loader, Dimmer } from "semantic-ui-react";
import useStyling from "../hooks/useStyling";

function FilteredSearchResults(props) {
  const [eventHandler, eventHander2] = useStyling();
  const [country, setCountry] = useState([]);
  console.log("State/Country", typeof(props.country), props.country)
  //create async function to wait for datay to update state
  const filteredByCountry = async () => {
    const currentCountry = await props.players;
    return currentCountry;
  };
  //call async function
  filteredByCountry().then((res) => setCountry(res));

//   useEffect(() => {
    
//     console.log("UseEffect")

//     const filteredResults = props.players.filter((item) => {
//         console.log("Filter", item.name)
//       return item.country === props.country
//     });
//     console.log("filteredResults", filteredResults);
//   }, [props.coutry]);

const filteredResults = props.players.filter((item) => {
    // console.log(item.country === item.country)
    return item.country === props.country
})


// console.log("filteredResults", filteredResults)
// console.log("Props.Players", props.players)

return (
    <>
      <Card.Group itemsPerRow={6}>
        {filteredResults.map((player) => {
          return (
            <Card key={player.id} style={{ textAlign: "center" }}>
              <Card.Content>
                <Card.Header>{player.name}</Card.Header>
                <Card.Meta>{player.country}</Card.Meta>
              </Card.Content>
              <Segment
                className="wobble"
                onMouseEnter={eventHandler}
                onMouseLeave={eventHander2}
              >
                <Flag name={player.country.toLowerCase()} />
              </Segment>
            </Card>
          );
        })}
      </Card.Group>
    </>
  );
}

export default FilteredSearchResults;
