const definedItems = <T = unknown>(items: T[]): T[] => items.filter(i => !!i);

// or with lodash
// const definedItems = <T = unknown>(items: T[]): T[] => filter(items, Boolean);
