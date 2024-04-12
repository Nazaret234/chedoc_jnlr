import { db } from "@/app/firebase";
import { ref, onValue } from "firebase/database";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  color: #3f51b5;
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 50px;
`;

const Data = styled.p`
  color: #3f51b5;
  font-size: 1.5em;
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export default function Node() {
  const [data, setData] = useState({
    t: 0,
    h: 0,
  });
  const dataRefTemp = ref(db, "temperatura");
  onValue(
    dataRefTemp,
    (snapshot) => {
      const te = snapshot.val();
      setTimeout(() => {
        setData({ ...data, t: te });
      }, 500);
    },
    (error) => {
      console.error("Error reading data: ", error);
    }
  );

  const dataRefHum = ref(db, "humedad");
  onValue(dataRefHum, (snapshot) => {
    const hu = snapshot.val();
    setTimeout(() => {
      setData({ ...data, h: hu });
    }, 500);
  });
  return (
    <Container>
      <Title>Temperatura Invernadero</Title>
      <Data>
        Temperatura: {data.t}°C
        <br />
        Humedad: {data.h}%
      </Data>
    </Container>
  );
}
