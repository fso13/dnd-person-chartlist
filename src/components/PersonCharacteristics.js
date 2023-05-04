import React, { useContext, Component } from "react";
import { LabelContext } from "../labelDataContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "../styles.css";


const PersonCharacteristics = (props) => {
  const value = useContext(LabelContext);
  const sender = value.labelInfo.sender;
  const charRandom = value.labelInfo.charRandom;

  const btnDisbaled =
    sender.name.length > 0;
  return (
    <div>
    
   {/*  <form>
      <h4> Enter Sender Details</h4>
      <TextField draggabe="true"
        required
        style={{ width: "16%" }}
        label="Сила"
        type="number"
        value={charRandom.str}
      />
      <TextField
        required
        style={{ width: "16%" }}
        label="Ловкость"
        type="number"
        value={charRandom.dex}
      />
      <TextField
        required
        style={{ width: "16%" }}
        label="Телосложение"
        type="number"
        value={charRandom.con}
      />
      <TextField
        required
        style={{ width: "16%" }}
        label="Интелект"
        type="number"
        value={charRandom.int}
      />
      <TextField
        required
        style={{ width: "16%" }}
        label="Мудрость"
        type="number"
        value={charRandom.wis}
      />
      <TextField
        required
        style={{ width: "16%" }}
        label="Харизма"
        type="number"
        value={charRandom.cha}
      />
      <br></br>

      <Button name="random"
          onClick={() => value.setRandomInfoValue()}
          style={{ margin: 25 }}
        >
          Сгенерировать значения характеристик
        </Button>
    </form> */}
    
    
    <form>
      <TextField
        label="Имя персонажа"
        style={{ margin: 8, width: "33%" }}
        fullWidth
        margin="normal"
        required
        onChange={value.setSenderInfo("name")}
        value={sender.name}
      />
      <br></br>
      <h4>Введите значения, которые вы выбросили на кубиках</h4>

      <TextField
        required
        style={{ width: "16%" }}
        label="Сила"
        type="number"
        onChange={value.setSenderInfo("str")}
        value={sender.str}
      />
      <TextField
        required
        style={{ width: "16%" }}
        label="Ловкость"
        type="number"
        onChange={value.setSenderInfo("dex")}
        value={sender.dex}
      />
      <TextField
        required
        style={{ width: "16%" }}
        label="Телосложение"
        type="number"
        onChange={value.setSenderInfo("con")}
        value={sender.con}
      />
      <TextField
        required
        style={{ width: "16%" }}
        label="Интелект"
        type="number"
        onChange={value.setSenderInfo("int")}
        value={sender.int}
      />
      <TextField
        required
        style={{ width: "16%" }}
        label="Мудрость"
        type="number"
        onChange={value.setSenderInfo("wis")}
        value={sender.wis}
      />
      <TextField
        required
        style={{ width: "16%" }}
        label="Харизма"
        type="number"
        onChange={value.setSenderInfo("cha")}
        value={sender.cha}
      />
      <br></br>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <Button
          disabled={!btnDisbaled}
          onClick={() => value.nextPage()}
          style={{ margin: 25 }}
        >
          Следующий шаг
        </Button>
      </ButtonGroup>
    </form>
    </div>
  );
};
export default PersonCharacteristics;
