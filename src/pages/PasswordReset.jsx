import React from "react";

//Import CSS
import tw from "twin.macro";

//Import animation
import AnimationRevealPage from "helpers/AnimationRevealPage.jsx";

//Import Components & Images
import logo from "images/CoachAid.svg";
import { Container as ContainerBase } from "components/misc/Layouts";
import PasswordResetComponent from "components/authentication/PasswordResetComponent";

//CSS for components
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const Container = tw(ContainerBase)`min-h-screen bg-green-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-lg font-extrabold`;


export default ({
    logoLinkUrl = "/",
    headingText = "Reset your password",
}) => (
        <AnimationRevealPage>
            <Container>
                <Content>
                    <MainContainer>
                        <LogoLink href={logoLinkUrl}>
                            <LogoImage src={logo} />
                        </LogoLink>
                        <MainContent>
                            <Heading>{headingText}</Heading>
                            <PasswordResetComponent />
                        </MainContent>
                    </MainContainer>
                </Content>
            </Container>
        </AnimationRevealPage>
    );
