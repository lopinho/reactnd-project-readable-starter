import { getAllCategories } from '../utils/Api'
import { receiveCategories } from '../actions/categories'


export function getInitialDataHandler() {
    return (dispatch) => {
        getAllCategories()
            .then((categories) => {
                dispatch(receiveCategories(categories))
            })

    }
}
