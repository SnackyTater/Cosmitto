import axios from '../constant/axios'
import {
    MEDIA as mediaURL
} from '../constant/api'

export const createImage = (body = {}, config = {}) => axios.post(mediaURL, body, config)

export const deleteImage = (param = '', config = {}) => axios.delete(`mediaURL/${param}`, config)