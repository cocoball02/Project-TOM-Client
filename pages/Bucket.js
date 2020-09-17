import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import AsyncStorage from "@react-native-community/async-storage";
import shortid from "shortid";
import {useDispatch, useSelector} from "react-redux";
import {addToBucket, loadToBucket} from "../reducers/goods";
import BucketList from "../components/BucketList";

// css part
const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const BottomView = styled.View`
  height: 70px;
  padding:20px;
  flex-direction:row;
  justify-content:space-around;
  background-color:white;
`;

const BottomAggregate = styled.View`
  justify-content:center;
`;

const BottomAggregateText = styled.Text`
  margin-bottom:5px;
`;

const BottomPayment = styled.View`
  justify-content:center;
  align-items:center;
  border: 2px solid grey;
  border-radius:10px;
  flex:0.4
  height:100%
`

// function part
const Bucket = (props) => {
  console.log("In Bucket, props : ", props);
  // const dispatch = useDispatch();

  const bucket = useSelector(state => state.goods?.bucket)
  console.log("In Bucket, bucket : ", bucket);

  // console.log('in bucket, bucket in out of state', bucket) // 여기 bucket에 다 담긴다
  //
  // let b = bucket.map((el) => el.id);
  // console.log("b", b); //id 만 뽑은 배열
  //
  // let c = b.filter((el, index) => b.indexOf(el) === index);
  // console.log("c", c); // id 배열에서 중복제거한 값
  //
  // let f = c.map((el) => {
  //   let sum = 0;
  //   bucket.forEach((els) => {
  //     if (els.id === el) {
  //       sum += els.count;
  //       console.log("map", sum);
  //     }
  //   });
  //   return sum;
  // });
  // console.log("f", f); // id 별 총 count
  //
  // let objUnique = bucket.filter((el, index) => b.indexOf(el.id) === index);
  // console.log("objUnique", objUnique); // count가 계산 안 된 중복 제거 된 배열
  //
  // let r = []
  // objUnique.forEach((el, i) => {
  //   console.log('r in', i)
  //   f.forEach((els, j) => {
  //     if (i === j) {
  //       console.log('r in in ', i, '/', j)
  //       el.count = els;
  //       console.log('바로 위', el, '/', els);
  //       r.push(el);
  //     }
  //   });
  // });
  // console.log("r", r);

  // **************************************************************************    get


  return (

    <Container>
      <Header props={props}/>


      <Contents>
        {bucket && bucket.map((el) => {
          return <BucketList key={shortid.generate()} data={el} props={props}/>;
        })}
      </Contents>


      <BottomView>
        {/*<BottomAggregate>*/}
        {/*  <BottomAggregateText>합계 수량 : {quantity}</BottomAggregateText>*/}
        {/*  <Text>합계 금액 : {price.toLocaleString()}</Text>*/}
        {/*</BottomAggregate>*/}

        <BottomPayment>
          <TouchableOpacity onPress={() => {
            return props.navigation.push("Payment");
          }}>
            <Text>구매하기</Text>
          </TouchableOpacity>
        </BottomPayment>
      </BottomView>

      <Nav props={props}/>
    </Container>
  );
};

export default Bucket;



//===

// const data = props.route.params;
// const strId = String(shortid.generate());
// const [useParsedData, setUseParsedData] = useState("");
// const reduxData = useSelector((state) => state.goods?.bucket);   // asyncStorage get data -> reduxData
//
// var quantityBefore = null;
// // var priceBefore = null;
// var quantity = 0;
//
// var price = 0;


// useEffect(() => {
//
//   const getData = async () => {
//     try {
//       const jsonValue = await AsyncStorage.getItem(strId);
//
//       if (jsonValue != null) {
//         let parsedData = JSON.parse(jsonValue);
//         setUseParsedData(parsedData);
//       } else {
//         return null;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getData()
// }, []);
//
//
// if (typeof useParsedData === "object") {
//   reduxData.unshift(useParsedData);
//
//   let tempPriceM = [];
//   reduxData.forEach((el) => {
//     tempPriceM.push(el.count * el.goods_price);
//   });
//
//
//   quantityBefore = reduxData.reduce((a, c) => {
//     a.push(c.count);
//     return a;
//   }, []);
//
//   quantity = quantityBefore.reduce((a, c) => {
//     return a + c;
//   });
//
//   price = tempPriceM.reduce((a, c) => {
//     return a + c;
//   });
// }
//
// //   **********************************************************************   storing
// const storeData = async (value) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//
//     await AsyncStorage.setItem(strId, jsonValue);
//
//     let datas = AsyncStorage.getItem(strId);
//     if (datas !== null) {
//       console.log("In Bucket, storeData, datas : ", datas);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// storeData(data)
