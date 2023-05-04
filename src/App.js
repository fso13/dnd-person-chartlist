import React, { useContext } from "react";
import "./styles.css";

import TextField from "@material-ui/core/TextField";
import Stepper from "react-stepper-horizontal";
import PersonCharacteristics from "./components/PersonCharacteristics";
import PersonRace from "./components/PersonRace";
import PersonClass from "./components/PersonClass";
import Confirmation from "./components/Confirmation";
import GetWeight from "./components/GetWeight";
import PersonAbility from "./components/PersonAbility";
import Printonly from "./components/PrintOnly";
import { LabelContext } from "./labelDataContext";

const App = (props) => {
  const value = useContext(LabelContext);
  const sender = value.labelInfo.sender;
  const mod = value.labelInfo.mod;
  var personClass;
  var personRace;


  return (
    <div className="App">
      <TextField
        label="Имя персонажа" disabled="true"
        style={{ margin: 8, width: "10%" }}
        fullWidth
        margin="normal"
        value={sender.name}
      />
      <TextField
        label="Раса" disabled="true"
        style={{ margin: 8, width: "10%" }}
        fullWidth
        margin="normal"
        value={sender.race}
      />
      <TextField
        label="Класс" disabled="true"
        style={{ margin: 8, width: "10%" }}
        fullWidth
        margin="normal"
        value={sender.class}
      />
      <TextField disabled="true"
        style={{ width: "10%" }}
        label="Сила"
        type="number"
        value={Number(sender.str) + Number(mod.str)}
      />
      <TextField disabled="true"
        style={{ width: "10%" }}
        label="Ловкость"
        type="number"
        value={Number(sender.dex) + Number(mod.dex)}
      />
      <TextField disabled="true"
        style={{ width: "10%" }}
        label="Телосложение"
        type="number"
        value={Number(sender.con) + Number(mod.con)}
      />
      <TextField disabled="true"
        style={{ width: "10%" }}
        label="Интелект"
        type="number"
        value={Number(sender.int) +Number( mod.int)}
      />
      <TextField disabled="true"
        style={{ width: "10%" }}
        label="Мудрость"
        type="number"
        value={Number(sender.wis) +Number( mod.wis)}
      />
      <TextField
        disabled="true"
        style={{ width: "10%" }}
        label="Харизма"
        type="number"
        value={Number(sender.cha) +Number( mod.cha)}
      />
      {value.page !== 5 && (
        <Stepper steps={value.steps} activeStep={value.page} />
      )}
      {value.page === 0 && <PersonCharacteristics />}
      {value.page === 1 && <PersonRace />}
      {value.page === 2 && <PersonClass />}
      {value.page === 3 && <PersonAbility />}
      {value.page === 4 && <Confirmation />}
      {value.page === 5 && <Printonly />}
    </div>
  );
};
export default App;
