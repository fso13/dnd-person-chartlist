import React, { useContext, useState } from "react";
import { LabelContext } from "../labelDataContext";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Text, View } from 'react-native'

const PersonAbility = (props) => {

  const value = useContext(LabelContext);
  const [selectAbylity, setSelectAbylity] = React.useState(0);
  const btnDisbaled = selectAbylity == value.personClass.навыки.count;
  const setId = (event) => {

    console.log("value.abylity:" + value.abylity);
    console.log("value.personClass.навыки.count:" + value.personClass.навыки.count);
    console.log("selectAbylity:" + selectAbylity);
    console.log("event.target.checked:" + event.target.checked);

    if (selectAbylity == value.personClass.навыки.count && event.target.checked) {
      console.log("незя");
    } else {
      if (event.target.checked) {
        setSelectAbylity(selectAbylity + 1);
      } else {
        setSelectAbylity(selectAbylity - 1);
      }
      if (selectAbylity < 0) {
        setSelectAbylity(0);
      }

      event.preventDefault();

      value.setAbylityValue(event)
    }

    
  };


  console.log(value.personClass);
  console.log(value.personClass.навыки.items);
  return (
    <form>
      <h4> Выберите {value.personClass.навыки.count} навыка из списка</h4>
      <View style={{
        flexDirection: 'row',
        width: "100%",
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 20,
        paddingDown: 10,

        alignContent: 'center'
      }}>

        <FormGroup
          aria-label="weight"
          name="weight"
          value={value.personClass.навыки.items}
          className="form"

        >
          {value.personClass.навыки.items.map((abylityItem) => (

            <FormControlLabel

              control={<Checkbox />}
              label={abylityItem}
              value={abylityItem}
              checked={value.abylity.includes(abylityItem)}
              onChange={setId}
            />
          ))}

        </FormGroup>
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
export default PersonAbility;
