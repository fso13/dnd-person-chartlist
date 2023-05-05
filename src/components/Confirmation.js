import React, { useContext, useState } from "react";
import { LabelContext } from "../labelDataContext";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Races } from "../const/RaceConst";
import { Text, View } from 'react-native'

const Confirmation = (props) => {

  const value = useContext(LabelContext);
  const abylity = value.abylity;
  const spells = value.spells;
  const btnDisbaled = true;
  const joinSpell = Array.from(spells.values()).map(e => e.join('\n')).join('\n')

  return (
    <form>
      <h4> Подтвердите выбранные навыки и заклинания</h4>

      <View style={{
        flexDirection: 'row',
        width: "100%",
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 20,
        paddingDown: 10,

        alignContent: 'center'
      }}>
        <View style={{
          flexDirection: 'column',
          width: "40%",
          paddingLeft: 100,
          paddingRight: 100,
          paddingTop: 20,
          paddingDown: 10,

          alignContent: 'center'
        }}>
        <h5>Навыки</h5>

          <Text style={{ textAlign: 'justify' }}>
            {abylity.join('\n')}
          </Text>
        </View>

        <View style={{
          flexDirection: 'column',
          width: "40%",
          paddingLeft: 100,
          paddingRight: 100,
          paddingTop: 20,
          paddingDown: 10,

          alignContent: 'center'
        }}>
        <h5>Заклинания</h5>

          <Text style={{ textAlign: 'justify' }}>
            {joinSpell}
          </Text>
        </View>
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
          Подтвердить
        </Button>
      </ButtonGroup>
    </form>
  );
};
export default Confirmation;
