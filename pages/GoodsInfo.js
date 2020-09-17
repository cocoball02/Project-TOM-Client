import React, {useRef, useState, useEffect, useCallback} from "react";
import {StyleSheet, TouchableOpacity, Text, View, Button} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
// import RecommendedFlower from "../components/RecommendedFlower";
import Payment from "./Payment";
import Bucket from "./Bucket";
import {useSelector, useDispatch} from "react-redux";
import {countDefault, countPlus, countMinus, loadGoodsInfo, addToBucket} from "../reducers/goods";
import GoodsInfoBottom from "../components/GoodsInfoBottom";
import GoodsInfoUpper from "../components/GoodsInfoUpper";

// css part
const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const ViewNavRowStyled = styled.View`
  width: 100%;
`;
const ButtonNavStyled = styled.Button`
  background-color:black;
`;

// function part
const GoodsInfo = (props) => {
  const [info, setInfo] = useState(true);
  const [userQnA, setQnA] = useState(false);
  const [review, setReview] = useState(false);
  const dispatch = useDispatch();
  const qna = useSelector((state) => state.goods?.qna);
  const id = props.route.params;
  const goodsInfo = useSelector((state) => state.goods?.goodsInfo);
  // console.log("In GOODS_DETAIL, goodsInfo : ", goodsInfo);
  const goods_name = goodsInfo?.goods_name;
  const goods_img = goodsInfo?.goods_img;
  const goods_price = goodsInfo?.goods_price;
  const info_img = goodsInfo?.info_img;
  const language = goodsInfo?.flower_language;
  const count = useSelector((state) => state.goods?.count);



  const data = {
    count: count,
    id: id.id,
    goods_name: goods_name,
    goods_img: goods_img,
    goods_price: goods_price,
  };


  useEffect(() => {
    // TODO: In here, qna states are re-rendering? Or, In render part, qna states are re-rendering? TEST!

    dispatch(countDefault());
    dispatch(loadGoodsInfo(id));
  }, []);

  const onPressPlus = useCallback(() => {
    dispatch(countPlus());
  }, []);

  const onPressMinus = useCallback(() => {
    dispatch(countMinus());
  }, []);

  return (
    <Container>
      <Header props={props}/>

      <Contents>

        <GoodsInfoUpper uri={goods_img} goodsName={goods_name} goodsPrice={goods_price} language={language}
                        onPress={onPressMinus} count={count} onPress1={onPressPlus} onPress2={() => {
          props.navigation.push("Bucket" ); dispatch(addToBucket(data))
        }}/>

        <GoodsInfoBottom onPress={() => {
          setQnA(false);
          setInfo(true);
          setReview(false);
        }} onPress1={() => {
          setQnA(true);
          setInfo(false);
          setReview(false);
        }} onPress2={() => {
          setQnA(false);
          setInfo(false);
          setReview(true);
        }} info={info} uri={info_img} userQnA={userQnA} prop={props} review={review}
        />

      </Contents>

      {
        !info || !userQnA || !review
          ?
          (
            <ViewNavRowStyled>
              <ButtonNavStyled
                title={"구매하기"}
                color="#464e46"
                onPress={() => {
                  return props.navigation.push("Payment");
                }}
              />
            </ViewNavRowStyled>
          )
          : (<Nav props={props}/>)
      }

    </Container>
  );
};

export default GoodsInfo;

//
const styles = StyleSheet.create({
  border: {
    borderStyle: "solid",
    margin: 10,
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  engine: {
    position: "absolute",
    right: 0,
  },
});

