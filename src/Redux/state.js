const ADD_POST= 'ADD-POST';

const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT'

let store={
_state : {
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Leva' },
            { id: 2, name: 'Ved' },
            { id: 3, name: 'Lexa' },
            { id: 4, name: 'Nekit' },
            { id: 5, name: 'Kiril' },
        ],
        messages: [
            { id: 1, message: 'Hey man what a you doing'},
            { id: 2, message: 'You a losser man'},
            { id: 3, message: 'React easy'},
            { id: 3, message: 'React easy'}
        ]
    },
    profilePage: {
        posts: [
            { id: 1, message: 'Hey man what a you doing', likes: 10 },
            { id: 2, message: 'You a losser man', likes: 51 },
            { id: 3, message: 'React easy', likes: 25 },
            { id: 3, message: 'React easy', likes: 25 }
        ],
        newPostText:''
    }
},
_rerenderEntireTree () {
    console.log('State changed')
},
getState(){
    return(this._state)
},
subscribe (observer) {
    this._rerenderEntireTree = observer;
},
dispatch(action) {
 if (action.type ==='ADD-POST'){
    let newPost = {
        id: 5,
        message:this._state.profilePage.newPostText,
        likes: 10
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText=''
    this._rerenderEntireTree(this._state);
 }
 else if (action.type ==='UPDATE-NEW-POST-TEXT'){
    this._state.profilePage.newPostText = action.newText;
    this._rerenderEntireTree(this._state);
}
}
}

export const addPostActionCreator = ()=>({type: ADD_POST })
    
export const updateNewPostTextActionCreator = (text)=>
   ({type: UPDATE_NEW_POST_TEXT,newText: text})
    

export default store;