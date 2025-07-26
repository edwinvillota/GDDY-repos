import { useMemo, useState } from 'react';
import type { ExtractPropertiesByType } from '@/common/types/helpers/ExtractPropertiesByType';
import { useDebounce } from './useDebounce';

interface UseSearchOptions {
	debounceDelay?: number;
}

export function useSearch<
	TData,
	TSearchBy extends ExtractPropertiesByType<TData, string | number>[],
>(data: TData[] | undefined, searchBy: TSearchBy, options?: UseSearchOptions) {
	const [query, setQuery] = useState<string>('');
	const debouncedQuery = useDebounce(query, options?.debounceDelay ?? 1000);

	const filteredData = useMemo(() => {
		if (debouncedQuery) {
			return data?.filter((item) => {
				const filters = searchBy.map((prop) =>
					String(item[prop])
						.toLowerCase()
						.includes(debouncedQuery.toLowerCase()),
				);

				return filters.some(Boolean);
			});
		}

		return data;
	}, [data, searchBy, debouncedQuery]);

	return {
		filteredData,
		query,
		setQuery,
		isSearching: query !== debouncedQuery,
	} as const;
}
