import React, { Component } from "react";

class App extends Component {
  state = {
    increment: 50,
  };
  incrementMe = () => {
    this.setState((prevState) => ({
      increment: prevState.increment + 1,
    }));
  };
  handleScroll = () => {
    console.log("Scroll", window.scrollY);
  };
  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("scroll", this.handleScroll);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", snapshot);
    console.log("componentDidUpdate", prevState);
  }

  componentWillUnmount() {
    console.log("Cleanupu Activity");
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    console.log("rendering..");
    return (
      <>
        <p>{this.state.increment}</p>
        <button onClick={this.incrementMe}>Click me</button>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem id adipisci fugiat hic amet. Error beatae maxime
          consequatur, quidem veniam odit adipisci earum maiores quaerat,
          dolores nulla nihil sapiente sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nemo deserunt numquam cum ratione,
          accusamus pariatur omnis explicabo dolore nulla quam dolorem aperiam
          inventore ex repudiandae deleniti sapiente. Pariatur, facere
          illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          TenetLorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem id adipisci fugiat hic amet. Error beatae maxime
          consequatur, quidem veniam odit adipisci earum maiores quaerat,
          dolores nulla nihil sapiente sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nemo deserunt numquam cum ratione,
          accusamus pariatur omnis explicabo dolore nulla quam dolorem aperiam
          inventore ex repudiandae deleniti sapiente. Pariatur, facere
          illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur, minima, mollitia itaque quidem laborum perferendis ex ut ab
          ea sit optio doloremque eos at nemo minus earum iure vitae
          sunt.loreLorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem id adipisci fugiat hic amet. Error beatae maxime
          consequatur, quidem veniam odit adipisci earum maiores quaerat,
          dolores nulla nihil sapiente sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nemo deserunt numquam cum ratione,
          accusamus pariatur omnis explicabo dolore nulla quam dolorem aperiam
          inventore ex repudiandae deleniti sapiente. Pariatur, facere
          illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur, minima, mollitia itaque quidem laborum perferendis ex ut ab
          ea sit optio doloremque eos at nemo minus earum iure vitae
          sunt.loreLorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem id adipisci fugiat hic amet. Error beatae maxime
          consequatur, quidem veniam odit adipisci earum maiores quaerat,
          dolores nulla nihil sapiente sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nemo deserunt numquam cum ratione,
          accusamus pariatur omnis explicabo dolore nulla quam dolorem aperiam
          inventore ex repudiandae deleniti sapiente. Pariatur, facere
          illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur, minima, mollitia itaque quidem laborum perferendis ex ut ab
          ea sit optio doloremque eos at nemo minus earum iure vitae
          sunt.loreLorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem id adipisci fugiat hic amet. Error beatae maxime
          consequatur, quide m veniam odit adipisci earum maiores quaerat,
          dolores nulla    nihil sapiente sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nemo deserunt numquam cum ratione,
          accusamus pariatur omnis explicabo dolore nulla quam dolorem aperiam
          inventore ex repudiandae deleniti sapiente. Pariatur, facere
          illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur, minima, mollitia itaque quidem laborum perferendis ex ut ab
          ea sit optio doloremque eos at nemo minus earum iure vitae
          sunt.loreLorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem id adipisci fugiat hic amet. Error beatae maxime
          consequatur, quidem veniam odit adipisci earum maiores quaerat,
          dolores nulla nihil sapiente sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nemo deserunt numquam cum ratione,
          accusamus pariatur omnis explicabo dolore nulla quam dolorem aperiam
          inventore ex repudiandae deleniti sapiente. Pariatur, facere
          illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur, minima, mollitia itaque quidem laborum perferendis ex ut ab
          ea sit optio doloremque eos at nemo minus earum iure vitae
          sunt.loreLorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem id adipisci fugiat hic amet. Error beatae maxime
          consequatur, quidem veniam odit adipisci earum maiores quaerat,
          dolores nulla nihil sapiente sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nemo deserunt numquam cum ratione,
          accusamus pariatur omnis explicabo dolore nulla quam dolorem aperiam
          inventore ex repudiandae deleniti sapiente. Pariatur, facere
          illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur, minima, mollitia itaque quidem laborum perferendis ex ut ab
          ea sit optio doloremque eos at nemo minus earum iure vitae
          sunt.loreLorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem id adipisci fugiat hic amet. Error beatae maxime
          consequatur, quidem veniam odit adipisci earum maiores quaerat,
          dolores nulla nihil sapiente sit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nemo deserunt numquam cum ratione,
          accusamus pariatur omnis explicabo dolore nulla quam dolorem aperiam
          inventore ex repudiandae deleniti sapiente. Pariatur, facere
          illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur, minima, mollitia itaque quidem laborum perferendis ex ut ab
          ea sit optio doloremque eos at nemo minus earum iure vitae
          sunt.loreur, minima, mollitia itaque quidem laborum perferendis ex ut
          ab ea sit optio doloremque eos at nemo minus earum iure vitae
          sunt.lore
        </p>
      </>
    );
  }
}

export default App;
