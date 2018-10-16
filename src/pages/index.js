//core
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//front10 components
import "@front10/landing-page-book/dist/components/Hero/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Team/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Footer/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Social/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Image/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Header/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Container/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Section/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Video/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Column/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Row/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Code/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Features/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Copyright/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/GithubButton/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/BuiltWith/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Gif/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Backers/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Donation/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Link/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Navbar/style.legacy_browsers.css";
import "@front10/landing-page-book/dist/components/Button/style.legacy_browsers.css";
//theme for code
import "codemirror/theme/oceanic-next.css";
import "../app.css";

import React from "react";

import Hero from "@front10/landing-page-book/dist/components/Hero";
import Team from "@front10/landing-page-book/dist/components/Team";
import Footer from "@front10/landing-page-book/dist/components/Footer";
import Social from "@front10/landing-page-book/dist/components/Social";
import Image from "@front10/landing-page-book/dist/components/Image";
import Header from "@front10/landing-page-book/dist/components/Header";
import Container from "@front10/landing-page-book/dist/components/Container";
import Section from "@front10/landing-page-book/dist/components/Section";
import Video from "@front10/landing-page-book/dist/components/Video";
import Column from "@front10/landing-page-book/dist/components/Column";
import Row from "@front10/landing-page-book/dist/components/Row";
import Code from "@front10/landing-page-book/dist/components/Code";
import Features from "@front10/landing-page-book/dist/components/Features";
import Copyright from "@front10/landing-page-book/dist/components/Copyright";
import GithubButton from "@front10/landing-page-book/dist/components/GithubButton";
import BuiltWith from "@front10/landing-page-book/dist/components/BuiltWith";
import Gif from "@front10/landing-page-book/dist/components/Gif";
import Backers from "@front10/landing-page-book/dist/components/Backers";
import Donation from "@front10/landing-page-book/dist/components/Donation";
import Link from "@front10/landing-page-book/dist/components/Link";
import Analytics from "@front10/landing-page-book/dist/components/Analytics";

import Slider from "react-slick";
import Helmet from "react-helmet";

import AnimatedHero from "../hero.jsx";

import team from "../data/team.json";
import features from "../data/features.json";
import particles from "../data/particles.json";
import build from "../data/build.json";
import backers from "../data/backers.json";
import carousel from "../data/carousel.json";
import { navBarCode, importThemes } from "../data/code";

import logo from "../favicon.png";

export default () => (
  <div className="App">
    <Helmet defaultTitle={`Landing Page Book`}>
      <meta name="og:title" content="Landing Page Book" />
      <meta
        name="og:url"
        content="https://front10.com/get-landing-page-book/"
      />
      <meta name="description" content="React components to build!" />
      <meta
        name="og:description"
        content="https://front10.com/get-landing-page-book/"
      />
      <link rel="shortcut icon" href={logo} />
      <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,Symbol" />
    </Helmet>
    <Analytics idTracking="UA-44521541-9" />
    <Hero opacity={1} overlayColor="#212529" particlesParams={particles}>
      <Container>
        <Image
          src="images/logo/front10.png"
          rounded
          width="160"
          alt="Front10 logo"
          className="main-logo"
        />
        <Header className="main-header">Landing Page Book</Header>
        <Header className="main-subheader">React components to build!</Header>
        <div className="mt-5">
          <Link
            className="btn btn-primary btn-started"
            href="https://front10.com/landing-page-book"
            target="_blank"
          >
            Explore
          </Link>
          <GithubButton
            btnType="star"
            btnText="Stars"
            username="front10"
            repository="landing-page-book"
          />
        </div>
        <AnimatedHero />
      </Container>
    </Hero>
    <Section gray>
      <Container className="text-center">
        <Gif autoplay image="images/demo/code.gif" />
      </Container>
    </Section>
    <Section
      subTitle="Landing page book is a scalable choice for developers"
      title="FEATURES"
    >
      <Container>
        <Features
          features={features}
          imageCircle={false}
          showBorder={false}
          showSubtitle={true}
        />
      </Container>
      <Container className="text-center">
        <Link
          className="btn btn-primary btn-started"
          href="https://front10.com/landing-page-book"
          target="_blank"
        >
          Explore
        </Link>
      </Container>
    </Section>
    <Section title="AT A GLANCE" subTitle="Some of the components" gray>
      <Container className="text-center">
        <Slider {...carousel}>
          <div>
            <Link
              href="https://front10.com/landing-page-book/?knob-Brand%20name=&knob-Brand%20link=https%3A%2F%2Ffront10.com&knob-Brand%20logo=images%2Flogo%2Ffront10.png&knob-Expand=md&selectedKind=Components%2FNavbar&selectedStory=Default&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobss"
              target="_blank"
            >
              <Image
                src="images/components/navbar.png"
                alt="Navigation"
                width="50"
              />
              <Header className="mt-3 component-link" type="h6">
                Navbar
              </Header>
            </Link>
          </div>
          <div>
            <Link
              href="https://front10.com/landing-page-book/?knob-Sub%20header=React%20components%20to%20build%21&knob-Header=Landing%20Page%20Book&knob-Image=https%3A%2F%2Ffront10.com%2Fimg%2Fheader-bg.jpg&knob-Sub%20header%20position=bottom&knob-Parallax%20offset=0&knob-With%20particles=true&knob-Brand%20link=https%3A%2F%2Ffront10.com&knob-Centered=true&knob-Min%20height=100vh&knob-Expand=md&knob-Opacity=1&knob-Brand%20logo=images%2Flogo%2Ffront10.png&knob-Brand%20name=&knob-Overlay%20color=%23373D45&knob-Fixed=true&selectedKind=Components%2FHero&selectedStory=Children&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs"
              target="_blank"
            >
              <Image
                src="images/components/hero.png"
                alt="Superhero"
                width="50"
              />
              <Header className="mt-3 component-link" type="h6">
                Hero
              </Header>
            </Link>
          </div>
          <div>
            <Link
              href="https://front10.com/landing-page-book/?knob-Sub%20header=React%20components%20to%20build%21&knob-Header=Landing%20Page%20Book&knob-Image=https%3A%2F%2Ffront10.com%2Fimg%2Fheader-bg.jpg&knob-Sub%20header%20position=bottom&knob-Parallax%20offset=0&knob-Content%20align=center&knob-With%20particles=true&knob-Brand%20link=https%3A%2F%2Ffront10.com&knob-Centered=true&knob-Image%20circle=true&knob-Min%20height=100vh&knob-Show%20image=true&knob-Show%20job=true&knob-Expand=md&knob-Opacity=1&knob-Show%20name=true&knob-Show%20border=true&knob-Show%20summary=true&knob-Brand%20logo=images%2Flogo%2Ffront10.png&knob-Brand%20name=&knob-Overlay%20color=%23373D45&knob-Fixed=true&selectedKind=Components%2FTeam&selectedStory=Default&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs"
              target="_blank"
            >
              <Image src="images/components/team.png" alt="Team" width="50" />
              <Header className="mt-3 component-link" type="h6">
                Team
              </Header>
            </Link>
          </div>
          <div>
            <Link
              href="https://front10.com/landing-page-book/?knob-Sub%20header=React%20components%20to%20build%21&knob-Header=Landing%20Page%20Book&knob-Image=https%3A%2F%2Ffront10.com%2Fimg%2Fheader-bg.jpg&knob-Sub%20header%20position=bottom&knob-Parallax%20offset=0&knob-Content%20align=center&knob-With%20particles=true&knob-Brand%20link=https%3A%2F%2Ffront10.com&knob-Centered=true&knob-Image%20circle=true&knob-Min%20height=100vh&knob-Show%20image=true&knob-Image%20rounded=true&knob-Show%20job=true&knob-Expand=md&knob-Opacity=1&knob-Show%20name=true&knob-Show%20border=true&knob-Show%20summary=true&knob-Brand%20logo=images%2Flogo%2Ffront10.png&knob-Brand%20name=&knob-Overlay%20color=%23373D45&knob-Fixed=true&selectedKind=Components%2FBackers&selectedStory=Default&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs"
              target="_blank"
            >
              <Image
                src="images/components/backers.png"
                alt="Backers"
                width="50"
              />
              <Header className="mt-3 component-link" type="h6">
                Backers
              </Header>
            </Link>
          </div>
          <div>
            <Link
              href="https://front10.com/landing-page-book/?knob-Sub%20header=React%20components%20to%20build%21&knob-Header=Landing%20Page%20Book&knob-Image=https%3A%2F%2Ffront10.com%2Fimg%2Fheader-bg.jpg&knob-Sub%20header%20position=bottom&knob-Parallax%20offset=0&knob-Content%20align=center&knob-With%20particles=true&knob-Brand%20link=https%3A%2F%2Ffront10.com&knob-Centered=true&knob-Image%20circle=true&knob-Min%20height=100vh&knob-Show%20image=true&knob-Image%20rounded=true&knob-Show%20job=true&knob-Expand=md&knob-Button%20type=facebook&knob-Opacity=1&knob-Rounded=true&knob-Show%20name=true&knob-Url=https%3A%2F%2Ffront10.com&knob-Show%20border=true&knob-Show%20summary=true&knob-Brand%20logo=images%2Flogo%2Ffront10.png&knob-Brand%20name=&knob-Overlay%20color=%23373D45&knob-Fixed=true&selectedKind=Components%2FSocial&selectedStory=All&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs"
              target="_blank"
            >
              <Image
                src="images/components/socials.png"
                alt="Socials"
                width="50"
              />
              <Header className="mt-3 component-link" type="h6">
                Socials
              </Header>
            </Link>
          </div>
          <div>
            <Link
              href="https://front10.com/landing-page-book/?knob-Sub%20header=React%20components%20to%20build%21&knob-Header=Landing%20Page%20Book&knob-Image=https%3A%2F%2Ffront10.com%2Fimg%2Fheader-bg.jpg&knob-Sub%20header%20position=bottom&knob-Parallax%20offset=0&knob-Content%20align=center&knob-With%20particles=true&knob-Brand%20link=https%3A%2F%2Ffront10.com&knob-Centered=true&knob-Image%20circle=true&knob-Min%20height=100vh&knob-Show%20image=true&knob-Image%20rounded=true&knob-Show%20job=true&knob-Expand=md&knob-Button%20type=facebook&knob-Opacity=1&knob-Rounded=true&knob-Show%20name=true&knob-Url=https%3A%2F%2Ffront10.com&knob-Show%20border=true&knob-Show%20text=true&knob-Show%20summary=true&knob-Brand%20logo=images%2Flogo%2Ffront10.png&knob-Brand%20name=&knob-Overlay%20color=%23373D45&knob-Fixed=true&selectedKind=Components%2FBrowsersSupport&selectedStory=Default&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs"
              target="_blank"
            >
              <Image
                src="images/components/browsers.png"
                alt="Browsers"
                width="50"
              />
              <Header className="mt-3 component-link" type="h6">
                Browser support
              </Header>
            </Link>
          </div>
          <div>
            <Link
              href="https://front10.com/landing-page-book/?knob-Sub%20header=React%20components%20to%20build%21&knob-Header=Landing%20Page%20Book&knob-Image=https%3A%2F%2Ffront10.com%2Fimg%2Fheader-bg.jpg&knob-Sub%20header%20position=bottom&knob-Parallax%20offset=0&knob-Content%20align=center&knob-With%20particles=true&knob-Brand%20link=https%3A%2F%2Ffront10.com&knob-Centered=true&knob-Image%20circle=true&knob-Min%20height=100vh&knob-Show%20image=true&knob-Width=100&knob-Image%20rounded=true&knob-Show%20job=true&knob-Expand=md&knob-Button%20type=facebook&knob-Alt=This%20is%20an%20image%20example&knob-Source=https%3A%2F%2Fsbforge.org%2Fimages%2Ficons%2Fprofilepics%2Fdefault.png&knob-Use%20gray=true&knob-Opacity=1&knob-Show%20name=true&knob-Url=https%3A%2F%2Ffront10.com&knob-Show%20border=true&knob-Show%20text=true&knob-Show%20summary=true&knob-Brand%20logo=images%2Flogo%2Ffront10.png&knob-Brand%20name=&knob-Overlay%20color=%23373D45&knob-Fixed=true&knob-Height=100&selectedKind=Elements&selectedStory=Image&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs"
              target="_blank"
            >
              <Image
                src="images/components/image.png"
                alt="Images"
                width="50"
              />
              <Header className="mt-3 component-link" type="h6">
                Images
              </Header>
            </Link>
          </div>
          <div>
            <Link
              href="https://front10.com/landing-page-book/?knob-Sub%20header=React%20components%20to%20build%21&knob-Header=Landing%20Page%20Book&knob-Image=https%3A%2F%2Ffront10.com%2Fimg%2Fheader-bg.jpg&knob-Sub%20header%20position=bottom&knob-Parallax%20offset=0&knob-Content%20align=center&knob-With%20particles=true&knob-Brand%20link=https%3A%2F%2Ffront10.com&knob-Centered=true&knob-Image%20circle=true&knob-Min%20height=100vh&knob-Show%20image=true&knob-Width=640px&knob-Image%20rounded=true&knob-Show%20job=true&knob-Expand=md&knob-Button%20type=facebook&knob-Volume=1&knob-Alt=This%20is%20an%20image%20example&knob-Source=https%3A%2F%2Fyoutu.be%2FdCrLwWdju68&knob-Use%20gray=true&knob-Opacity=1&knob-Show%20name=true&knob-Url=https%3A%2F%2Ffront10.com&knob-Show%20border=true&knob-Show%20text=true&knob-Show%20summary=true&knob-Brand%20logo=images%2Flogo%2Ffront10.png&knob-Brand%20name=&knob-Overlay%20color=%23373D45&knob-Fixed=true&knob-Height=360px&selectedKind=Components%2FVideo&selectedStory=Default&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs"
              target="_blank"
            >
              <Image src="images/components/video.png" alt="Video" width="50" />
              <Header className="mt-3 component-link" type="h6">
                Video
              </Header>
            </Link>
          </div>
          <div>
            <Link
              href="https://front10.com/landing-page-book/?knob-Sub%20header=React%20components%20to%20build%21&knob-Header=Landing%20Page%20Book&knob-Code=var%20component%20%3D%20%7B%0A%09name%3A%20%22react-code%22%2C%0A%09author%3A%20%22front10-devs%22%2C%0A%09repo%3A%20%22https%3A%2F%2Fgitlab.com%2Ffront10-devs%2Flanding-page-book%22%0A%7D%3B&knob-Image=https%3A%2F%2Ffront10.com%2Fimg%2Fheader-bg.jpg&knob-Sub%20header%20position=bottom&knob-Parallax%20offset=0&knob-Content%20align=center&knob-Show%20footer=true&knob-With%20particles=true&knob-Brand%20link=https%3A%2F%2Ffront10.com&knob-Show%20line%20numbers=true&knob-Centered=true&knob-Image%20circle=true&knob-Min%20height=100vh&knob-Language=javascript&knob-Show%20image=true&knob-Width=640px&knob-Image%20rounded=true&knob-Show%20job=true&knob-Expand=md&knob-Button%20type=facebook&knob-Volume=1&knob-Alt=This%20is%20an%20image%20example&knob-Source=https%3A%2F%2Fyoutu.be%2FdCrLwWdju68&knob-Use%20gray=true&knob-Opacity=1&knob-Code%20link=https%3A%2F%2Fcodesandbox.io%2Fs%2Fpmjvk5wl27&knob-Show%20name=true&knob-Url=https%3A%2F%2Ffront10.com&knob-Show%20border=true&knob-Show%20header=true&knob-Show%20text=true&knob-Show%20summary=true&knob-Brand%20logo=images%2Flogo%2Ffront10.png&knob-Brand%20name=&knob-Overlay%20color=%23373D45&knob-Fixed=true&knob-Height=360px&selectedKind=Components%2FCode&selectedStory=Default&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs"
              target="_blank"
            >
              <Image src="images/components/code.png" alt="Code" width="50" />
              <Header className="mt-3 component-link" type="h6">
                Code
              </Header>
            </Link>
          </div>
          <div>
            <Link
              href="https://front10.com/landing-page-book/?knob-Sub%20header=React%20components%20to%20build%21&knob-Header=Landing%20Page%20Book&knob-Code=var%20component%20%3D%20%7B%0A%09name%3A%20%22react-code%22%2C%0A%09author%3A%20%22front10-devs%22%2C%0A%09repo%3A%20%22https%3A%2F%2Fgitlab.com%2Ffront10-devs%2Flanding-page-book%22%0A%7D%3B&knob-Image=images%2Fgif%2Fwrite.gif&knob-Sub%20header%20position=bottom&knob-Parallax%20offset=0&knob-Content%20align=center&knob-Show%20footer=true&knob-With%20particles=true&knob-Brand%20link=https%3A%2F%2Ffront10.com&knob-Show%20line%20numbers=true&knob-Centered=true&knob-Image%20circle=true&knob-Min%20height=100vh&knob-Language=javascript&knob-Show%20image=true&knob-Width=640px&knob-Image%20rounded=true&knob-Show%20job=true&knob-Expand=md&knob-Button%20type=facebook&knob-Volume=1&knob-Preview=images%2Fdemo%2Fdevelop.png&knob-Alt=This%20is%20an%20image%20example&knob-Source=https%3A%2F%2Fyoutu.be%2FdCrLwWdju68&knob-Use%20gray=true&knob-Opacity=1&knob-Code%20link=https%3A%2F%2Fcodesandbox.io%2Fs%2Fpmjvk5wl27&knob-Show%20name=true&knob-Url=https%3A%2F%2Ffront10.com&knob-Show%20border=true&knob-Show%20header=true&knob-Show%20text=true&knob-Show%20summary=true&knob-Brand%20logo=images%2Flogo%2Ffront10.png&knob-Brand%20name=&knob-Overlay%20color=%23373D45&knob-Fixed=true&knob-Height=360px&selectedKind=Components%2FGif&selectedStory=Default&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs"
              target="_blank"
            >
              <Image src="images/components/gif.png" alt="Gif" width="50" />
              <Header className="mt-3 component-link" type="h6">
                Gif
              </Header>
            </Link>
          </div>
          <div>
            <Link
              href="https://front10.com/landing-page-book/?knob-Show%20count=true&knob-Sub%20header=React%20components%20to%20build%21&knob-Header=Landing%20Page%20Book&knob-Code=var%20component%20%3D%20%7B%0A%09name%3A%20%22react-code%22%2C%0A%09author%3A%20%22front10-devs%22%2C%0A%09repo%3A%20%22https%3A%2F%2Fgitlab.com%2Ffront10-devs%2Flanding-page-book%22%0A%7D%3B&knob-Image=images%2Fgif%2Fwrite.gif&knob-Sub%20header%20position=bottom&knob-Parallax%20offset=0&knob-Type%20of%20buton=star&knob-Content%20align=center&knob-Show%20footer=true&knob-Btn%20text=stars&knob-With%20particles=true&knob-Brand%20link=https%3A%2F%2Ffront10.com&knob-Show%20line%20numbers=true&knob-Centered=true&knob-Image%20circle=true&knob-Min%20height=100vh&knob-Language=javascript&knob-Show%20image=true&knob-Show%20button%20text=true&knob-Width=640px&knob-Image%20rounded=true&knob-Show%20job=true&knob-Expand=md&knob-Button%20type=facebook&knob-Volume=1&knob-Preview=images%2Fdemo%2Fdevelop.png&knob-Alt=This%20is%20an%20image%20example&knob-Source=https%3A%2F%2Fyoutu.be%2FdCrLwWdju68&knob-Use%20gray=true&knob-Opacity=1&knob-Code%20link=https%3A%2F%2Fcodesandbox.io%2Fs%2Fpmjvk5wl27&knob-Show%20name=true&knob-Url=https%3A%2F%2Ffront10.com&knob-Show%20border=true&knob-Show%20header=true&knob-Show%20text=true&knob-Show%20summary=true&knob-Brand%20logo=images%2Flogo%2Ffront10.png&knob-Brand%20name=&knob-Overlay%20color=%23373D45&knob-Fixed=true&knob-Loading%20class=fa%20fa-circle-o-notch%20fa-spin&knob-Height=360px&selectedKind=Components%2FGithubButton&selectedStory=Default&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs"
              target="_blank"
            >
              <Image
                src="images/components/githubbutton.png"
                alt="Githubbutton"
                width="50"
              />
              <Header className="mt-3 component-link" type="h6">
                Github button
              </Header>
            </Link>
          </div>
        </Slider>
      </Container>
      <Container className="text-center mt-5">
        <Link
          className="btn btn-primary btn-started"
          href="https://front10.com/landing-page-book"
          target="_blank"
        >
          Explore
        </Link>
      </Container>
    </Section>
    <Section subTitle="Don't try this at home ;)" title="AN EXAMPLE">
      <Container>
        <Row>
          <Column className="col col-md-12">
            <div className="text-center">
              <p>Let's import the HERO component</p>
            </div>
            <Code
              readOnly
              theme="oceanic-next"
              languageCode="jsx"
              code={importThemes}
              showheader={false}
              showfooter={false}
              lineNumbers={true}
            />
          </Column>
        </Row>
        <Row>
          <Column className="col col-md-6 mt-5 code-secondary">
            <div className="text-center">
              <p>An example used to create a beautiful Hero component</p>
            </div>
            <Code
              readOnly
              theme="oceanic-next"
              languageCode="jsx"
              code={navBarCode}
              showheader={false}
              showfooter={false}
              lineNumbers={true}
            />
          </Column>
          <Column className="col col-md-6 mt-5">
            <div className="text-center">
              <p>It's that easy to have a beautiful Hero</p>
            </div>
            <div className="mt-3">
              <Hero
                backgroundColor="#212529"
                header="Front10"
                minHeight="350px"
                subHeader="Rewriting the world with React"
                image="images/hero/map-image.png"
                particlesParams={{
                  particles: {
                    shape: {
                      type: "star",
                      stroke: {
                        width: 1,
                        color: "#fff"
                      }
                    },
                    line_linked: {
                      enable: false
                    }
                  }
                }}
              />
            </div>
          </Column>
        </Row>
      </Container>
      <Container className="text-center mt-5">
        <Link
          className="btn btn-primary btn-started"
          href="https://front10.com/landing-page-book"
          target="_blank"
        >
          Explore
        </Link>
      </Container>
    </Section>
    <Section
      title="THEMING"
      subTitle=" Change the appearance of the components using standard CSS variables"
      gray
    >
      <Container>
        <Row>
          <Column>
            <Gif autoplay image="images/demo/themes.gif" />
          </Column>
        </Row>
      </Container>
      <Container className="text-center mt-5">
        <Link
          className="btn btn-primary btn-started"
          href="https://front10.com/landing-page-book"
          target="_blank"
        >
          Explore
        </Link>
      </Container>
    </Section>
    <Section subTitle="Used tecnologies and frameworks" title="BUILD WITH">
      <Container className="text-center BuildWith">
        <BuiltWith gray companies={build} />
      </Container>
    </Section>
    <Section subTitle="These are our members" title="TEAM" gray>
      <Container>
        <Team
          showBorder={false}
          members={team}
          socials={["linkedin", "twitter"]}
        />
      </Container>
      <Container className="text-center">
        <Link
          className="btn btn-primary btn-started"
          href="https://front10.com/landing-page-book"
          target="_blank"
        >
          Explore
        </Link>
      </Container>
    </Section>
    <Section
      subTitle="We are very happy to help ;)"
      title="FEEDBACK AND SUPPORT"
    >
      <Container className="text-center BuildWith">
        <Image
          src="images/support/maintenance.svg"
          alt="Maintenance"
          width="100"
          className="ml-3 mr-3"
        />
        <Image
          src="images/support/happy.svg"
          alt="Maintenance"
          width="100"
          className="ml-3 mr-3"
        />
        <p className="mt-3">
          For feedback, issues or if you want us to include{" "}
          <i>**new components**</i> please{" "}
          <Link
            href="https://github.com/front10/landing-page-book/issues"
            target="_blank"
          >
            click here
          </Link>
          .
        </p>
      </Container>
    </Section>
    <Section subTitle="Who donates us" title="BACKERS" gray>
      <Container className="text-center">
        <Backers backers={backers} imageBordered={false} />
      </Container>
    </Section>
    <Footer>
      <Row>
        <Column className="col-sm-12 col-md">
          <Copyright showAllRightText={false} text="Front10, LLC" />
        </Column>
        <Column className="col-sm-12 col-md mt-3 mt-md-0">
          <span>With ♥ by </span>
          <Link href="https://front10.com/" target="_blank">
            <Image
              alt="Front 10 logo"
              src="https://front10.com/img/logos/logo-main.png"
              width="100"
            />
          </Link>
        </Column>
        <Column className="col-sm-12 col-md mt-3 mt-md-0">
          <Social type="twitter" url="https://twitter.com/front10hello" />
          <Social
            type="linkedin"
            url="https://www.linkedin.com/company/front10/"
          />
        </Column>
      </Row>
    </Footer>
  </div>
);
