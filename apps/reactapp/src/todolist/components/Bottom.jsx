import {  useContext } from "react";
const Bottom = ({ListContext}) => {
    const {  finishedList } = useContext(ListContext);
    const children = finishedList.map((i, index) => (
      <div key={index}>已完成:{i}</div>
    ));
    return <div>{children}</div>;
};
export default Bottom;