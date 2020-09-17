import React, {useState, useEffect, useCallback} from "react";
import {StyleSheet, Text, View, TextInput} from "react-native";
import {connect, useDispatch, useSelector} from "react-redux";
import {addToReview, timesToDelete} from "../reducers/goods";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import StarRating from 'react-native-star-rating';


// css part
const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
  
  padding: 10px;
`;

const TopTextView= styled.View`
  flex:1;
  opacity:0.2
  justify-content:center;
  align-items:center;
  margin: 50px 0px;
`

// flex-direction:row;
const ReviewView = styled.View`
  border: 3px solid red;
  flex-direction: row;
  justify-content: space-around;
`;

const ReviewNameText = styled.TextInput`
  width: 100px;
  border: 2px solid yellow;
`;

const ReviewTitleText = styled.TextInput`
  width: 100px;
  border: 2px solid green;
`;



const ReviewContentTextInput = styled.TextInput`
  margin-bottom: 20px;
  flex: 1;
  border: 2px solid grey  
  height: 200px;
  border-radius:10px;
`;

const ReviewButton = styled.TouchableOpacity`
  flex:1;
  height: 50px;
  background-color:#535204;
  justify-content:center;
  align-items:center;
  border-radius:10px;  
`;

const ButtonText = styled.Text`
  color:white;
  font-size:30px;
  letter-spacing:10px;
`


// function part
const ReviewAdd = (props) => {
  // console.log('In ReviewAdd, props : ', props.route.params);
  const [userName, onChangeUserName] = useState("");
  const [title, onChangeTitle] = useState("");
  const [content, onChangeContent] = useState("");
  const [starCount, setStarCount] = useState('3')
  const dispatch = useDispatch();
  const id = props.route.params;
  // const review = useSelector((state) => state.goods?.review);
  var text = null;

  // console.log('In ReviewAdd, id : ', id);

  useEffect(() => {
    text = {
      // title: title,
      contents: content,
      goods_id:id.id,
      star : Number(starCount),
    };
    console.log('In ReviewAdd, text: ', text);
  }, [content,id.id,starCount]);


  const onPressReview = useCallback(() => {
    dispatch(addToReview(text));  //TODO : 1. text  or  2. (name, content)

    setTimeout(() => {
      props.navigation.goBack();
    },2000);
    dispatch(timesToDelete())
  }, [content]);  //TODO: content가 아니라 text여야 함

  const onStarRatingPress = useCallback((rating) => {
    setStarCount(rating);
  }, [starCount])

  return (
    <Container>

      <Header props={props}/>

      <Contents>

        <TopTextView>
          <Text>
            {
              `저희 제품을 구매해 주셔서 감사드립니다`
            }
          </Text>
          <Text>
            {
              `고객님의 소중한 후기가 저희에겐 큰 힘이 됩니다`
            }
          </Text>
        </TopTextView>

        <StarRating
          disabled={false}
          maxStars={5}
          rating={starCount}
          selectedStar={(rating) => onStarRatingPress(rating)}
        />

        <ReviewContentTextInput
          maxLength={200}
          multiline={true}
          placeholder={"내용을 입력해 주세요"}
          onChangeText={(text) => onChangeContent(text)}
          value={content}
        />

        <ReviewButton onPress={onPressReview}>
          <ButtonText>등록하기</ButtonText>
        </ReviewButton>

      </Contents>

      <Nav props={props}/>
    </Container>
  );
};

export default ReviewAdd;


