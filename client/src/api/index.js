import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })


API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})


//Auth
export const logIn = (authData) => API.post('/user/login', authData); // Pass data to the database
export const singUp = (authData) => API.post('/user/signup', authData); // Pass data to the database

//Question
export const postQuestion = (questionData) => API.post('/question/Ask', questionData)
export const getAllQuestion = () => API.get('/question/get')
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId })
export const deleteQuestion = (id) => API.delete(`/question/delete/${id}`)
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers })
export const voteQuestion = (id, value, userId) => API.patch(`/question/vote/${id}`, { value, userId })
// export const deleteAnswer = 

export const getAllUsers = () => API.get('/user/getAllUsers');