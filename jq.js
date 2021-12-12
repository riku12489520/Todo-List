$(document).ready(function(){                  
    // 點擊按鈕新增
    $('.btn-add').click(function(){
      addTodos();
    });
    // Enter新增
    $('.todo__input').keypress(function(e){
      if (e.which === 13){
        addTodos();
      };
    });
  
    function addTodos(){
      const input_value = $('.todo__input').val();
      // 檢查前方是否有空白
      if ($.trim(input_value).length === 0) return;
      const todo = `
      <li class='todo'>
        <label class='todo__title' type='text'>
          <input class='todo__check' type='checkbox'>
          <span>${input_value}</span>
        </label>
        <button class='btn-del'>
          <span class="del-line l1"></span>
          <span class="del-line l2"></span>
        </button>
      </li>
      `
      // 新增 todo list
      $('.todo__list').append(todo);
      $('.todo__input').val('');
    };
    
    // 刪除todo, 用事件代理, 解決刪除動態新增的list
    // 透過父元素監聽 click 事件
    $('.todo__list').click(function(event){
      const target = $(event.target);
      //刪除todo
      if (target.hasClass('btn-del')){
        target.parent().remove();
      };
    });
    
    
  });
  