import axios from '../constant/axios'

const Get = (url) => axios.get(url)
const Post = ({url, data, config}) => axios.post(url, data, config)
const Put = () => 
const Delete = () => {}