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
        }
    }
}

Vue.createApp(App).mount('#app')