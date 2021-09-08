import React from 'react';
// import { useState }  from 'react';


/* カスタムフック */
import usePagination from '../hooks/pagination';


function Todo() {
  const items = ["Huyen", "Hoa", "Hung", "Long"]
  const { item, currentPage } = usePagination(items , 1);
  return (
    <div>
      <p>学生一覧 { items }</p>
      <p>位置：{currentPage}</p>
      <p>名前: { item }</p>
      <button>次に</button>
      <button>前に</button>
    </div>
  );
}

export default Todo;