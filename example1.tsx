import { FC } from 'react';

// TODO: Maybe use type ?
interface IItem {
    id: string;
    title: string;
    description: string;
}

// TODO: Maybe use type ?
interface IItemsListProps {
    items: IItem[];
}

// TODO: Maybe use type ?
interface IItemProps {
    items: IItem[];
}

const Item: FC<IItemProps> = ({ item }) => {
    return <p>{item.title}</p>
};

export const ItemsList: FC<IItemsListProps> = ({ items }) => {
    return (
        <>
            {items?.map((item) =>
                <Item key={item.id} item={item} />
            )}
        </>
    );
};
