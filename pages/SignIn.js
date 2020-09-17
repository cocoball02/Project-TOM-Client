import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../reducers/login';
import {useForm, Controller} from 'react-hook-form';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

// const InputText = styled.TextInput`
//         height: 40,
// `

const InButton = styled.Button`
  background-color: black;
  margin-bottom: 300px;
`;

const ViewRowStyled = styled.View`
  flex-direction: row;
  text-align: center;
  margin: 23px 0px;
  justify-content: center;
  align-items: center;
`;

const SignIn = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector((state) => state.login?.error);

  const {register, handleSubmit, control, setValue, errors} = useForm({
    defaultValues: preloadValues,
  });

  const text = {
    email,
    password,
  };

  const preloadValues = {
    email: 'email',
    password: 'password',
  };

  const onPressSignin = useCallback(() => {
    dispatch(loginAction(text));

    props.navigation.navigate('Home');
  }, [email, password]);

  useEffect(() => {
    register(email);
    register(password);
  }, [register]);

  console.log(errors);
  return (
    <Container>
      <Header props={props} />
      <Contents>
        {/* <TouchableOpacity style = {{ margin: 100 }} onPress = {goToHome}>
         <Text>Log In</Text>
      </TouchableOpacity> */}
        <View>
          <Text>Login</Text>
          <Text style={styles.label}>Email</Text>
          <Controller
            name="email"
            control={control}
            render={(props) => (
              <TextInput
                {...props}
                style={styles.input}
                placeholder="Email"
                type="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                rules={register({required: true, pattern: /^\S+@\S+$/i})}
              />
            )}
          />
          {errors.email && <Text> 이메일을 입력하세요</Text>}
          <Text style={styles.label}>Password</Text>
          <Controller
            name="password"
            control={control}
            render={(props) => (
              <TextInput
                {...props}
                name="password"
                style={styles.input}
                placeholder="Password"
                type="password"
                value={password}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                rules={register({required: "don't try this at home"})}
              />
            )}
          />
          {errors.password && <Text> 비밀번호를 입력하세요</Text>}
          <View style={styles.button}>
            {error ? (
              <Button
                color="#464e46"
                onPress={() => alert('이메일이나 비밀번호가 올바르지 않습니다')}
                title="Log in"
                // disabled={!isLogin}
                // title={isLogin ? "Log in" : "Log out"}
              />
            ) : (
              <Button
                color="#464e46"
                onPress={handleSubmit(onPressSignin)}
                title="Log in"
                // disabled={!isLogin}
                // title={isLogin ? "Log in" : "Log out"}
              />
            )}
          </View>
          <ViewRowStyled>
            <InButton
              title="회원가입하기"
              color="#464e46"
              onPress={() => props.navigation.navigate('SignUp')}
            />
          </ViewRowStyled>
        </View>
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  label: {
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    backgroundColor: '#464e46',
    height: 40,
    borderRadius: 4,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
