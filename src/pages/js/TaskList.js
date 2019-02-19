
export default{
    title: TaskList,
    data(){ //初期値を設定
        return{
            msg: 'To Do List',
            todos:[
                {text : 'vue-router', done:false, editing:false},
                {text : 'vuex', done:false, editing:false},
                {text : 'vue-loader', done:false, editing:false},
                {text : 'awsome-vue', done:true, editing:false},
            ],
            newTodo:""
        }
    },
    methods: {
        addTodo: function(event){
            let text = this.newTodo.trim()//両端のスペースを削除
            if (!text){
                return  //入力がないときはスキップして終了
            }
            this.todos.push({//pushでリストに追加
                text: text,
                done: false
            })
            this.newTodo = ''
        },

        removeTodo: function (event){
            for(let i = this.todos.length-1; i >= 0; i--){//0 ~ (i-1) を巡回
                if(this.todos[i].done) {
                    this.todos.splice(i,1)//iから数えて1つ目を削除  splice(index,番目,置き換える文字列)
                }
            }
        }
    },
}