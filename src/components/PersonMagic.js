import React, { useContext, useState } from "react";
import { LabelContext } from "../labelDataContext";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Text, View } from 'react-native'
import Tooltip from '@material-ui/core/Tooltip';

const PersonMagic = (props) => {

  const value = useContext(LabelContext);
  var magicClass = value.personClass.magic;
  const [selectmagicClass, setSelectmagicClass] = React.useState([]);
  const btnDisbaled = value.spells!== undefined && Array.from(value.spells.values(), x => x.length).reduce((a, b) => a + b, 0) == magicClass.spells.map(({count})=> count).reduce((a, b) => a + b, 0);

  return (

    <form>

      {magicClass.spells.map((spellsItem) => (

        <><h4> Выберите {spellsItem.count}  {spellsItem.title} из списка</h4><View style={{
          flexDirection: 'row',
          width: "100%",
          height: "250px",
          paddingLeft: 100,
          paddingRight: 100,
          paddingTop: 20,
          paddingDown: 10,

          alignContent: 'center'
        }}>


          <FormGroup
            aria-label="weight"
            name="weight"
            value={spellsItem.items.map(({ name, text }) => { return name })}
            className="form"

          >
            {spellsItem.items.map((spellItem) => (

              <Tooltip title={spellItem.text}>
                <FormControlLabel

                  control={<Checkbox />}
                  label={spellItem.name}
                  value={spellItem.name}
                  checked={selectmagicClass.includes(spellItem.name)}
                  onChange={ event=> {
                    if (value.spells.get(spellsItem.title) !== undefined && value.spells.get(spellsItem.title).length == spellsItem.count && event.target.checked) {
                      console.log("незя");
                    } else {                      
                      value.setSpellsValue(event, spellsItem.title)
                      if (event.target.checked) {
                        setSelectmagicClass([...selectmagicClass, event.target.value]);
                      } else {
                        setSelectmagicClass(selectmagicClass.filter(item => item !== event.target.value));
                      }
                  
                      event.preventDefault();
                    }
                    
                  }} />
              </Tooltip>
            ))}

          </FormGroup>
        </View></>

      ))}


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
export default PersonMagic;
