export default function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit); // 필요한 페이지의 개수

  return (
    <>
      <nav>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button>

        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
              // aria-current 속성 : 현재 페이지가 가리키는 버튼
            >
              {i + 1}
            </button>
          ))}

        <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </button>
      </nav>
    </>
  );
}
