import React, { useContext, useState } from "react";
import { LabelContext } from "../labelDataContext";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Races } from "../const/RaceConst";
import {  Text,  View } from 'react-native'

const PersonRace = (props) => {

  const value = useContext(LabelContext);

  const [race, setRace] = useState("");
  const [description, setDescription] = useState("");
  const btnDisbaled = race != "";

  const handleClick = (event) => {
    setRace(event.target.innerHTML);
  };
  const updateText = (text) => {
    console.log(text);
    setDescription(text)
  }
  return (
    <form>
      <h4> Выберите расу персонажа</h4>
      <div>
        {Races.map((raceItem) => (
          <Button onClick={(event) => { value.setSenderInfoValue("race", event); handleClick(event); updateText(raceItem.description); value.setModRaceValue(raceItem)}} style={{ margin: 25, backgroundColor: race === raceItem.title ? '#3f51b5' : 'white' }}>
            {raceItem.title}
          </Button>
        ))}
      </div>
        <View style={{
        flexDirection: 'row',
        width: "100%",
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 20,
        paddingDown: 10,

        alignContent: 'center'
      }}>
          <Text style={{textAlign: 'justify'}}>
           {description}
          </Text>
        </View>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <Button onClick={() => value.prevPage()} style={{ margin: 25 }}>
          Предыдущий шаг
        </Button>
        <Button
          disabled={!btnDisbaled}
          onClick={() => value.nextPage()}
          style={{ margin: 25 }}
        >
          Следующий шаг
        </Button>
      </ButtonGroup>
    </form>
  );
};
export default PersonRace;
