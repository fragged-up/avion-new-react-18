// // hooks/useLoadMore.js
// import { useState, useCallback, useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
// import { fetchProducts } from '@/stores/products/thunks';
// import { selectProductsMeta } from '@/stores/products/selectors';

// function useLoadMore(initialCategory: string | null = null, initialSortOption: string | null = null) {
//   const [loadingMore, setLoadingMore] = useState(false);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(false);
//   const dispatch = useAppDispatch();
//   const meta = useAppSelector(selectProductsMeta);

//   const loadMore = useCallback(async () => {
//     if (!loadingMore && hasMore) {
//       setLoadingMore(true);
//       const params = {
//         category: initialCategory,
//         sort: initialSortOption,
//         page: page + 1,
//       };
//       const result = await dispatch(fetchProducts(params));
//       setLoadingMore(false);
//       if (!result.error) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     }
//   }, [dispatch, hasMore, loadingMore, initialCategory, initialSortOption, page]);

//   useEffect(() => {
//     if (meta?.pagination) {
//       const { current_page, total_pages } = meta.pagination;
//       setHasMore(current_page < total_pages);
//     } else {
//       setHasMore(false);
//     }
//   }, [meta]);

//   const resetPagination = useCallback(() => {
//     setPage(1);
//     setHasMore(false);
//   }, []);

//   return { loadingMore, hasMore, loadMore, page, resetPagination };
// }

// export default useLoadMore;
