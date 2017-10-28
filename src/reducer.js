import axios from 'axios';

//actions
const GET_ALL_TASKS = "GET_ALL_TASKS"
const CREATE_TASK = "CREATE_TASK"
const UPDATE_TASK = "UPDATE_TASK"
const DELETE_TASK = "DELETE_TASK"
const COMPLETE_TASK = "COMPLETE_TASK"
const RECORD_NEW_TEXT = "RECORD_NEW_TEXT"


const initialState = {
    tasks: [],
    newTaskName: '',
    newTaskDescription: ''
}


//reducer
export default function reducer(state = initialState, action) {
    console.log(action.type, action.payload);
    switch (action.type) {
        case GET_ALL_TASKS + "_FULFILLED":
            return Object.assign({}, state, {tasks: action.payload});
        case CREATE_TASK:
            return Object.assign({}, state, {tasks: action.payload});
        case UPDATE_TASK:
            return Object.assign({}, state, {tasks: action.payload});
        case DELETE_TASK:
            return Object.assign({}, state, {tasks: action.payload});
        case COMPLETE_TASK:
            return Object.assign({}, state, {tasks: action.payload})
        case RECORD_NEW_TEXT:
            return Object.assign({}, state, {[action.key]: action.payload})
        
        default: return state;
    }
}

//action creators
export function getAllTasks() {
    return {
        type: GET_ALL_TASKS,
        payload: axios.get('https://practiceapi.devmountain.com/api/tasks')
                      .then(res => {
            return res.data
        })
    }
}

export function createTask(title) {
    return {
        type: CREATE_TASK,
        payload: axios.post('https://practiceapi.devmountain.com/api/tasks', title).then(res => res.data)
    }
}

export function updateTask(id, taskData) {
    console.log("updating task:", id, taskData)
    return {
        type: UPDATE_TASK,
        payload: axios.patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, taskData).then(res => res.data)
    }
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(res => res.data)
    }
}

export function completeTask(id) {
    return {
        type: DELETE_TASK,
        payload: axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(res => res.data)
    }
}

export function recordNewText(value, statefield) {
    return {
        type: RECORD_NEW_TEXT,
        payload: value,
        key: statefield
    }
}
