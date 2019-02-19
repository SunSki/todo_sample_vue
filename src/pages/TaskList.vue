<template> 
  <div id="TaskList">
    {{ msg }}

    <form>
      <button @click="addTodo()">Add Task</button><!-- v-on:click or @click -->
      <button @click="removeTodo()">Delete Finished Tasks</button>
      <p>input:<input type="text" v-model="newTodo" placeholder="task"></p><!-- v-modeで変数に入力値を与える -->
      <p>task:{{ newTodo }}</p>
    </form>

    <div class="task-list">

      <label class="task-list__item" 
        v-for="(todo, index) in todos" :key="todo.id" 
        v-bind:class="{ 'task-list__item--checked' : todo.done}"> <!-- v-vind:class="{ class : 条件 }" でクラスを動的に切り替えられる -->
          
          {{ index+1 }}:
          <input type="checkbox" v-model="todo.done">
          <input type="checkbox" v-model="todo.editing">
          <input v-if="todo.editing" v-model="todo.text" @keyup.enter="todo.editing = !todo.editing"><!-- trueで表示 falseで非表示 -->
            <span v-else>{{ todo.text }}</span>
      </label>

    </div>

  </div>
</template>


<script src='./js/TaskList.js'/>