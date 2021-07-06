import { combineEpics } from 'redux-observable'
import { productlistingEpic } from './productlistingEpic'
import {productDetailsEpic} from './productDetailsEpic'

export const epics = combineEpics(
    productlistingEpic.productlist,
    productDetailsEpic.productDetails
)
