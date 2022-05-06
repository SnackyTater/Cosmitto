import instance from "./axios/axios"

const get = ({url, config}) => instance.get(url = '', config = {})
const post = ({url, config, body}) => instance.post(url, body, config)
const put = ({url, config, body}) => instance.put(url, body, config)
const remove = ({url, config}) => instance.delete(url, config)

export {
    get, post, put, remove,
}