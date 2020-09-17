import React, {useCallback, useState} from "react";
import {View, Text, TouchableOpacity, Button, Pressable} from "react-native";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {deleteToQuestion, deleteToReview, timesToDelete} from "../reducers/goods";
import ReviewEdit from "../pages/ReviewEdit";
// import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
// import {faStar} from "@fortawesome/free-solid-svg-icons";
import StarRating from "react-native-star-rating";

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  margin-top:10px;
  border-color : grey;
  border-bottom-width: 1.5px;
  border-style : solid;
  border-radius : 20px;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const ViewStyled = styled.View`
  flex: 1;
  margin: 20px 0px;
  padding: 10px;
  height: 150px;
  flex-direction:row;
`;

const ViewPaddingStyled = styled.View`
  padding-left : 10px;
  flex:1
`;

const TextStyled = styled.Text`
  flex: 1;
  font-size:20px;
`;
const TextContentsStyled = styled.Text`
  flex: 1;
  border:3px solid red
  
  font-size:20px;
`;

const ViewTextStyled = styled.View`
  flex:1;
`


const ButtonRowStyled = styled.View`
  flex-direction:row;
`;

const ButtonStyled = styled.TouchableOpacity`
  height : 40px;
  background-color: #62760c; 
  margin-bottom:10px;
  border-radius: 5px;
  justify-content:center;
  align-items:center;
  width: 50px;
  margin-right:10px;
`;

// padding-right : 20px;
// margin-right:20px;
const ViewImageStyled = styled.View`
 
`;

const ImageStyled = styled.Image`
  flex: 3;
  width:300px;
  height: 300px;
  resize-mode: contain;
  border-radius: 10px;
`;

const StarView = styled.View`
  flex-direction :row;
  
`;

const ButtonText = styled.Text`
  color:white;
`;

const StarRatingStyled = styled(StarRating)`
  flex:0.5
`;

//
const ReviewList = (props) => {
  // console.log("In ReviewList, props : ", props.list.star);
  const dispatch = useDispatch();
  const {username} = props.list;
  const {title} = props.list;
  const {contents} = props.list;
  const {review_img} = props.list;
  const {star} = props.list;
  // const starStr = String(star);
  const starStr = String('★').repeat(String(star));
  const {id} = props.list;

  const {prop} = props.prop;  // for Route

  const deleteReview = useCallback(() => {
    dispatch(timesToDelete());
    let data = {
      review_id: id
    };
    dispatch(deleteToReview(data));
  }, []);

  return (
    <Container>
      <Contents>
        <ViewStyled>

          <ViewPaddingStyled>

            <ViewTextStyled>
              <TextStyled>

                <StarView>
                  {/*<StarRatingStyled*/}
                  {/*  disabled={true}*/}
                  {/*  maxStars={5}*/}
                  {/*  rating={starStr}*/}
                  {/*/>*/}
                  <Text>{starStr}</Text>
                </StarView>

              </TextStyled>

              <TextStyled>
                {contents}
              </TextStyled>

              <TextStyled>
                {username}
              </TextStyled>
            </ViewTextStyled>

            <ButtonRowStyled>

              <ButtonStyled
                color={"#62760c"}
                onPress={() => {
                  prop.navigation.push("ReviewEdit", {id, title, contents, username});
                }}
              >
                <ButtonText>수정</ButtonText>
              </ButtonStyled>

              <ButtonStyled
                color={"#62760c"}
                onPress={deleteReview}
              >
                <ButtonText>삭제</ButtonText>
              </ButtonStyled>

            </ButtonRowStyled>

          </ViewPaddingStyled>

          <ViewImageStyled>
            <ImageStyled source={{uri: review_img}}/>
          </ViewImageStyled>

        </ViewStyled>
      </Contents>

    </Container>
  );
};

export default ReviewList;

