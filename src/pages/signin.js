import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';
  const handleSignIn = (e) => {
    e.preventDefault();
    if (isInvalid) {
      return setError('There is an error with your Email or Password!');
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setError(error.message);
        setEmailAddress('');
        setPassword('');
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn}>
            <Form.Input
              placeholder="Email address"
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />

            <Form.Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="false"
            />

            <Form.Submit type="submit" disabled={isInvalid}>
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. &nbsp;
            <Form.Link to="/">Learn more.</Form.Link>
          </Form.TextSmall>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}
