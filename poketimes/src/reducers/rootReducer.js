const initState= {
  posts: [{
    id: "1",
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book"
  },
  {
    id: "2",
    title: "qui est esse",
    body: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book"
  },
  {
    id: "3",
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book"
  }]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST'){
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }

  return state;
}

export default rootReducer
