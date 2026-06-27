import {memo} from 'react';
const style ={
  width: '100px',
  height: '200px',
  backgroundColor: 'lightblue',
}

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log('ChildArea component rendered');

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("無駄なループ");
  });

  return (
    <>
    {open && (
      <div style={style}>
        <p>子コンポーネント</p>
        <button onClick={onClickClose}>閉じる</button>
      </div>
    )}
    </>
  );
});

