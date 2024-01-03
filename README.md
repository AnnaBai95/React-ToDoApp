# Frontend Mentor - Todo app solution

This is my solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Recording](#recording)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

My todo app solution was created using React and plain css. Currently, this implementation uses plain css and only has light mode. My Tailwind solution is currently in dev and the dark mode will come after.


### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Recording

![Screen recording](./frontendmentor/recording/to-do-screen.mp4)


### Links

- Solution URL: [Github](https://github.com/AnnaBai95/React-ToDoApp)
- Live Site URL: [Vercel](https://react-to-do-app-xi-one.vercel.app/)

## My process

To build the application, I created 4 components. 
    - Todo.js - Parent component
    - EntryBar.js - Textbox for input
    - List.js - Contains the list of tasks
    - DraggableTask.js - Contains a single task

List contains DraggableTask and Todo contains EntryBar and list. I used [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) to handle the drag and drop functionality.

### Built with
- Flexbox
- [React](https://reactjs.org/) - JS library


### What I learned

- I learnt that I do not neccessarily have to create all of the methods in the parent component and then pass them down as props.

- I learnt the basics of using the [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)

### Continued development

For my continued development I want to learn how to identify when to use the useState hook much faster

### Useful resources

- [ChatGPT](https://chat.openai.com/) - This helped me with speeding up my debugging process
- [React's Official Webiste](https://react.dev/) - This helped me with the structure of my components



## Author
- Frontend Mentor - [@AnnaBai95](https://www.frontendmentor.io/profile/AnnaBai95)

