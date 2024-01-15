import React from "react";
import "./Square.css"

const Square = ({onClick, value}) => {

  return ( 
    <button className = "square"
    onClick = {
      () => {
        onClick()
      }
    } >
    {
      value
    } </button>
  )


}

export default Square;

// export default class Square extends React.Component {

//   render(){
//     return (
//       <button className="square"
//         onClick={ () => {this.props.onClick()} } 
//       >
//         { this.props.value }
//       </button>
//     )
//   }

// }

// Props vs State

/* Props
1. Props 는 Properties의 줄임말
2. Props는 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터 등을 전달하는 방법 
3. Props는 읽기 전용으로 immutable하며 자녀 컴포넌트 입장에서는 변하지 않는다. (부모 컴포넌트에서 변경해줘야함)
*/

/* State
1. 부모 컴포넌트에서 자녀 컴포넌트로 데이터를 보내는게 아닌 해당 컴포넌트 내부에서 데이터를 전달할 때 사용
2. State는 mutable하다
3. State가 변하면 re-render된다.
*/