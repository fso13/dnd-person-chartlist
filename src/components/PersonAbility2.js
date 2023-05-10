import React, { useContext, useState } from "react";
import { LabelContext } from "../labelDataContext";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from "@material-ui/core/Checkbox";

import { Text, View } from 'react-native'


const PersonAbility2 = (props) => {
  const [selectAbylityArray, setSelectAbylityArray] = React.useState([]);
  const value = useContext(LabelContext);
  const [selectAbylity, setSelectAbylity] = React.useState(new Map());
  const btnDisbaled = true;

  const [radioValue, setValue] = React.useState([]);

  const handleChange = (e) => {
    setValue({[e.target.name]:e.target.value});
  };

  console.log(value.personClass.умения);

  const setSelectAbylityValue = (key, event) => {

    if(selectAbylity.get(key) === undefined){
      selectAbylity.set(key, []);
    }
    if (event.target.checked) {
      selectAbylity.set(key, [...selectAbylity.get(key), event.target.value])
      setSelectAbylityArray([...selectAbylityArray, event.target.value]);
    
    } else {
      selectAbylity.set(key, selectAbylity.get(key).filter(item => item !== event.target.value))
      setSelectAbylityArray(selectAbylityArray.filter(item => item !== event.target.value));
    }
    
    value.setAbylityValue2(event, key);
    event.preventDefault();

  }

  return (
    <form style={{
      width: "100%",
      paddingTop: 20,
      paddingDown: 10,
      textAlign: 'left',
      alignContent: 'left'
    }}>
      <h4 style={{
        textAlign: 'center',
        alignContent: 'center'
      }}> Выберите классовые навыки персонажа</h4>
      <View
        style={{
          flexDirection: 'column',
          width: "100%",
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 20,
          paddingDown: 10,
          textAlign: 'left',
          alignContent: 'left'
        }}>
        {value.personClass.умения?.map((умение) => (
          <View style={{
            flexDirection: 'column',
            width: "100%",
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 50,
            textAlign: 'left',
            alignContent: 'left'
          }}>
            <Text style={{ textAlign: 'left', paddingRight: 50 }}>
              <b>{умение.name}</b>
              {'\n'}
              {умение.title}

            </Text>
            <View style={{
              flexDirection: 'column',
              height: "150px",
              paddingLeft: 100,
              paddingRight: 100,

              alignContent: 'center'
            }}>
              <FormGroup
                row
                value={умение.items?.map(({ name, title }) => { return name })}
                aria-label="weight"
                name="weight"
                className="form"
              >
                {умение.items?.map((i) =>

                  <Tooltip title={i.title}>
                    <FormControlLabel

                      control={<Checkbox />}
                      label={i.name}
                      value={i.name}
                      checked={selectAbylity.get(умение.name)!== undefined && selectAbylity.get(умение.name).includes(i.name)}
                      onChange={event => {

                        if (selectAbylity.get(умение.name)?.length > 0 && event.target.checked) {
                        } else {
                          if (event.target.checked) {
                            setSelectAbylityValue(умение.name, event);
                          } else {
                            setSelectAbylityValue(умение.name, event);
                          }
                    
                          event.preventDefault();
                    
                          //value.setAbylit2yValue(event)

                          console.log(selectAbylity.get(умение.name));
                          console.log(selectAbylity.get(умение.name).includes(i.name));

                          console.log(selectAbylity.get(умение.name)!== undefined && selectAbylity.get(умение.name).includes(i.name));
                        }
  
                      }}

                    />
                  </Tooltip>
                )}
              </FormGroup >
            </View>
          </View>
        ))}
      </View>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{
          marginTop: 15, textAlign: 'center',
          alignContent: 'center'
        }}
      >
        <Button onClick={() => value.prevPage()} style={{ margin: 25 }}>
          Предыдущий шаг
        </Button>
        <Button
          disabled={!btnDisbaled}
          onClick={() => value.nextPage()}
          style={{
            margin: 25, textAlign: 'center',
            alignContent: 'center'
          }}
        >
          Следующий шаг
        </Button>
      </ButtonGroup>
    </form>
  );
};
export default PersonAbility2;
