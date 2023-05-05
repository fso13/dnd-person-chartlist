import React, { useState, useEffect, useContext } from "react";
import { LabelContext } from "../labelDataContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputAdornment from "@material-ui/core/InputAdornment";
import "../styles.css";
import { upper } from "../common/normalijation";

const PrintOnly = () => {
  const value = useContext(LabelContext);


  const ac = () => {
    switch (value.labelInfo.sender.class) {
      case "Варвар": return 10 + Number(value.labelInfo.mod.con) + Number(value.labelInfo.mod.dex);
      default: return 10 + Number(value.labelInfo.mod.dex);
    }
  }

  return (
    <>
      <div>

        <Grid container spacing={2}>

          <Grid item xs={4}>
            <Paper>Имя</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>Раса</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>Класс</Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper>{value.labelInfo.sender.name}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>{value.labelInfo.sender.race}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>{value.labelInfo.sender.class}</Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper>Броня</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>ХП</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>Скорость</Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper>{ac()}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>{value.personClass.начальныеХиты}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>{ac}</Paper>
          </Grid>

          <Grid item xs={2}>
            <Paper>Сила</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>Ловкость</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>Телосложение</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>Интелект</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>Мудрость</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>Харизма</Paper>
          </Grid>

          <Grid item xs={2}>
            <Paper>{Number(value.labelInfo.sender.str) + Number(value.labelInfo.mod.str)}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>{Number(value.labelInfo.sender.dex) + Number(value.labelInfo.mod.dex)}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>{Number(value.labelInfo.sender.con) + Number(value.labelInfo.mod.con)}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>{Number(value.labelInfo.sender.int) + Number(value.labelInfo.mod.int)}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>{Number(value.labelInfo.sender.wis) + Number(value.labelInfo.mod.wis)}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>{Number(value.labelInfo.sender.cha) + Number(value.labelInfo.mod.cha)}</Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper>Навыки</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>Атлетика</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>Ловкость рук</Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper>Заклинания</Paper>
          </Grid>
          {Array.from(value.spells.values()).map((i) => (

            i.map((ii) => (
              <Grid item xs={2}>
                <Paper>{ii}</Paper>
              </Grid>
            ))

          ))}


          <Grid item xs={12}>
            <Paper>Умения</Paper>
          </Grid>

          {Array.from(value.abylity.values()).map((i) => (
              <Grid item xs={2}>
                <Paper>{i}</Paper>
              </Grid>

          ))}


        </Grid>


        <ButtonGroup
          color="secondery"
          aria-label="text primary button group"
          style={{ marginTop: 15 }}
        >
          <Button onClick={() => value.prevPage()} style={{ margin: 25 }}>
            Go Back
          </Button>
          <Button onClick={() => window.print()} style={{ margin: 25 }}>
            Print Info
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};
export default PrintOnly;
