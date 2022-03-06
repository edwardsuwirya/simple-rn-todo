const reactotron = {
    setAsyncStorageHandler: () => reactotron,
    configure: () => reactotron,
    useReactNative: () => reactotron,
    use: () => reactotron,
    connect: () => reactotron,
};
reactotron.createEnhancer = jest.fn();

export default reactotron;
