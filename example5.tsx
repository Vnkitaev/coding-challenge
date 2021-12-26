import { useState, useCallback, FC } from 'react';
import { useQuery } from '@apollo/client';
import { Spinner, ErrorInfo, EmptyPlaceholder } from 'ui-package';

const SOME_QUERY = '';

export const ItemsList: FC = () => {
    const { error, data, loading } = useQuery(SOME_QUERY);

    if (loading) return <Spinner />;
    if (error) return <ErrorInfo error={error} />;
    if (data?.items?.length === 0) return <EmptyPlaceholder />;

    const [selectedItem, setSelectedItem] = useState<string |null>(null);

    const onSelect = useCallback((id) => {
        setSelectedItem(id)
    }, [setSelectedItem]);

    return (
        <>
            {data.items.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    selected={selectedItem === item.id}
                    onSelect={onSelect(item.id)}
                />
            )}
        </>
    );
};
