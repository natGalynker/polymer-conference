import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../src";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  bench: require("../assets/fall-benches.jpg"),
  diagram: require("../assets/architecture-diagram.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")

};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Polymer
            </Heading>
            <Heading size={1} fit caps>
              A new Google technology library
            </Heading>
            <Heading size={1} fit caps textColor="black">
            Where you can create your own custom elements
            </Heading>
            <Link href="http://pubnub.github.io/paper-chat/">
              <Text bold caps textColor="tertiary">Here is an Example in action built by Tomomi </Text>
            </Link>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
          Polymer Architecture
          </Heading>
            <Image src={images.diagram.replace("/", "")} margin="0px auto 40px" height="500px"/>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.bench.replace("/", "")} bgDarken={0.75} textColor="tertiary">
            <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
            Polymer Tools
            </Heading>
            </Appear>
            <Appear><ListItem>Manipulating The Shadow Dom</ListItem></Appear>
            <Appear><ListItem>Creating Custom Elements</ListItem></Appear>
            <Appear><ListItem>Using Polymer Elements Library</ListItem></Appear>
            <Appear><ListItem>Working with HTML Imports</ListItem></Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="navy" textColor="primary">
          <Heading size={1} capts fit textColor="primary">
            Polymer Core
          </Heading>
            <List>
              <Appear><ListItem>Event Handlers in HTML</ListItem></Appear>
              <Appear><ListItem>AJAX calls in HTML</ListItem></Appear>
              <Appear><ListItem>Data binding </ListItem></Appear>
              <Appear><ListItem>Accessing Googles APIs</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={4} textColor="black">
            Example Polymer Event Handlers
          </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/handlers.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={4} textColor="black">
            Example Polymer data-binding
          </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={4} textColor="black">
            Example Polymer google API AJAX
          </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/youtube.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="navy" textColor="primary">
          <Heading size={1} capts fit textColor="primary">
            Polymer Elements Catalogs
          </Heading>
            <List>
              <Appear><ListItem>Paper Elements</ListItem></Appear>
              <Appear><ListItem>Gold Elements</ListItem></Appear>
              <Appear><ListItem>Iron Elements </ListItem></Appear>
              <Appear><ListItem>Google Web Componenets</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
            Polymer
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
            Creating A Library Usable Acoss All Frameworks
            </Heading>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={3} caps fit lineHeight={1.5} textColor="primary">
            This has been A presenation made By Natalia, help from:
            </Heading>
            <Link href="http://www.formidable.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
