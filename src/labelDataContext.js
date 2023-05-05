import React, { useState, createContext } from "react";

export const LabelContext = createContext();

export const LabelProvider = (props) => {
  const [spells, setSpells] = useState(new Map());
  const [abylity, setAbylity] = useState([]);
  const [personClass, setPersonClass] = useState(
    {
      title: "",
      костьХитов: 0,
      начальныеХиты: 0,
      броня: [],
      оружие: [],
      инструменты: [],
      спасброски: [],
      навыки: {
        count: 0,
        items: [""],
      },
      классЗащиты: "10 + ловкость",
      magic: {}
    }
  );
  const [page, setPage] = useState(0);
  const [labelInfo, setlabelInfo] = useState({
    charRandom: {
      str: "",
      dex: "",
      con: "",
      int: "",
      wis: "",
      cha: ""
    },
    mod: {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
    },
    sender: {
      name: "",
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10,
      race: "",
      raceDetails: "",
      class: ""
    },

    weight: "",
    shippingOption: "1"
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };
  const handleChange = (prop) => (event) => {
    setlabelInfo({ ...labelInfo, [prop]: event.target.value });
  };

  const setAbylityValue = (event) => {
    if (event.target.checked) {
      setAbylity([...abylity, event.target.value]);
    } else {
      setAbylity(abylity.filter(item => item !== event.target.value));
    }
  };

  const setSpellsValue = (event, key) => {

    if(spells.get(key) === undefined){
      spells.set(key, []);
    }
    if (event.target.checked) {
      spells.set(key, [...spells.get(key), event.target.value])
    } else {
      spells.set(key, spells.get(key).filter(item => item !== event.target.value))
    }

    console.log(spells);
  };

  const setSenderInfoValue = (prop, event) => {

    setlabelInfo({
      ...labelInfo,
      sender: { ...labelInfo.sender, [prop]: event.target.innerHTML }
    });
  };

  const setSenderInfo = (prop) => (event) => {
    setlabelInfo({
      ...labelInfo,
      sender: { ...labelInfo.sender, [prop]: event.target.value }
    });
  };

  const setModRaceValue = (value) => {
    setlabelInfo({
      ...labelInfo,
      sender: { ...labelInfo.sender, "race": value.title },
      mod: {
        ...labelInfo.mod, "str": value.str,
        "dex": value.dex,
        "con": value.con,
        "wis": value.wis,
        "int": value.int,
        "cha": value.cha,
      }
    });
  };

  const setPersonClassValue = (value) => {
    setPersonClass(value);
  };

  const setRandomInfoValue = () => {
    setlabelInfo({
      ...labelInfo,
      charRandom: {
        ...labelInfo.charRandom, "str": Math.floor(Math.random() * (18 - 8 + 1)) + 8,
        "dex": Math.floor(Math.random() * (18 - 8 + 1)) + 8,
        "con": Math.floor(Math.random() * (18 - 8 + 1)) + 8,
        "wis": Math.floor(Math.random() * (18 - 8 + 1)) + 8,
        "int": Math.floor(Math.random() * (18 - 8 + 1)) + 8,
        "cha": Math.floor(Math.random() * (18 - 8 + 1)) + 8,
      }
    });
  };

  const setRecevierInfo = (prop) => (event) => {
    setlabelInfo({
      ...labelInfo,
      recevier: { ...labelInfo.recevier, [prop]: event.target.value }
    });
  };
  const steps = [
    { title: "Дефолтные характеристики" },
    { title: "Раса" },
    { title: "Класс" },
    { title: "Навыки" },
    { title: "Магия" },
    { title: "Финиш" }
  ];

  return (
    <LabelContext.Provider
      value={{
        page,
        steps,
        abylity,
        spells,
        personClass,
        nextPage,
        prevPage,
        labelInfo,
        handleChange,
        setSenderInfo,
        setSenderInfoValue,
        setRandomInfoValue,
        setRecevierInfo,
        setModRaceValue,
        setPersonClassValue,
        setAbylityValue,
        setSpellsValue
      }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};
