import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const [count, setCount] = useState(0);

  function handleActiveTab(id) {
    setActiveTab(id);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }
  function handleShow() {
    setIsShow(!isShow);
  }

  return (
    <div>
      <button onClick={handleShow}>❌</button>
      {isShow ? (
        <div className="tab">
          <div className="tab__header">
            {tabData.map((tabData) => {
              return (
                <button
                  onClick={() => handleActiveTab(tabData.id)}
                  key={tabData.id}
                  className={activeTab === tabData.id ? "active" : ""}
                >
                  <span>{tabData.title}</span>
                  <span className="tab-indicator"></span>
                </button>
              );
            })}
          </div>
          <div className="tab__content">
            {tabData[activeTab - 1].content} - {count}
          </div>
        </div>
      ) : (
        <p>closed</p>
      )}
    </div>
  );
}
export default App;
