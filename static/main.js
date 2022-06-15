const App = {
    data() {
        return {
            title: 'Hello World',
            basicSkills: [
                {name: 'Word', icon: 'img/word.png'},
                {name: 'Excel', icon: 'img/excel.png'},
                {name: 'PPT', icon: 'img/ppt.png'},
            ],
            mediaSkills: [
                {name: 'Photoshop', icon: 'img/ps.png'},
                {name: 'Premiere', icon: 'img/pr.png'},
                {name: 'Auditon', icon: 'img/au.png'},
                {name: 'Illustrator', icon: 'img/ai.png'},
            ],
            codeSkills: [
                {name: 'HTML', icon: 'img/h5.png'},
                {name: 'HTML', icon: 'img/css.png'},
                {name: 'HTML', icon: 'img/js.png'},
                {name: 'Vue', icon: 'img/vue.png'},
                {name: 'C', icon: 'img/c.png'},
                {name: 'Python', icon: 'img/py.png'},
            ]
        }
    }
}

Vue.createApp(App).mount('#app')