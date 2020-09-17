import React, {useEffect} from "react";
import {Text, View} from "react-native";
import QnAList from "./QnAList";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_QUESTION_REQUEST, loadToQuestion, loadToReview} from "../reducers/goods";
import ReviewAdd from "../pages/ReviewAdd";
import ReviewList from "./ReviewList";
import shortId from 'shortid'

// review detail part
const ReviewDetailInfoOfBottom = styled.ScrollView`
  flex: 1;
  height: 100%;
`;

const ReviewButtonDetailInfoOfBottom = styled.Button`
  height: 50px;
`;

const ReviewHeader = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content:space-around;
  align-items:center;

`;

// function part
const ReviewBoard = (props) => {
  // console.log('In ReviewBoard, props : ', props);
  const id = props.prop?.route.params.id
  const dispatch = useDispatch();
  const review = useSelector((state) => state.goods?.review);
  const timesQ = useSelector((state) => state.goods?.times);
  // console.log('In ReviewBoard, id : ', id);
  // console.log('In ReviewBoard, timesR  1 : ', timesQ);


  useEffect(() => {
    dispatch(loadToReview(id))
  },[])

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadToReview(id))
    }, 1000)
  },[timesQ])

  return (
    <ReviewDetailInfoOfBottom>
      <ReviewHeader>
        <Text>고객님의 아름다운 리뷰를 기다립니다.</Text>
        <ReviewButtonDetailInfoOfBottom
          title={"글쓰기"}
          color={"#535204"}
          onPress={() => {
            props.prop.navigation.push("ReviewAdd", {id:id});
          }}
        />
      </ReviewHeader>
      { review && review.length === 0
        ? <Text>등록된 Review가 없습니다</Text>
        : (review[0].map(el => {
          return <ReviewList key={el.id} list={el} prop={props}/>;
        }))
      }
    </ReviewDetailInfoOfBottom>
  )
}

export default ReviewBoard;



















