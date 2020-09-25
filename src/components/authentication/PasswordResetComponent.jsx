import React, { useState } from "react";

//Import authentication
import { auth } from "firebase.js";

//Import Css
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

//CSS for components
const Text = tw.p`mt-2 text-xs text-gray-600`
const Input = tw.input`w-full mb-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const FormContainer = tw.div`w-full flex-1 mt-2`;
const Form = tw.form`mx-auto max-w-xs`;
const Label = tw.label`text-sm text-gray-600`
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;


const PasswordReset = ({
    submitButtonText = "send me reset link",
    SubmitButtonIcon = LoginIcon,
    signInUrl = "/login",


}) => {
    const [email, setEmail] = useState("");
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;

        if (name === "userEmail") {
            setEmail(value);
        }
    };

    const sendResetEmail = event => {
        event.preventDefault();
        auth
            .sendPasswordResetEmail(email)
            .then(() => {
                setEmailHasBeenSent(true);
                setTimeout(() => { setEmailHasBeenSent(false) }, 3000);
            })
            .catch(() => {
                setError("Error resetting password");
            });
    };

    return (
        <FormContainer>
            <Form action="">
                {emailHasBeenSent && (
                    <div className="py-3 bg-green-400 w-full text-white text-center mb-3">
                        An email has been sent to you!
            </div>
                )}
                {error !== null && (
                    <div className="py-3 bg-red-600 w-full text-white text-center mb-3">
                        {error}
                    </div>
                )}
                <Label htmlFor="userEmail" className="w-full block">
                    Email:
          </Label>
                <Input
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    value={email}
                    placeholder="Input your email"
                    onChange={onChangeHandler}
                    className="mb-3 w-full px-1 py-2"
                />
                <SubmitButton
                    onClick={event => {
                        sendResetEmail(event);
                    }}>
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                </SubmitButton>
                <Text>
                    <a href={signInUrl} tw="border-b border-gray-500 border-dotted">
                        Back to sign in page
                </a>
                </Text>
            </Form>
        </FormContainer>
    );
};
export default PasswordReset;