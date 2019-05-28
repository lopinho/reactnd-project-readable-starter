
const logger = (store) => (next) => (action) => {
    const result = next(action)
    console.group(action.type)
    console.log('Action is: ', result)
    console.log('state is: ', store.getState())
    console.groupEnd()
    return result
}

export default logger
