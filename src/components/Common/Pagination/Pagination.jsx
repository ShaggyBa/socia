import React from 'react'
import s from './Pagination.module.css'

export default function Pagination({ totalUsersCount, pageSize, currentPage, onChangePage, portionSize }) {

	const pagesCount = Math.ceil(totalUsersCount / pageSize);

	const pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	const portionCount = Math.ceil(pagesCount / portionSize);
	const [portionNumber, setPortionNumber] = React.useState(1);
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	const rightPortionPageNumber = portionNumber * portionSize;

	const onHandlePrevChangePage = () => {
		if (portionNumber > 1) {
			setPortionNumber(portionNumber - 1)
		}
	}

	const onHandleNextChangePage = () => {
		if (portionNumber < portionCount) {
			setPortionNumber(portionNumber + 1)
		}
	}

	return (
		<div className={s.pagination}>
			<button
				className={s["pagination--btn"]}
				onClick={onHandlePrevChangePage}
				disabled={portionNumber === 1}
			>Prev</button>

			{pagesCount && (
				pages
					.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
					.map(page => <span key={page}
						onClick={() => onChangePage(page)}
						className={currentPage === page ? s.selectedPage : ""}>{page}</span>)
			)}
			<button
				className={s["pagination--btn"]}
				onClick={onHandleNextChangePage}
				disabled={portionNumber === portionCount}
			>Next</button>
		</div>
	)
}
