import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';
  const handleSignUp = (e) => {
    e.preventDefault();
    if (isInvalid) {
      return setError('There is an error with your Name or Email or Password!');
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            setSuccess('You have successfully signed up! <br> Please wait...');
            setTimeout(() => {
              history.push(ROUTES.BROWSE);
            }, 3000);
          });
      })
      .catch((error) => {
        setError(error.message);
        setPassword('');
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {success && <Form.Success>{success}</Form.Success>}
          {error && <Form.Error>{error}</Form.Error>}

          {!success && (
            <Form.Base onSubmit={handleSignUp}>
              <Form.Input
                placeholder="First name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

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
                Sign Up
              </Form.Submit>
            </Form.Base>
          )}

          {!success && (
            <>
              <Form.Text>
                Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
              </Form.Text>
              <Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. &nbsp;
                <Form.Link to="/">Learn more.</Form.Link>
              </Form.TextSmall>
            </>
          )}
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}
