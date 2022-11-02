import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10); // 페이지 당 게시물 수
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const offset = (page - 1) * limit; // 첫 게시물의 위치

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const data = res.data;
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>게시글 목록</h1>

      <label>
        페이지 당 표시할 게시물 수 : &nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => {
            setLimit(Number(value));
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </label>

      <main>
        {/* slice() : 첫 게시물부터 마지막 게시물까지만 루프 */}
        {posts.slice(offset, offset + limit).map(({ id, title, body }) => (
          <div key={id}>
            <strong>
              {id}. {title}
            </strong>
            <p>{body}</p>
          </div>
        ))}
      </main>

      <footer>
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </>
  );
}
