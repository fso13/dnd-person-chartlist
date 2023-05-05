import React, { useContext, useState } from "react";
import { LabelContext } from "../labelDataContext";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Classes } from "../const/ClassConst";
import {  Text,  View } from 'react-native'

const PersonClass = (props) => {

  const value = useContext(LabelContext);

  const [selectPersonClass, setSelectPersonClass] = useState("");
  const [klass, setKlass] = useState("");
  const [костьХитов, setКостьХитов] = useState("");
  const [начальныеХиты, setНачальныеХиты] = useState("");
  const [броня, setБроня] = useState("");
  const [оружие, setОружие] = useState("");
  const [инструменты, setИнструменты] = useState("");
  const [спасброски, setСпасброски] = useState("");
  const [навыки, setНавыки] = useState("");
  const [классЗащиты, setКлассЗащиты] = useState("");
  const btnDisbaled = klass !== "";


  const handleClick = (event) => {
    setKlass(event.target.innerHTML);
  };
  const updateText = (classItem) => {
    console.log(classItem);
    setSelectPersonClass(classItem)
    setКостьХитов(classItem.костьХитов)
    setНачальныеХиты(classItem.начальныеХиты)
    setКлассЗащиты(classItem.классЗащиты)
    setБроня(classItem.броня.join(', '))
    setОружие(classItem.оружие.join(', '))
    setИнструменты(classItem.инструменты.join(', '))
    setСпасброски(classItem.спасброски.join(', '))
    setНавыки(classItem.навыки.count + ' из списка: ' + classItem.навыки.items.join(', '))
  }
  return (
    <form>
      <h4> Выберите класс персонажа</h4>
      <div>
        {Classes.map((classItem) => (
          <Button onClick={(event) => { value.setSenderInfoValue("class", event); handleClick(event); updateText(classItem);}} style={{ margin: 25, backgroundColor: klass === classItem.title ? '#3f51b5' : 'white' }}>
            {classItem.title}
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
          <Text style={{textAlign: 'left'}}>
          Кость хитов: 1d{костьХитов}{'\n'}
          Начальные хиты: {начальныеХиты} + модификтор телосложения{'\n'}
          Класс защиты: {классЗащиты}{'\n'}

          Владение броней: {броня}{'\n'}
          Владение оружием: {оружие}{'\n'}
          Владение инструментами: {инструменты}{'\n'}
          Спасброски: {спасброски}{'\n'}
          Навыки: {навыки}
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
          onClick={() => {value.setPersonClassValue(selectPersonClass); value.nextPage()}}
          style={{ margin: 25 }}
        >
          Следующий шаг
        </Button>
      </ButtonGroup>
    </form>
  );
};
export default PersonClass;
