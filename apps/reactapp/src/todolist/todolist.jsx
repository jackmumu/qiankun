import { useState, createContext, useContext } from "react";
const ListContext = createContext();

// 创建一个React组件
const ToDoList = () => {
  return (
    <>
      <Header></Header>
      <Content></Content>
    </>
  );
};


const Header = () => {
  return (
    <h1>
      ToDoList<span>222</span>
    </h1>
  );
};
const Content = () => {
  const [list, setList] = useState([]);
  const [finishedList, setFinishedList] = useState([]);
  const addItem = (data) => {
    setList([...list, data]);
  };
  return (
    <ListContext.Provider
      value={{ list, addItem, finishedList, setFinishedList }}
    >
      <Top></Top>
      <View></View>
      <Bottom></Bottom>
    </ListContext.Provider>
  );
};
const Bottom = () => {
  const { setFinishedList, finishedList } = useContext(ListContext);
  const children = finishedList.map((i, index) => (
    <div key={index}>已完成:{i}</div>
  ));
  return <div>{children}</div>;
};
const View = () => {
  const { list, setFinishedList, finishedList } = useContext(ListContext);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const children = list.map((i, index) => {
    const addFinsih = () => {
      setFinishedList([...finishedList, i]);
    };
    return (
      <div
        key={index}
        onMouseEnter={() => {
          setHoverIndex(index);
        }}
        onMouseLeave={() => {
          setHoverIndex(-1);
        }}
      >
        待完成： {i}
        {hoverIndex === index && (
          <span onClick={addFinsih} style={{ marginLeft: "30px" }}>
            ✔
          </span>
        )}
      </div>
    );
  });
  const style = {
    paddingLeft: "8px",
  };
  return <div style={style}>{children}</div>;
};
const Top = () => {
  const { addItem } = useContext(ListContext);
  const commit = () => {
    const value = document.querySelector("input").value;
    addItem(value);
  };
  const style = { display: "flex" };
  return (
    <div style={style}>
      <input type="text" />
      <div onClick={commit}>提交</div>
    </div>
  );
};
export default ToDoList;