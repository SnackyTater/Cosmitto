import axios from "../constant/axios"
import {
    MATCH_MAKING_RECS,
    MATCH_MAKING_LIKE,
    MATCH_MAKING_NOPE,
    MATCH_MAKING_MATCH_LIST
} from "../constant/api"

export const getRecommendList = (config = {}) => axios.get(MATCH_MAKING_RECS, config)

export const likeUser = (body = {}, config = {}) => axios.post(MATCH_MAKING_LIKE, body, config)

export const nopeUser = (body = {}, config = {}) => axios.put(MATCH_MAKING_NOPE, body, config)

export const getMatchList = (config = {}) => axios.get(MATCH_MAKING_MATCH_LIST, config)
