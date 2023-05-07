import React, { useContext, useState } from "react";
import { LabelContext } from "../labelDataContext";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Races } from "../const/RaceConst";
import { Text, View } from 'react-native'
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const PersonRace = (props) => {

  const value = useContext(LabelContext);
  const [freepoint, setFreepoint] = useState([]);
  const [race, setRace] = useState("");
  const [description, setDescription] = useState("");
  const btnDisbaled = race != "";

  const setId = (event) => {
    if (freepoint.length == value.personRace.freePoint && event.target.checked) {
    } else {
      if (event.target.checked) {
        setFreepoint([...freepoint, event.target.value]);
        value.setModRaceValue2(event.target.id, value.labelInfo.mod[event.target.id]+1); 

      } else {
        setFreepoint(freepoint.filter(item => item !== event.target.value));
        value.setModRaceValue2(event.target.id, value.labelInfo.mod[event.target.id]-1); 
      }

      event.preventDefault();

    }

    console.log(value.labelInfo);
  };

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
          <Button onClick={(event) => { value.setSenderInfoValue("race", event); value.setPersonRaceValue(raceItem); handleClick(event); updateText(raceItem.description); value.setModRaceValue(raceItem) }} style={{ margin: 25, backgroundColor: race === raceItem.title ? '#3f51b5' : 'white' }}>
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
        <div style={{width: "250px"}} hidden={!value.personRace.freePoint}>
        <h4> Выберите {value.personRace.freePoint} характеристики</h4>

          <FormControlLabel 

            control={<Checkbox id="str"/>}
            label="Сила"
            value="Сила"
            checked={freepoint.includes("Сила")}
            onChange={setId}
          />
          <FormControlLabel  

            control={<Checkbox  id="dex"/>}
            label="Ловкость"
            value="Ловкость"
            checked={freepoint.includes("Ловкость")}
            onChange={setId}
          />
          <FormControlLabel  

            control={<Checkbox id="con" />}
            label="Телосложение"
            value="Телосложение"
            checked={freepoint.includes("Телосложение")}
            onChange={setId}
          />
          <FormControlLabel  

            control={<Checkbox id="int"/>}
            label="Интелект"
            value="Интелект"
            checked={freepoint.includes("Интелект")}
            onChange={setId}
          />
          <FormControlLabel  

            control={<Checkbox id="wis"/>}
            label="Мудрость"
            value="Мудрость"
            checked={freepoint.includes("Мудрость")}
            onChange={setId}
          />
        </div>

        <Text style={{ textAlign: 'justify', padding: 25 }}>
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
