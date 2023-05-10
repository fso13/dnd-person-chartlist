import React, { useContext, useState } from "react";
import { LabelContext } from "../labelDataContext";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Text, View } from 'react-native'

const Confirmation = (props) => {

  const value = useContext(LabelContext);
  const abylity = value.abylity;
  const abylity2 = value.personClass.умения.map((name)=> name);
  const abylity2_det = value.abylity2;

  const spells = value.spells;
  const btnDisbaled = true;
  const joinSpell = Array.from(spells.values()).map(e => e.join('\n')).join('\n')

  return (
    <form>
      <h4> Подтвердите выбранные навыки и заклинания</h4>

      <View style={{
        flexDirection: 'row',
        width: "100%",
        alignContent: 'center'
      }}>
        <View style={{
          flexDirection: 'column',
          width: "30%",
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
          width: "30%",
          paddingTop: 20,
          paddingDown: 10,

          alignContent: 'center'
        }}>
        <h5>Умения</h5>

          <Text style={{ textAlign: 'justify' }}>
            {value.personClass.умения.map((aa)=> aa.name + value.abylity2?.get(aa.name)?.map((a)=> " : " + a)).join('\n')}
          </Text>
        </View>

        <View style={{
          flexDirection: 'column',
          width: "30%",
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
