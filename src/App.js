import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [teamList, setTeamList] = useState([{ name: "", email: "", role: "" }]);

  return (
    <div className="App">
      <Form getTeamList={teamList} getTeamListSetter={setTeamList} />

      <p>
        Team Members:
        <p>
          {teamList.map(item => {
            return (
              <div className="member-card">
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.role}</p>
              </div>
            );
          })}
        </p>
      </p>
    </div>
  );
}

export default App;
