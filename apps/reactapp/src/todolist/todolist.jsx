import { useState, createContext, useContext } from "react";
import {Header, Bottom} from "./components";
import { Radio} from 'antd'
import { Input } from 'antd';
const ListContext = createContext();
// 创建一个React组件
const ToDoList = () => {
  return (
    <div className="lql-todolist">
      <Header></Header>
      <Content></Content>
    </div>
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
      <Bottom ListContext={ListContext}></Bottom>
    </ListContext.Provider>
  );
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
        <Radio></Radio> {i}
        {hoverIndex === index && (
          <span onClick={addFinsih} style={{ marginLeft: "30px" }}>
            ✔
          </span>
        )}
      </div>
    );
  });
  return <div>{children}</div>;
};
const Top = () => {
  const { addItem } = useContext(ListContext);
  const [value, setValue] = useState("");
  const commit = () => {
    addItem(value);
    setValue("");
  };
  const onChange = (event) => {
    setValue(event.target.value);
  }
  const Commit = () => {
    if(value) return ( <div className="lql-top__commit" onClick={commit}>提交</div>)
  }
  return (
    <div className="lql-top">
      <Input type="text"  value={value} onChange={onChange}/>
      <Commit></Commit>
    </div>
  );
};
export default ToDoList;
