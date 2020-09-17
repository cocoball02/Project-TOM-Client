import React from 'react'
import AutoHeightImage from "react-native-auto-height-image";
import QnABoard from "./QnABoard";
import ReviewBoard from "./ReviewBoard";
import {Text} from "react-native";
import styled from "styled-components";

const DetailInfoOfBottom = styled.View`
  flex: 1;
  margin-top: 30px;
`;
const ViewDetailInfoOfBottom = styled.View`
flex:1;
  flex-direction:row;
  margin-bottom: 30px;
  height: 50px;
  justify-content: space-between;
  background-color : #cdb30c;
  justify-content:center;
  align-items:center;
  text-align:center;
`;
const ButtonDetailInfoOfBottom = styled.TouchableOpacity`
  flex:1
  justify-content:center;
  align-items:center;
  flex-direction:row;
`;
const TextInTouchableOpacityStyled = styled.Text`
  color:white;
  font-size:20px;
  flex:1;
  width:100%;
  height: 100%;
  text-align:center;
  letter-spacing:3px;
`;
const InfoDetailInfoOfBottom = styled.ScrollView`
  flex: 1;
`;

const GoodsInfoBottom = (props: { onPress: () => void, onPress1: () => void, onPress2: () => void, info: boolean, uri: { type: * } | string, userQnA: boolean, prop: any, review: boolean }) => {
  return (
    <DetailInfoOfBottom>
      <ViewDetailInfoOfBottom>
        <ButtonDetailInfoOfBottom
          color={"#535204"}
          onPress={props.onPress}
        >
          <TextInTouchableOpacityStyled>
            info
          </TextInTouchableOpacityStyled>
        </ButtonDetailInfoOfBottom>

        <ButtonDetailInfoOfBottom
          title={"userQnA"}
          flex={1}
          color={"#535204"}
          onPress={props.onPress1}
        >
          <TextInTouchableOpacityStyled>
            QnA
          </TextInTouchableOpacityStyled>
        </ButtonDetailInfoOfBottom>

        <ButtonDetailInfoOfBottom
          title={"review"}
          color={"#535204"}
          onPress={props.onPress2}
        >
          <TextInTouchableOpacityStyled>
            review
          </TextInTouchableOpacityStyled>
        </ButtonDetailInfoOfBottom>
      </ViewDetailInfoOfBottom>

      {props.info
        ?
        (
          <InfoDetailInfoOfBottom>

            <AutoHeightImage
              width={400}
              source={{uri: props.uri}}
            />
          </InfoDetailInfoOfBottom>
        )
        : props.userQnA
          ?
          (
            <QnABoard prop={props.prop}/>
          )
          : props.review
            ?
            (
              <ReviewBoard prop={props.prop}/>
            )
            :
            (
              <Text>empty part</Text>
            )}
    </DetailInfoOfBottom>
  );
}

export default GoodsInfoBottom
