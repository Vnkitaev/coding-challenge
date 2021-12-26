const asyncPublisher = {
    publish(item) {

    }
};

const publishItems = async () => {
    const itemsToPublish = ["foo", "bar", "baz", "boo", "quux"];

    for (const item of itemsToPublish) {
        await asyncPublisher.publish(item);
    }
};

// Or with Promise.all and publish all items in one moment
// const publishItems = () => {
//     const itemsToPublish = ["foo", "bar", "baz", "boo", "quux"];
//
//     return Promise.all(itemsToPublish.map(item => asyncPublisher.publish(item)));
// };

publishItems().catch(() => {
    throw new Error("Failed to publish items!");
});
