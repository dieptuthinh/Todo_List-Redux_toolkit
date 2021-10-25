import React from "react";
import Card from "../../Card"

Home.propTypes = {};

function Home() {
    const Cards = [
      {
        header: "TODO APP",
        title: "Todo List",
        text: "Make a to-do list",
        link:"/todo"
      },
      {
        header: "NOTE APP",
        title: "Take note",
        text: "Make a note app",
        link:"/note"
      },
      {
        header: "CONTACT APP",
        title: "Contact",
        text: "Make a contact app",
        link:"/contact"
      },

    ];  
  return (

    <div className="container my-5">
      <div className="row">
        {Cards.map(card => {
          const { header, title, text ,link } = card;
          return (
            <Card header={header} title={title} text={text} link={link }/>
          )
        })}
      </div>
    </div>
  );
}

export default Home;
